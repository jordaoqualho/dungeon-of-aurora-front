/* eslint-disable @typescript-eslint/unbound-method */
import { CSSProperties, Component, MouseEvent, ReactNode, createRef } from "react"

interface Props {
  style?: CSSProperties
  handleMouseEnter?: (e: MouseEvent<HTMLDivElement>) => void
  handleMouseMove?: (e: MouseEvent<HTMLDivElement>) => void
  handleMouseLeave?: (e: MouseEvent<HTMLDivElement>) => void
  options?: {
    reverse?: boolean
    max?: number
    perspective?: number
    easing?: string
    scale?: string
    speed?: string
    transition?: boolean
    axis?: string | null
    reset?: boolean
  }
  children?: ReactNode
}

interface State {
  style: CSSProperties
}

export class TiltBox extends Component<Props, State> {
  private width: number | null = null
  private height: number | null = null
  private left: number | null = null
  private top: number | null = null
  private transitionTimeout: number | null | NodeJS.Timeout = null
  private updateCall: number | null = null
  private element: Element | Text | null = null
  private elementRef: React.RefObject<HTMLDivElement>

  private settings = {
    reverse: false,
    max: 10,
    perspective: 500,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    scale: "1.0",
    speed: "1000",
    transition: true,
    axis: null,
    reset: true,
    ...this.props.options,
  }
  private reverse = this.settings.reverse ? -1 : 1

  constructor(props: Props) {
    super(props)
    this.state = {
      style: { height: "100%" },
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.elementRef = createRef() // Initialize the ref
  }

  componentDidMount() {
    // this.element = findDOMNode(this);
    this.element = this.elementRef.current
  }

  componentWillUnmount() {
    clearTimeout(this.transitionTimeout as number)
    cancelAnimationFrame(this.updateCall as number)
  }

  handleMouseEnter(e: MouseEvent<HTMLDivElement>) {
    this.updateElementPosition()
    this.setTransition()
    const { handleMouseEnter } = this.props
    if (handleMouseEnter) handleMouseEnter(e)
  }

  reset() {
    window.requestAnimationFrame(() => {
      this.setState((prevState) => ({
        style: {
          ...prevState.style,
          transform: `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        },
      }))
    })
  }

  handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    e.persist()
    if (this.updateCall !== null) {
      window.cancelAnimationFrame(this.updateCall)
    }
    this.updateCall = requestAnimationFrame(this.update.bind(this, e))
    const { handleMouseMove } = this.props
    if (handleMouseMove) handleMouseMove(e)
  }

  setTransition() {
    clearTimeout(this.transitionTimeout as number)
    this.setState((prevState) => ({
      style: {
        ...prevState.style,
        transition: `${this.settings.speed}ms ${this.settings.easing}`,
      },
    }))
    this.transitionTimeout = setTimeout(() => {
      this.setState((prevState) => ({
        style: {
          ...prevState.style,
          transition: "",
        },
      }))
    }, parseInt(this.settings.speed || "0", 10))
  }

  handleMouseLeave(e: MouseEvent<HTMLDivElement>) {
    this.setTransition()
    if (this.settings.reset) {
      this.reset()
    }
    const { handleMouseLeave } = this.props
    if (handleMouseLeave) handleMouseLeave(e)
  }

  getValues(e: MouseEvent<HTMLDivElement>) {
    const x = (e.nativeEvent.clientX - (this.left as number)) / (this.width as number)
    const y = (e.nativeEvent.clientY - (this.top as number)) / (this.height as number)
    const _x = Math.min(Math.max(x, 0), 1)
    const _y = Math.min(Math.max(y, 0), 1)
    const tiltX = (this.reverse * (this.settings.max / 2 - _x * this.settings.max)).toFixed(2)
    const tiltY = (this.reverse * (_y * this.settings.max - this.settings.max / 2)).toFixed(2)
    const percentageX = _x * 100
    const percentageY = _y * 100
    return {
      tiltX,
      tiltY,
      percentageX,
      percentageY,
    }
  }

  updateElementPosition() {
    const rect = this.element instanceof HTMLElement ? this.element.getBoundingClientRect() : null
    this.width = rect?.width || null
    this.height = rect?.height || null
    this.left = rect?.left || null
    this.top = rect?.top || null
  }

  update(e: MouseEvent<HTMLDivElement>) {
    const values = this.getValues(e)
    this.setState((prevState) => ({
      style: {
        ...prevState.style,
        transform: `perspective(${this.settings.perspective}px) rotateX(${
          this.settings.axis === "x" ? 0 : values.tiltY
        }deg) rotateY(${this.settings.axis === "y" ? 0 : values.tiltX}deg) scale3d(${this.settings.scale}, ${
          this.settings.scale
        }, ${this.settings.scale})`,
      },
    }))
    this.updateCall = null
  }

  render() {
    const style: CSSProperties = {
      ...this.props.style,
      ...this.state.style,
    }

    return (
      <div
        ref={this.elementRef}
        style={style}
        onMouseEnter={this.handleMouseEnter}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.props.children}
      </div>
    )
  }
}
