import { Container } from "./styles";

export const Capabilities = () => {
  const handleChangeInput = () => {
    console.log("mudou");
  };

  return (
    <Container className="flex_ccr">
      <div className="capability flex_csr">
        <div className="mod flex_ccc">
          <input type="text" value="+3" onChange={handleChangeInput} />
        </div>
        <p>Proficiência</p>
      </div>
      <div className="capability flex_csr">
        <div className="mod flex_ccc">
          <input type="text" value="16" onChange={handleChangeInput} />
        </div>
        <p>Armadura</p>
      </div>
      <div className="capability flex_csr">
        <div className="mod flex_ccc">
          <input type="text" value="+5" onChange={handleChangeInput} />
        </div>
        <p>Iniciativa</p>
      </div>
      <div className="capability flex_csr">
        <div className="mod flex_ccc">
          <input type="text" value="+5" onChange={handleChangeInput} />
        </div>
        <p>Descolamento</p>
      </div>
    </Container>
  );
};
