import defaultImage from "../assets/image-not-found.png";

const NewCard = ({news}) => {
  return (
    
       <div className="card mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img src={news.urlToImage ? news.urlToImage : defaultImage} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text"> {news.description}</p>
          <p className="card-text"><small className="text-body-secondary">{news.author}</small></p>
          <a href={news.url} target='blank' className="btn btn-primary">Read Full News</a>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default NewCard
