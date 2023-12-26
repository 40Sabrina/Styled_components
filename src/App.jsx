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
const Ul_1 = style.ul`
display:flex;
margin-right: 5%;
padding: 0;
font-size: 1em;
list-style-type: none;
`

const Section_2 = style.div`
margin: 0 5% 0 5%;
border-top: 1px solid white;
`
const Articles = style.article`
display: flex;
justify-content: space-around;
`
const A = style.a`
color: white;
text-decoration: none;
background-color: #F1A53A;
border-radius: 50px;
padding: 10px;
`
const P = style.p`
color: grey;
text-align: center;
padding-top: 5%;
margin: 0;
`

function App() {
  return (
    <>
      <Container>
        <Img src="https://th.bing.com/th/id/OIG.IEgTiSWPEalKcOw6MFoG?w=1024&h=1024&rs=1&pid=ImgDetMain"></Img>
        <Section_1>
          <Title>Lorem Ipsum</Title>
          <Etoile>
            <Ul_1>
              <li>&#x2B50;</li>
              <li>&#x2B50;</li>
              <li>&#x2B50;</li>
              <li>&#x2B50;</li>
              <li>&#x2B50;</li>
            </Ul_1>
            <p>4,5 (413)</p>
          </Etoile>
          <h3>What is Lorem Ipsum?</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Section_1>
        <Section_2>
          <h3>Why do we use it?</h3>
          <Articles>
            <A href="">Article 1</A>
            <A href="">Article 2</A>
            <A href="">Article 3</A>
            <A href="">Article 4</A>
          </Articles>
          <P>@Sabrina40</P>
        </Section_2>
      </Container >
    </>
  )
}

export default App
