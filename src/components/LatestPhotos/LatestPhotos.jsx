import PhotoCard from "../PhotoCard/PhotoCard"
import { cardsInfo } from "../../info.js"

function LatestPhotos() {
  return (
    <div class="container-fluid tm-container-content tm-mt-60">
      <div class="row mb-4">
        <h2 class="col-6 tm-text-primary">
          Latest Photos
        </h2>
        <div class="col-6 d-flex justify-content-end align-items-center">
          <form action="" class="tm-text-primary">
            Page <input type="text" value="1" size="1" class="tm-input-paging tm-text-primary" /> of 200
          </form>
        </div>
      </div>
      <div class="row tm-mb-90 tm-gallery">
        {cardsInfo.map((card) => {
          return <PhotoCard name={card.name} date={card.date} img={card.img} />
        })}
      </div>
      <div class="row tm-mb-90">
        <div class="col-12 d-flex justify-content-between align-items-center tm-paging-col">
          <a href="/" class="btn btn-primary tm-btn-prev mb-2 disabled">Previous</a>
          <div class="tm-paging d-flex">
            <a href="/" class="active tm-paging-link">1</a>
            <a href="/" class="tm-paging-link">2</a>
            <a href="/" class="tm-paging-link">3</a>
            <a href="/" class="tm-paging-link">4</a>
          </div>
          <a href="/" class="btn btn-primary tm-btn-next">Next Page</a>
        </div>
      </div>
    </div>
  )
}

export default LatestPhotos