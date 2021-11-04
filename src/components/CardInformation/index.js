import './styles.scss'

function CardInformation ({ hero }) {
  return (
    <div className='card-information'>
      <img
        loading='lazy'
        alt={`hero ${hero.name}`}
        src={hero.image.url}
      />
      <div className='information'>
        <h1>Nome do Herói: {hero.name}</h1>
        <p>Poder: {hero.powerstats.power}</p>
        <p>Nome: {hero.biography['full-name']}</p>
        <p>Publicação: {hero.biography.publisher}</p>
        <p>Primeira aparicação: {hero.biography['first-appearance']}</p>
        <p>Cor dos olhos: {hero.appearance['eye-color']}</p>
        <p>Raça: {hero.appearance.race}</p>
        <p>Genêro: {hero.appearance.gender}</p>
        <p>Base de trabalho: {hero.work.base}</p>
        <p>Conexões(Família): {hero.connections['group-affiliation']}</p>
      </div>
    </div>
  )
}

export default CardInformation
