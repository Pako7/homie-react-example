import React from "react";
import { GeneralContainer } from "../style/style";

function HomeWrapper({ name, amount }) {
  return (
    <GeneralContainer color="#a9a9ec">
      <strong>{`Nombre de la renta: ${name}`}</strong>
      <div>
        <strong>{`Precio de la renta: ${amount}`}</strong>
      </div>
    </GeneralContainer>
  );
}

export default HomeWrapper;
