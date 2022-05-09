import React from "react";
import axios from "axios";
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Main } from './pages';
import Posts from "./pages/Posts";

function App() {
  const [items, setItems] = React.useState([])

  // Беру данные с сервера
  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1/comments').then(({ data }) => {
      console.log(data)
      setItems(data)
    })
  }, [])
  const [search, setSearch] = React.useState('');

  // поиск
  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  // Поиск по заголовку 
  const searchUser = items.filter(el => {
    return el.name && el.name.toLowerCase().toLowerCase().includes(search.toLowerCase())
  })

  const sortItems = [
    'От самого короткого заголовка',
    'От самого длинного'
  ]

  // Нахожу уникальнорго пользователя
  const unicUser = []
  for (let i = 0; i < items.length; i++) {
    unicUser[items[i]['userId']] = items[i];
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main search={search}
          sortItems={sortItems} searchUser={searchUser} handleChange={handleChange} items={items} setItems={setItems} />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
