function Home() {
  return (
      
      <>
      <div className="container mb-5">
      <h1 className="text-center mt-5 mb-3">John J. Kent Portfolio</h1>
      <h2 className="text-center mt-2 mb-5">Hello and welcome to my portfolio. Click on the images below to see my projects.</h2>
      <div className="hp-img text-justify-center mb-5">
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="/projects"><img src="hp-pdd.png" className="d-block w-100" alt="Peeking Doggies DayCare" /></a>
          </div>
          <div className="carousel-item">
          <a href="/projects"><img src="hp-frp.png" className="d-block w-100" alt="..." /></a>
          </div>
          <div className="carousel-item">
          <a href="/projects"><img src="hp-bbh.png" className="d-block w-100" alt="..." /></a>
          </div>
          <div className="carousel-item">
          <a href="/projects"><img src="hp-tcf.png" className="d-block w-100" alt="..." /></a>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <div className="clearfix text-center">&nbsp;</div>
      </div>
      
      <div className="mt-5">
        <h5 className="copy text-center mt-5 mb-5">Copyright 2022<sup>©</sup></h5>
       </div>
    </>
  )
}

export default Home