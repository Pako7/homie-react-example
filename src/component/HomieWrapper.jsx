import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import HomeWrapper from "./HomeWrapper";
import RentWrapper from "./RentWrapper";

const Wrapper = Styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    border-color: #FF0364;
    border-style: solid;
    width: 1100px;
`;

const Container = Styled.div`
    border-style: solid;
    padding: 10px 10px 10px 10px;
    width: 4500px;
    margin: 10px;
    border-color: #FF0364;
    border-radius: 10px;
`;

let HomeList = [
  { id: 1, name: "Hermosa casa de Yucatán", amount: 12000 },
  { id: 2, name: "Lujosa casa en Polanco", amount: 1000 },
  { id: 3, name: "La mejor casa de Campeche", amount: 2000 }
];

let RentList = [
  { id: 1, homeId: 3 },
  { id: 2, homeId: 1 },
  { id: 3, homeId: 2 }
];

function HomieWrapper() {
  const [homeList, setHomeList] = useState([]);
  const [rentList, setRentList] = useState([]);

  const getHomeById = id => {
    return homeList.find(x => x.id === id);
  };

  useEffect(() => {
    setHomeList(HomeList);
    setRentList(RentList);
  }, [homeList, rentList]);

  const changeHomeAmountValue = (id, amount) => {
    homeList.forEach(element => {
      if (element.id === id) element.amount = amount;
    });
    setHomeList([...homeList]);
    setRentList([...rentList]);
  };

  return (
    <Wrapper>
      <Container>
        Lista de Homes
        <hr />
        {homeList.map((element, index) => (
          <HomeWrapper key={index} {...element} changeHomeAmountValue={changeHomeAmountValue} />
        ))}
      </Container>
      <Container>
        Lista de Rentas
        <hr />
        {rentList.map((element, index) => (
          <RentWrapper key={index} {...getHomeById(element.homeId)} />
        ))}
      </Container>
    </Wrapper>
  );
}

export default HomieWrapper;
