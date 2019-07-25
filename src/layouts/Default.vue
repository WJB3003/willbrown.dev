<template>
  <div class="layout">
    <div class="half-face-background">
      <header class="header">
        <div id="home-icon"><a href="#"><img src="https://i.imgur.com/7g27Ft5.png" height="37px" width="37px"></a></div>
        <nav class="nav">
          <div class="nav-item"><a href="#about">About</a></div>
          <div class="nav-item"><a href="#work">Work</a></div>
          <div class="nav-item"><a href="#contact">Contact</a></div>
        </nav>
      </header>
      
      <div class="panel home">
        <h1 id="title">WILLIAM BROWN</h1>
        <div id="divider"></div>
        <h2 id="occupation">Software Developer.</h2>
      </div>

      <div class="panel" id="about">
        <h1 class="about-title">ABOUT ME</h1>
        <div class="hl-about"></div>
        <div class="about-container">
          <p class="about-summary">Software Developer who is<br>passionate about the<br>unknowns of technology and<br>determined to continuously learn.<br>Critical thinker and problem solver<br>seeking to find the best and most<br>efficient solution for every problem.</p>
          <div class="skill-wheel">
            <div class="skill one">Java</div>
            <div class="skill two">Javascript</div>
            <div class="skill three">Vue</div>
            <div class="skill four">React</div>
            <div class="skill three">Angular</div>
            <div class="skill two">HTML</div>
            <div class="skill one">CSS</div>
          </div>
        </div>
      </div>
    </div>

    <div class="panel" id="work">
      <div id="work-title">WORK</div>
      <div class="hl-work"></div>

      <div class="cards">
        <div class="card">
          <div class="card-top">
            <div class="project-icon"><b></></b></div>
            <div class="link">
              <div class="project-link"><a href="https://www.builtwithvue.com/" target="blank"><img src="https://i.imgur.com/65dfFeA.png" height="20px" width="20px"></a></div>
            </div>
          </div>
          <div class="card-bottom">
            <div class="project-desc">
              <div class="project-title">Built With Vue</div>
              <div class="project-summary">Website that's let users showcase their work built in Vue.</div>
            </div>
            <ul class="project-tech">
              <li class="project-skill">Vue</li>
              <li class="project-skill">Google Sheets</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-top">
            <div class="project-icon"><b></></b></div>
            <div class="link">
              <div class="project-github"><a href="https://github.com/WJB3003/space-x" target="blank"><img src="https://i.imgur.com/5Br69Fw.png" height="20px" width="20px"></a></div>
            </div>
          </div>
          <div class="card-bottom">
            <div class="project-desc">
              <div class="project-title">Space X Interface</div>
              <div class="project-summary">Using the Space X RESTful API, I create a website that visualizes the data. WIP.</div>
            </div>
            <ul class="project-tech">
              <li class="project-skill">Vue</li>
            </ul>
          </div>
        </div>

        <div class="card last-card">
          <div class="card-top">
            <div class="project-icon"><b></></b></div>
            <div class="link">
              <div class="project-github"><a href="https://github.com/WJB3003/Remoteplay-Web" target="blank"><img src="https://i.imgur.com/5Br69Fw.png" height="20px" width="20px"></a></div>
            </div>
          </div>
          <div class="card-bottom">
            <div class="project-desc">
              <div class="project-title">Remote Play</div>
              <div class="project-summary">Web application that combines game logic of Card Against Humanity and the style of JackBox Games into a fun party game. WIP.</div>
            </div>
            <ul class="project-tech">
              <li class="project-skill">Vue</li>
              <li class="project-skill">Java</li>
              <li class="project-skill">Spring Boot</li>
              <li class="project-skill">REST</li>
            </ul>
          </div>
        </div>

      </div>
    </div>

    <div class="panel" id="contact">
      <p class="contact-desc">currently looking for<br>job opportunies and<br>to grow my network.</p>
      <div class="vl"></div>
      <div class="contact-item-container">
        <div class="contact-item email">
          <a href="#contact"><img class="icons" src='https://i.imgur.com/MKQvbcG.png' height="35px" width="35px"></a>
          <div class="contact-item-text">me@willbrown.dev</div>
        </div>
        <div class="contact-item github">
          <a href="https://github.com/WJB3003" target="blank"><img class="icons" src='https://i.imgur.com/lZ4FvYt.png' height="35px" width="35px"></a>
          <div class="contact-item-text">/WJB3003</div>
        </div>
        <div class="contact-item linkedin">
          <a href="https://www.linkedin.com/in/williamjamesbrown/" target="blank"><img class="icons" src='https://i.imgur.com/LFCErGR.png' height="35px" width="35px"></a>
          <div class="contact-item-text">/williamjamesbrown</div>
        </div>
      </div>
    </div>

  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout{
  font-family: cambria;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12.5px 0px;
  background-color: #35495E;
  opacity: .9;
}

#home-icon{
  padding-left: 12.5px;
  max-height: 37px;
}

.nav{
  display: flex;
  font-size: 25px;
}

.nav-item{
  margin-right: 25px;
  color: white;
}

.panel{
  min-height: 100vh;
}

.home{
  min-height: calc(100vh - 62px);
  color: #35495E;
  padding-left: 3%;
}

#about{
  background-color: #35495E;
  color: white;
  opacity: .9;
}

.hl-about{
  margin-left: 5%;
  height: 2px;
  width: 70%;
  background-color: white;
}

.about-title{
  font-size: 75px;
  padding-top: 20px;
  margin-left: 5%;
  min-height: 17vh;
}

.about-summary{
  font-size: 35px;
  min-width: 60%;
  min-height: 80%;
  margin-top: 7%;
  text-align: center;
}

.skill-wheel{
  min-width: 40%;
  margin-top: 7%;
}

.skill:hover{
  transform: scale(1.1);
}

.about-container{
  display: flex;
  min-height: 73vh;
}

#work{
  min-height: 100vh;
  background-color: #0A192F;
  color: white;
}

.hl-work{
  margin-left: 15%;
  height: 2px;
  width: 70%;
  background-color: #35495E;
}

#contact{
  background-color: black;
  color: white;
  display: flex;
  min-height: 100vh;
}

.contact-desc{
  font-size: 55px;
  min-width: 75%;
  text-align: center;
  padding-top: 32vh;
}

.contact-item-container{
  display: inline-block;
  margin-left: 5%;
  padding-top: 40vh;
}

.contact-item{
  font-size: 20px;
  min-height: 35px;
  display: flex;
  margin-bottom: 10px;
}

.contact-item-text{
  padding: 2px;
}

.vl{
  margin-top: 7vh;
  height: 86vh;
  width: 2px;
  background-color: white;
}

h2{
  margin: 0;
}

h1{
  margin: 0%;
}

p{
  margin: 0%;
}

.half-face-background{
  background-image: url(https://i.imgur.com/PZaRMLD.jpg);
  height: 200vh;
  width: 100vw;
  background-size: cover;
  background-position-x: right;
}

#title{
  font-size: 85px;
  padding-top: 30vh;
}

#occupation{
  font-size: 80px;
}

#work-title{
  font-size: 75px;
  text-align: center;
  padding-top: 30px;
}

#divider{
  background-color: #42B883;
  height: 10px;
  width: 72%;
}

.icons{
  padding-right: 15px;
}

.card{
  min-width: 220px;
  min-height: 350px;
  max-width: 220px;
  max-height: 350px;
  background-color: #42B883;
  border-radius: 10px;
  padding: 30px;
  margin-right: 25px;
  margin-top: 80px;
  margin-bottom: 80px;
}

.card:hover{
  position: relative;
  top: -5px;
}

.last-card{
  margin-right: 0px;
}

.cards{
  display: flex;
  justify-content: center;
}

.project-skill{
  list-style-type: none;
  padding-right: 10px;
}

.project-title{
  font-size: 25px;
  margin-bottom: 5px;
}

.project-tech{
  display: flex;
  margin: 0;
  padding: 0;
}

.card-top{
  display: flex;
  justify-content: space-between;
}

.card-bottom{
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.link{
  display: flex;
  padding-top: 5px;
}

.project-link{
  padding-left: 10px;
}

.project-icon{
  font-weight: bolder;
  font-size: 20px;
}

.skill{
  background-color: white;
  color: black;
  font-size: 25px;
  width: 175px;
  text-align: center;
  border-radius: 7px;
  margin-bottom: 15px;
}

.one{
  margin-left: 30%;
}

.two{
  margin-left: 22%;
}

.three{
  margin-left: 18%;
}

.four{
  margin-left: 16.5%;
}

a{
  color: white;
  text-decoration: none;
  padding: 0px;
  margin: 0px;
}
</style>