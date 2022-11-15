import React from 'react'


const ProjectList = () => {
  return (
    <>
      <div className="container-p mb-5">
        <h1 className='page-h'>My Projects</h1>
      <div class="row row-cols-1 row-cols-lg-2 row-cols-md-1 g-4">
        <div class="col">
          <div class="card">
            <img src="hp_pdd.jpg" class="card-img-top" alt="Peeking Doggies Daycare" />
            <div class="card-body">
              <h5 class="card-title p-title">Peeking Doggies DayCare</h5>
              <p class="card-text">The Peeking Dogs DayCare is an app designed to allow you to enter your dogs information(name, breed and age.). Track feeding time including breakfast, lunch and dinner.</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button type="button" class="btn proj-btn-l btn-lg justify-content-md-end me-lg-5 me-sm-0"><a class="p-link" href="https://github.com/JJK70/doggies-daycare">GitHub</a></button>
              <button type="button" class="btn proj-btn-r btn-lg"><a class="p-link-2" href="https://doggies-daycare.herokuapp.com/">Website</a></button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="foodrunner.jpeg" class="card-img-top" alt="Food Runners" height="300px" />
            <div class="card-body">
              <h5 class="card-title p-title">Pizza Pirates by Food Runners</h5>
              <p class="card-text">A food ordering solution for your Food Truck/Cart business brought to you by Food Runners. If you have a small kitchen crew and long customer lines, this is the app for you!</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button type="button" class="btn proj-btn-l btn-lg justify-content-md-end me-lg-5 me-sm-0"><a class="p-link" href="https://github.com/LedioDylgjeri/Food-Runner-Front">GitHub</a></button>
              <button type="button" class="btn proj-btn-r btn-lg"><a class="p-link-2" href="https://food-runners.netlify.app/">Website</a></button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="bbh-hp.jpeg" class="card-img-top" alt="Boston Beer Hall" />
            <div class="card-body">
              <h5 class="card-title p-title">Boston Beer Hall</h5>
              <p class="card-text">The Boston Beer Hall is where you can add your favorite beers and also add yourself a sweet, salty or sweet/salty snack!</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button type="button" class="btn proj-btn-l btn-lg justify-content-md-end me-lg-5 me-sm-0"><a class="p-link" href="https://github.com/JJK70/boston-beer-hall">GitHub</a></button>
              <button type="button" class="btn proj-btn-r btn-lg"><a class="p-link-2" href="https://boston-beer-hall.fly.dev/">Website</a></button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="connect_four_hp.jpg" class="card-img-top" alt="Tyrion's Connect Four" height="337px" />
            <div class="card-body">
              <h5 class="card-title p-title">Tyrion's Connect Four</h5>
              <p class="card-text">Tyrion's Connect Four is a Connect Four game based on the books and series Game of Thrones!</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button type="button" class="btn proj-btn-l btn-lg justify-content-md-end me-lg-5 me-sm-0"><a class="p-link" href="https://github.com/JJK70/tyrions-connect-four-game">GitHub</a></button>
              <button type="button" class="btn proj-btn-r btn-lg"><a class="p-link-2" href="https://tyrions-lets-connect-game.netlify.app/">Website</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>

  )
}


export default ProjectList;