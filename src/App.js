import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchHeroes } from './@redux/slice/someHeroesSlice';
import { addHero, changeVisible } from './@redux/slice/heroSlice';
import ClipLoader from "react-spinners/ClipLoader";
import CardHeroes from './components/CardHero/card';
import Modal from './components/Modal/modal';
import CardInformation from './components/CardInformation/CardInformation';

function App() {
  const { status, heroes: { results } } = useSelector((state) => state?.sameHeroes);
  const { visible, hero } = useSelector(state => state.hero);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if ( status === 'idle') {
      dispatch(fetchHeroes());
    }
  },[dispatch, status]);

  const renderCard = () => {
    return (
      results?.map((hero, index) => (
        <CardHeroes
          key={index}
          name={hero.name}
          imageURl={hero.image.url}
          onClick={() => dispatch(addHero(hero))}
        />
      ))
    )
  };

  return (
    <div className='App'>
      <Modal
        visible={visible}
        onClose={() => dispatch(changeVisible())}
      >
        <CardInformation
          hero={hero}
        />
      </Modal>
      {status === 'loading'
      ? <ClipLoader size={200}/> 
      :(
        <div className='render-card'>
          {renderCard()}
        </div>)
      }
    </div>
  )
}

export default App
