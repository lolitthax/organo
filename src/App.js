import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {
  const times = [
    {
      nome: 'Anemo',
      corPrimaria: '#5bdeb4',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Cryo',
      corPrimaria: '#52d0e5',
      corSecundaria: '#b0edeb'
    },
    {
      nome: 'Dendro',
      corPrimaria: '#8cd44b',
      corSecundaria: '#abdca3'
    },
    {
      nome: 'Electro',
      corPrimaria: '#bf81e6',
      corSecundaria: '#e0cee3'
    },
    {
      nome: 'Geo',
      corPrimaria: '#f9b731',
      corSecundaria: '#ffe87d'
    },
    {
      nome: 'Hydro',
      corPrimaria: '#33cbfe',
      corSecundaria: '#b3d6ee'
    },
    {
      nome: 'Pyro',
      corPrimaria: '#cb4c0e',
      corSecundaria: '#f98a74'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
         />)}

        <Rodape></Rodape>
    </div>
  );
}

export default App;
