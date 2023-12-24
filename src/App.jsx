import React from 'react';
import style from 'styled-components';

const Container = style.div`
display:flex;
flex-direction: column;
background-color: black;
width: 15em;
border-radius: 10%;
`;
const Img = style.img`
width: auto;
margin: 2%;
border-radius: 10% 10% 0 0;
`;

const Title = style.h1`
color: green;
text-align: center;
font-size: 1em;
`;
const Etoile = style.div`
display:flex;
color: grey;
`
const Ul = style.ul`
display:flex;
margin-right: 3%;
font-size: 1em;
list-style-type: none;
`


function App() {
  return (
    <>
      <Container>
        <Img src="https://th.bing.com/th/id/OIG.IEgTiSWPEalKcOw6MFoG?w=1024&h=1024&rs=1&pid=ImgDetMain"></Img>
        <Title>Evasion</Title>
        <Etoile>
          <Ul>
            <li>&#x2B50;</li>
            <li>&#x2B50;</li>
            <li>&#x2B50;</li>
            <li>&#x2B50;</li>
            <li>&#x2B50;</li>
          </Ul>
          <p>4,5 (413)</p>
        </Etoile>
      </Container >
    </>
  )
}

export default App
