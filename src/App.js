import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchHeroes } from './@redux/slice/someHeroesSlice';
import { addHero, changeVisible } from './@redux/slice/heroSlice';
import ClipLoader from "react-spinners/ClipLoader";
import CardHeroes from './components/CardHero/card';
import Modal from './components/Modal/modal';
import CardInformation from './components/CardInformation/CardInformation';
import SearchInput from './components/SearchInput/SearchInput';

function App() {
  const { status, heroes: { results } } = useSelector((state) => state?.sameHeroes);
  const { visible, hero } = useSelector(state => state.hero);
  const [textSearch, setTextSearch ] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchHeroes());
    }
  }, [dispatch, status]);

  const lowecaseSearch = textSearch?.toLowerCase()

  const filterHeros = results?.filter(hero => 
    hero?.name.toLowerCase().includes(lowecaseSearch)
    );

  const renderCard = () => {
    return (
      filterHeros?.map(hero => (
        <CardHeroes
          key={hero.id}
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
        ? <ClipLoader size={200} />
        : (
          <div className='container'>
            <SearchInput 
              value={textSearch}
              onChange={search => setTextSearch(search)}
              label='Pesquise seu herói...'
              handleSearch={() => console.log('pesquisou')}
            />
            <div className='render-card'>
              {renderCard()}
            </div>
          </div>
        )
      }
    </div>
  )
}

export default App
