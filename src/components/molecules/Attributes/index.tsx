import { Container } from "./styles";

export const Attributes = () => {
  const handleInputChange = () => {
    console.log("mudou");
  };

  return (
    <Container className="flex_ccr">
      <div className="capability flex_csr">
        <div className="mod flex_ccc">
          <input type="text" value="11" onChange={handleInputChange} />
        </div>
        <p>Força</p>
        <div className="points flex_ccc">
          {new Array(5).fill(0).map((index: string) => {
            return <div key={index} className="mark" />;
          })}
        </div>
        <div className="points flex_ccc">
          {new Array(0).fill(0).map((index: string) => {
            return <div key={index} className="positive" />;
          })}
        </div>
        <div className="points flex_ccc">
          {new Array(0).fill(0).map((index: string) => {
            return <div key={index} className="negative" />;
          })}
        </div>
      </div>

      <div className="capability flex_csr">
        <div className="mod flex_ccc">
          <input type="text" value="20" onChange={handleInputChange} />
        </div>
        <p>Destreza</p>
        <div className="points flex_ccc">
          {new Array(5).fill(0).map((index: string) => {
            return <div key={index} className="mark" />;
          })}
        </div>
        <div className="points flex_ccc">
          {new Array(5).fill(0).map((index: string) => {
            return <div key={index} className="positive" />;
          })}
        </div>
        <div className="points flex_ccc">
          {new Array(0).fill(0).map((index: string) => {
            return <div key={index} className="negative" />;
          })}
        </div>
      </div>

      <div className="capability flex_csr">
        <div className="mod flex_ccc">
          <input type="text" value="16" onChange={handleInputChange} />
        </div>
        <p>Constituição</p>
        <div className="points flex_ccc">
          {new Array(5).fill(0).map((index: string) => {
            return <div key={index} className="mark" />;
          })}
        </div>
        <div className="points flex_ccc">
          {new Array(3).fill(0).map((index: string) => {
            return <div key={index} className="positive" />;
          })}
        </div>
        <div className="points flex_ccc">
          {new Array(0).fill(0).map((index: string) => {
            return <div key={index} className="negative" />;
          })}
        </div>
      </div>

      <div className="capability flex_csr">
        <div className="mod flex_ccc">
          <input type="text" value="20" onChange={handleInputChange} />
        </div>
        <p>Inteligência</p>
        <div className="points flex_ccc">
          {new Array(5).fill(0).map((index: string) => {
            return <div key={index} className="mark" />;
          })}
        </div>
        <div className="points flex_ccc">
          {new Array(5).fill(0).map((index: string) => {
            return <div key={index} className="positive" />;
          })}
        </div>
        <div className="points flex_ccc">
          {new Array(0).fill(0).map((index: string) => {
            return <div key={index} className="negative" />;
          })}
        </div>
      </div>

      <div className="capability flex_csr">
        <div className="mod flex_ccc">
          <input type="text" value="8" onChange={handleInputChange} />
        </div>
        <p>Sabedoria</p>
        <div className="points flex_ccc">
          {new Array(5).fill(0).map((index: string) => {
            return <div key={index} className="mark" />;
          })}
        </div>
        <div className="points flex_ccc">
          {new Array(0).fill(0).map((index: string) => {
            return <div key={index} className="positive" />;
          })}
        </div>
        <div className="points flex_ccc">
          {new Array(1).fill(0).map((index: string) => {
            return <div key={index} className="negative" />;
          })}
        </div>
      </div>

      <div className="capability flex_csr">
        <div className="mod flex_ccc">
          <input type="text" value="10" onChange={handleInputChange} />
        </div>
        <p>Carisma</p>
        <div className="points flex_ccc">
          {new Array(5).fill(0).map((index: string) => {
            return <div key={index} className="mark" />;
          })}
        </div>
        <div className="points flex_ccc">
          {new Array(0).fill(0).map((index: string) => {
            return <div key={index} className="positive" />;
          })}
        </div>
        <div className="points flex_ccc">
          {new Array(0).fill(0).map((index: string) => {
            return <div key={index} className="negative" />;
          })}
        </div>
      </div>
    </Container>
  );
};
