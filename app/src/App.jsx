import './App.css'
import Cards from './components/Cards';
import personagens from './data/temporaryCards';

function App() {

  return (
    <div className='App'>
      {
        personagens.map((personagem) => (
          <Cards
            imagem={personagem.imagem}
            nome={personagem.nome}
            descricao={personagem.descricao}
            anime={personagem.anime}
            forca={personagem.forca}
            agilidade={personagem.agilidade}
            inteligencia={personagem.inteligencia}
            defesa={personagem.defesa}
            corFundo={personagem.corFundo}
          />
        )) 
      }
    </div>
  )
}

export default App
