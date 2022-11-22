function About() {
  return (
    <>
      <div className="about">
      <h1 className="my-4">About Me</h1>
        <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="jjk.jpeg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title a-title">About Me</h5>
              <p className="card-text">I'm a Software Engineer and Financial Services professional with experience in all facets of website/content
              management and strategy. I have worked on multiple website redesigns and other large projects in an Agile
              environment, preparing me for the next step in my career. I bring a collaborative mindset to all of the projects I
              work on and believe that teamwork makes for better end results.
              </p>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
              <button type="button" className="btn proj-btn-l btn-lg justify-content-md-end me-lg-5 me-sm-0 ms-lg-5 ml-sm-0"><a className="p-link" href="https://github.com/JJK70">GitHub</a></button>
              <button type="button" className="btn proj-btn-r btn-lg me-lg-5 me-sm-0"><a className="p-link-2" href="mailto:jjk701@gmail.com?subject=Let's Chat">Contact</a></button>
              <button type="button" className="btn proj-btn-l btn-lg justify-content-md-end me-lg-5 me-sm-0"><a className="p-link" href="JohnJKent_Resume.pdf">Resume</a></button>
              </div>
          </div>
        </div>
      </div>
      {/* <div class="row row-cols-2 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <div class="card-body languages">
        <h5 class="card-title a-title">Languages</h5>
        <ul>
            <li>HTML<img className="l-icon" src="bootstrap.svg" alt="Bootstrap"/></li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            <li>GitHub</li>
            <li>Postman</li>
        </ul>
      </div>
    </div>
  </div> */}
  {/* <div class="col">
    <div class="card">
      <div class="card-body languages">
        <h5 class="card-title a-title">Languages</h5>
        <ul>
            <li>ReactJS</li>
            <li>Django</li>
            <li>MongoDB</li>
            <li>Python</li>
            <li>Express</li>
            <li>Docker</li>
        </ul>
      </div>
    </div>
  </div> */}
  {/* </div> */}
  <h4 class="card-title l-title mt-4 mb-4">Languages</h4>
  <div class="card-body languages">
        
  <div class="container text-center">
  <div class="row align-items-start mb-5">
    <div class="col">
    <img class ="l-icon"src="html5.svg" alt="HTML Icon" />
    </div>
    <div class="col">
      <img class ="l-icon" src="css3.svg" alt="CSS Icon" />
    </div>
    <div class="col">
     <img class ="l-icon" src="bootstrap.svg" alt="Bootstrap Icon" />
    </div>
    <div class="col">
      <img class ="l-icon" src="java-script.svg" alt="Javascript Icon" />
    </div>
    <div class="col">
      <img class ="l-icon" src="github.svg" alt="GitHub Icon" />
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
      <img class ="l-icon" src="react.svg" alt="React Icon" />
    </div>
    <div class="col">
      <img class ="l-icon" src="django.svg" alt="Django Icon" />
    </div>
    <div class="col">
      <img class ="l-icon" src="mongodb.svg" alt="MongoDB Icon" />
    </div>
    <div class="col">
     <img class ="l-icon" src="python.svg" alt="Python Icon" />
    </div>
    <div class="col">
      <img class ="l-icon" src="docker.svg" alt="Docker Icon" />
    </div>
  </div>
</div>
  </div>
</div>  
    </>
  )
}

export default About