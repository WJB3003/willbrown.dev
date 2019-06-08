<template>
  <div class="layout">
    <div class="half-face-background">
      <header class="header">
        <div id="home-icon"><img src="https://i.imgur.com/7g27Ft5.png" height="37px" width="37px"></div>
        <nav class="nav">
          <div class="nav-item">About</div>
          <div class="nav-item">Work</div>
          <div class="nav-item">Contact</div>
        </nav>
      </header>
      
      <div class="panel home">
        <h1 id="title">WILLIAM BROWN</h1>
        <div id="divider"></div>
        <h2 id="occupation">Software Developer</h2>
      </div>

      <div class="panel about">
        <h1 class="about-title">ABOUT ME</h1>
        <div class="hl-about"></div>
        <div class="about-container">
          <p class="about-summary">Software Developer who is<br>passionately curious about the<br>unknowns of technology and<br>determined to continuously learn.<br>Critical thinker and problem solver<br>seeking to find the best and most<br>efficient solution for every problem.</p>
          <div class="skill-wheel"></div>
        </div>
      </div>
    </div>

    <div class="panel work">
      <div id="work-title">WORK</div>
      <div class="hl-work"></div>
    </div>

    <div class="panel contact">
      <p class="contact-desc">currently looking for<br>job opportunies and<br>to grow my network.</p>
      <div class="vl"></div>
      <div class="contact-item-container">
        <div class="contact-item email"><img class="icons" src='https://i.imgur.com/MKQvbcG.png' height="35px" width="35px">me@willbrown.dev</div>
        <div class="contact-item github"><img class="icons" src='https://i.imgur.com/lZ4FvYt.png' height="35px" width="35px">/WJB3003</div>
        <div class="contact-item linkedin"><img class="icons" src='https://i.imgur.com/LFCErGR.png' height="35px" width="35px">/williamjamesbrown</div>
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

.about{
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
  padding-top: 15px;
  margin-left: 5%;
  min-height: 17vh;
}

.about-summary{
  font-size: 35px;
  padding-top: 13vh;
  min-width: 60%;
  text-align: center;
}

.skill-wheel{
  min-width: 40%;

}

.about-container{
  display: flex;
  min-height: 73vh;
}

.work{
  background-color: #0A192F;
  color: white;
}

.hl-work{
  margin-left: 15%;
  height: 2px;
  width: 70%;
  background-color: #35495E;
}

.contact{
  background-color: black;
  color: white;
  display: flex;
  min-height: 100vh;
}

.contact-desc{
  font-size: 45px;
  min-width: 75%;
  text-align: center;
  padding-top: 30vh;
}

.contact-item-container{
  display: inline-block;
  margin-left: 5%;
  padding-top: 35vh;
}

.contact-item{
  font-size: 20px;
  min-height: 35px;
  vertical-align: middle;
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
  background-size: 100% 200vh;
}

#title{
  font-size: 85px;
  padding-top: 15%;
}

#occupation{
  font-size: 80px;
}

#work-title{
  font-size: 75px;
  text-align: center;
  padding-top: 15px;
}

#divider{
  background-color: #42B883;
  height: 10px;
  width: 72%;
}

.icons{
  padding-right: 15px;
}

</style>
