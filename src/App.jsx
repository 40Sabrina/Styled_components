import React from 'react';
import style from 'styled-components';


const Container = style.div`
display:flex;
flex-direction: column;
background-color: black;
width: 30em;
border-radius: 5%;
color: white;
box-shadow: 0 0 25px red;
`;
const Img = style.img`
width: auto;
margin: 2%;
border-radius: 5% 5% 0 0;
`;
const Section_1 = style.section`
margin: 0 5% 0 5%;
`

const Title = style.h1`
color: #0D7EAE;
font-size: 2.3em;
margin: 0;
`;
const Etoile = style.div`
display:flex;
color: grey;
`
const Ul = style.ul`
display:flex;
margin-right: 5%;
padding: 0;
font-size: 1em;
list-style-type: none;
`
const Section_2 = style.h2`
margin: 0 5% 0 5%;
color: orange;
font-size: 1.2em;

`


function App() {
  return (
    <>
      <Container>
        <Img src="https://th.bing.com/th/id/OIG.IEgTiSWPEalKcOw6MFoG?w=1024&h=1024&rs=1&pid=ImgDetMain"></Img>
        <Section_1>
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
          <h3>Secondary text</h3>
          <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
        </Section_1>
        <Section_2>
          <h2>Subtitle</h2>
        </Section_2>
      </Container >
    </>
  )
}

export default App
