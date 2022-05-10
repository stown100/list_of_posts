import React from "react";
import axios from "axios";
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Main } from './pages';
import Posts from './pages/Posts';

function App() {
  const [items, setItems] = React.useState([]);

  // Беру данные с сервера
  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1/comments').then(({ data }) => {
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

  const searchText = items.filter(el => el.body && el.body.toLowerCase().includes(search.toLowerCase()))

  const sortItems = [
    'От самого короткого',
    'От самого длинного'
  ]

  // Сортировка по самому длинному заголовку
  const onSelectSortName = (index) => {
    if (index === 1) {
      setItems(searchUser.sort((a, b) => b['name'].length - a['name'].length))
    } else {
      setItems(searchUser.sort((a, b) => a['name'].length - b['name'].length))
    }
  }

  // сортировка по самому длинному посту
  const onSelectSortBody = (index) => {
    if (index === 1) {
      setItems(searchText.sort((a, b) => b['body'].length - a['body'].length))
    } else {
      setItems(searchText.sort((a, b) => a['body'].length - b['body'].length))
    }
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <Main search={search} onSelectSortName={onSelectSortName}
            sortItems={sortItems} searchUser={searchUser} handleChange={handleChange} items={items} setItems={setItems} />} />
        <Route path="/posts" element={
          <Posts items={items} search={search} setItems={setItems} sortItems={sortItems} handleChange={handleChange}
            searchText={searchText} onSelectSortBody={onSelectSortBody} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
