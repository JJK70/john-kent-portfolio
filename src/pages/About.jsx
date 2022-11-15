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
      <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <div class="card-body languages">
        <h5 class="card-title a-title">Languages</h5>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            <li>GitHub</li>
            <li>Postman</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col">
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
  </div>
  </div>
  </div>
    </>
  )
}

export default About