import React from "react";
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Main } from './pages';
import Posts from "./pages/Posts";

function App() {
  const [search, setSearch] = React.useState('');
  const items = useSelector(({ users }) => users.items);
  console.log(items)

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  // if (searchAuthor.length > 0 && filterMinDate.length === 0 && filterMaxDate.length === 0) {
  //   return el.author && el.author.toLowerCase().toLowerCase().includes(searchAuthor.toLowerCase())
  // }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main search={search} handleChange={handleChange} />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
