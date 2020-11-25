import React, { useEffect , useState} from 'react';
import './App.css';
import Tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list  = await Tmdb.getHomeList();
      setMovieList(list);
    
      //pegando o filme em destaque
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
      
    }
    loadAll();
  }, []);

  useEffect(() => {
    //monitora o scroll
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])


  return (
    <div className="page">

      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists"> 
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items = {item.items}/>
        ))}
      </section>
      <footer >
          Feito com <span role="img" aria-label="coração">❤️</span> por Renata Marques <br/>
          Direitos da imagens para NetFlix <br/>
          Dados pegos do site Themoviedb.org
      </footer>
    </div>
  );
}



//Header
//Destaques
//A lista
//Rodapé