import { google_logo } from "@/assets"
import { showToast } from "@/providers"
import { SignUpData, SignUpError } from "@/types"
import { parseJwt } from "@/utils/jwtParser"
import { useGoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../common/Button"
import Input from "../common/Input"
import { Modal, google_btn, login_btn } from "./Sign.styles"

export default function SignUp({ style }: any) {
  const [signUpData, setSignUpData] = useState<SignUpData>({ user: "", password: "", passwordRepeat: "", email: "" })
  const [error, setError] = useState<SignUpError>({
    user: false,
    password: false,
    passwordRepeat: false,
    email: false,
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    if (loading) return showToast("Já esta carregando")
    if (!validateFields()) return showToast("Preencha todos os campos!")
    setLoading(true)
    try {
      const res: SignUpResponse = await validadeSignUpInfo()
      showToast(res.message, "success")
      navigate("/home")
    } catch (error) {
      showToast(error.message)
    } finally {
      setLoading(false)
    }
  }
  const validateFields = () => {
    const { user, password, email, passwordRepeat } = signUpData
    const invalidFields = user === "" || password === "" || email === "" || passwordRepeat === ""
    const diferentPassword = password !== passwordRepeat

    setError((prevError) => ({
      ...prevError,
      user: user === "",
      password: password === "",
      email: email === "",
      passwordRepeat: passwordRepeat === "" || diferentPassword,
    }))

    return !invalidFields && !diferentPassword
  }

  const validadeSignUpInfo = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ success: true, message: "Deu bom, conta criada!" })
        reject({ success: false, message: "Não deu bom, tenta denovo" })
      }, 1000)
    })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setSignUpData({
      ...signUpData,
      [name]: value,
    })
    setError((prevError) => ({ ...prevError, [name]: value === "" }))
  }

  const googleSignIn = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      getGoogleProfile(tokenResponse.access_token)
      showToast("Você está logado!", "success")
      navigate("/home")
    },
    onError: () => {
      showToast("Login com google falhou")
    },
  })

  const getGoogleProfile = async (access_token: string) => {
    console.log(access_token)

    const url = `${access_token}`
    await axios
      .get(url)
      .then((res) => console.log(res.data))
      .catch((error) => showToast(error))
  }

  useGoogleOneTapLogin({
    onSuccess: (response) => {
      console.log(parseJwt(response.credential))
      showToast("Você está logado!", "success")
      navigate("/home")
    },
    onError: () => {
      showToast("Login com google falhou")
    },
  })

  return (
    <Modal title="modal" onSubmit={handleSignUp} style={style}>
      <div className="title">
        <h1>Bem-vindo 🎉</h1>
        <p>Bota suas informações aqui embaixo pra criar uma nova conta.</p>
      </div>
      <Input placeholder="Qual seu nome?" onChange={handleChange} name="user" autoFocus inputError={error.user} />
      <Input placeholder="Qual email tu usa?" onChange={handleChange} name="email" inputError={error.email} />
      <Input
        type="password"
        placeholder="Bota uma senha forte"
        onChange={handleChange}
        name="password"
        inputError={error.password}
      />
      <Input
        type="password"
        placeholder="Repete a senha pra não esquecer"
        onChange={handleChange}
        name="passwordRepeat"
        inputError={error.passwordRepeat}
      />
      <Button style={login_btn} type="submit" text="Criar conta" loading={loading} />
      <Button
        icon={{ src: google_logo, alt: "google_logo" }}
        onClick={() => googleSignIn()}
        text="Continuar com Google"
        style={google_btn}
      />
    </Modal>
  )
}
