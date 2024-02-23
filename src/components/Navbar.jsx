import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import NewsContext from '../context/NewsContext';
import { fetchNews } from '../context/NewsActions';

const Navbar = () => {

  const { dispatch} = useContext(NewsContext)

  const [search, setSearch] = useState("");

  const getNews = async (topic) => {
    const data = await fetchNews(topic)
    dispatch({
      type: 'GET_NEWS',
      payload: data,
    })
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    getNews(search);
    setSearch("");
  };


  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-warning" to="/">JAB-TAK</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#" onClick={()=> getNews("Indian News")}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#" onClick={()=> getNews("Indian Entertainment News")}>Entertainment</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#" onClick={()=> getNews("Indian Sports")}>Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#" onClick={()=> getNews("Indian Politics News")}>Politics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#" onClick={()=> getNews("Indian Business News")}>Business</a>
            </li>
          </ul>

        </div>
        <form className="d-flex" role="search" onSubmit={handleSearch}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
          <button className="btn btn-outline-secondary text-light" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar
