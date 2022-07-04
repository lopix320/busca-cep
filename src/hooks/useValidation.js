import React from "react";

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: "Cep inválido",
  },
};

const useValidation = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useValidation;
