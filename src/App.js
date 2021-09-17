import React from 'react';
import Navegacion from './Navegacion/Navegacion';
import Carruzel from './Carruzel/Carruzel';
import Cards from './Cards/Cards';
import Serching from './Serching/Serching';

export default function App() {
  return (
    <>
      <Navegacion />
      <Carruzel />
      <br />
      {' '}
      <br />
      <Cards />
      <br />
      {' '}
      <br />
      <Serching />
    </>
  );
}
