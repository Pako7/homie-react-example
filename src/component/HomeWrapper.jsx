import React, { useState, useEffect } from "react";
import { GeneralContainer } from "../style/style";

function HomeWrapper({ id, name, amount, changeHomeAmountValue }) {
  const [amountHome, setAmountHome] = useState("");
  const [nameHome, setNameHome] = useState("");

  const changeHomeAmount = value => {
    setAmountHome(value);
    changeHomeAmountValue(id, value);
  };

  useEffect(() => {
    setAmountHome(amount);
    setNameHome(name);
  }, []);

  return (
    <GeneralContainer color="#23a344">
      <strong>{`Nombre del depa: ${nameHome}`}</strong>
      <div>
        <strong>Precio:</strong>
        <input
          type="number"
          value={amountHome}
          onChange={event => changeHomeAmount(event.target.value)}
        />
      </div>
    </GeneralContainer>
  );
}

export default HomeWrapper;
