import './App.css';
import Header from './components/Header';
import axios from 'axios';
import ListaLikova from './components/ListaLikova';
import React,{useEffect, useState} from 'react';
import Search from './components/Search';


const key = "a1ed386a82b3e7e4b792a4b148cbdae1"

function App() {
  const[items,setItems] = useState([]);
  const[isLoading,setLoading] = useState(true);
  const[query, setQuery] = useState('');


useEffect(()=>{
  const fetch = async()=>{
    if(query===''){
      if (
        localStorage.getItem("favorites") === "[]" ||
        !localStorage.getItem("favorites")
      ) {
        localStorage.setItem("favorites", "[]");
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=9478d6ce4d5c4ffdf2d424c19298b161&hash=${key}`)
      console.log(result.data.data.results)
      setItems(result.data.data.results)
      setLoading(false)
    } else {
      let favorite = JSON.parse(localStorage.getItem("favorites"));
      setItems(favorite);
      setLoading(false);
    } 
  }else {
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=9478d6ce4d5c4ffdf2d424c19298b161&hash=${key}`)
      console.log(result.data.data.results)
      setItems(result.data.data.results)
      setLoading(false)
    }
  }
  fetch()
},[query]);

  return (
    <div className="container">
      <Header/>
      <Search search={(q)=>setQuery(q)}></Search>
      <ListaLikova items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
