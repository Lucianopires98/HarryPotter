import React, { useState, useEffect } from "react";
import * as S from "./styles";
import hpbackground from "../../img/hp.jpg";
import api from "../../services/api";

export default function App() {
  const [list, setList] = useState([]);

  const getData = async () => {
    const response = await api.get();
    setList(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.ContainerBg background={hpbackground}>
      <S.GlobalStyle />
      <S.Title>Harry Potter</S.Title>
      <S.Container>
        {list.slice(0, 25).map((item) => (
          <S.ContainerCard>
            <p>{item.name}</p>
            <S.Image src={item.image} alt={item.name} />
          </S.ContainerCard>
        ))}
      </S.Container>
    </S.ContainerBg>
  );
}
