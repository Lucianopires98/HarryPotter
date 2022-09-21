import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   } 
  `;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

export const ContainerBg = styled.div`
  background-image: url(${(props) => props.background});
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 5rem;
`;

export const ContainerCard = styled.div`
  margin: 1rem;
  text-align: center;
  transition: 1.5s;
  background-color: #fff;

  &:hover {
    transform: scale(0.8);
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 300px;
`;
