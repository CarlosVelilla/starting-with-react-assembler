import * as photos from "../../assets/img/gallery"

function PhotoCard({ name, date, img }) {
  const getViews = () => {
    const randomViewsNumber = Math.floor(Math.random() * 1000)
    return randomViewsNumber
  }

  const imgFile = photos[`photo${img}`]

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
      <figure className="effect-ming tm-video-item">
        <img src={imgFile} alt={`Product ${name}`} className="img-fluid" />
        <h2>{name}</h2>
        <figcaption className="d-flex align-items-center justify-content-center">
          <h2>{name}</h2>
          <a href="photo-detail.html">View more</a>
        </figcaption>
      </figure>
      <div className="d-flex justify-content-between tm-text-gray">
        <span className="tm-text-gray-light">{date}</span>
        <span>{getViews()} views</span>
      </div>
    </div>
  )
}

export default PhotoCard