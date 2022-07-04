import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import useValidation from "./hooks/useValidation";
import * as S from "./styled";

const formFields = [
  {
    id: "logradouro",
    label: "Logradouro",
    type: "text",
  },
  {
    id: "bairro",
    label: "Bairro",
    type: "text",
  },
  {
    id: "localidade",
    label: "Localidade",
    type: "text",
  },
  {
    id: "uf",
    label: "UF",
    type: "text",
  },
];

const App = () => {
  const [dados, setDados] = React.useState("");
  const cep = useValidation("cep");

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate) {
      fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then((response) => response.json())
        .then((json) => setDados(json));
      console.log(dados);
    } else {
      console.log("Não enviar");
    }
  }
  return (
    <>
      <S.Container>
        <S.Section>
          <S.Section2>
            <form onSubmit={handleSubmit}>
              <Input
                width="80px"
                fontSize="13px"
                padding="2px 0px 2px 15px"
                label="CEP:"
                id="cep"
                type="text"
                value={cep.value}
                onChange={cep.onChange}
                onBlur={cep.onBlur}
                placeholder="00000-000"
              />
              <br />
              <Button>Enviar</Button>
              {cep.error ? <p>{cep.error}</p> : ""}
              {dados.erro ? <p>Não existe esse CEP!</p> : ""}
              {formFields.map(({ id, label, type }) => (
                <div key={id}>
                  {/* <label htmlFor={id}>{label}</label> */}
                  <Input
                    width="380px"
                    padding="5px 10px 5px 8px"
                    type={type}
                    id={id}
                    value={dados[id]}
                    placeholder={label}
                  />
                </div>
              ))}
            </form>
          </S.Section2>
        </S.Section>
      </S.Container>
    </>
  );
};
export default App;
