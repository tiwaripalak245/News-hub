import React, { useContext, useEffect, useState } from 'react'
import NewCard from '../components/NewCard'
import NewsContext from '../context/NewsContext'
import { fetchNews } from '../context/NewsActions';
import WeatherComponent from '../components/WeatherComponent';

const Home = () => {

  const { allNews, dispatch } = useContext(NewsContext);

  const [name, setName] = useState("");

  const getNews = async () => {
    const data = await fetchNews("Indore")
    dispatch({
      type: 'GET_NEWS',
      payload: data,
    })
  }


  useEffect(() => {
    getNews()
  }, []);


  if (!allNews) {
    return(
      <h1 className="display-5 text-center">Loading...</h1>
    )
  }


  return (
    <>
      <h1 className="display-5 text-center my-3" value={name} onChange={() => setName(e.target.value)}>Top News Today
      </h1>
      <div className='row'>
        <WeatherComponent/>
    <div className="col-md-8 col-sm-12">
    {
          allNews.map((news, index) => <NewCard key={index} news={news} />)
        }
    </div>

      </div>
    </>
  )
}

export default Home
