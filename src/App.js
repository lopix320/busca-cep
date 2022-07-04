import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import * as S from "./style";

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
  const [cep, setCep] = React.useState("");
  const [dados, setDados] = React.useState("");
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError("Preencha um valor!");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um cep válido!");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur(event) {
    validateCep(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((json) => setDados(json));
      console.log(dados);
    } else {
      console.log("Não enviar");
    }
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }
  console.log(cep);
  return (
    <>
      <S.Container>
        <S.Section>
          <form onSubmit={handleSubmit}>
            <Input
              label="CEP:"
              id="cep"
              type="text"
              value={cep}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="00000-000"
            />
            <br />
            <br />
            <Button>Enviar</Button>
            {error ? <p>{error}</p> : <p></p>}
            {dados.erro ? <p>Não existe esse CEP!</p> : ""}
            {formFields.map(({ id, label, type }) => (
              <>
                <div key={id}>
                  {/* <label htmlFor={id}>{label}</label> */}
                  <input
                    type={type}
                    id={id}
                    value={dados[id]}
                    placeholder={label}
                  />
                </div>
              </>
            ))}
          </form>
        </S.Section>
      </S.Container>
    </>
  );
};
export default App;
