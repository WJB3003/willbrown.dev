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
        <h1 id="title">{{name}}</h1>
        <div id="divider"></div>
        <h2 id="occupation">{{title}}</h2>
      </div>

      <div class="panel" id="about">
        <div class="about-title">ABOUT ME</div>
        <div class="hl-about"></div>
        <div class="about-container">
          <p class="about-summary">{{summary}}</p>
          <div class="skills-container">
            <div class="skills" v-for="skill in skills">
              <i :class="skill.fontAwesomeClass"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="panel" id="work">
      <div id="work-title">WORK</div>
      <div class="hl-work"></div>
      <ul class="cards">
        <li v-for="project in projects">
          <Card :project='project'/>
        </li>
      </ul>
    </div>

    <div class="panel" id="contact">
      <p class="contact-desc">{{status}}</p>
      <div class="vl"></div>
      <div class="contact-item-container">
        <div class="contact-items" >
          <div v-for="option in contactOptions">
            <a class="contact-item" :href="option.link" target="_blank">
              <img class="icons" :src="option.img" height="35px">
              <div class="contact-item-text">{{option.content}}</div>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import json from '../../static/information.json';
  import Card from '../components/Card';

  export default {
    data() {
      return {
        name: json.name,
        title: json.title,
        summary: json.summary,
        projects: json.projects,
        status: json.contact.status,
        contactOptions: json.contact.options,
        skills: json.skills
      }
    },
    components: {
      Card
    }
  }
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.3;
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
  margin-left: 5%;
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
  padding: 20px 0 0 20px;
  margin-left: 5%;
}

.about-summary{
  font-size: 35px;
  padding: 0 150px 0 150px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
}

.about-container{
  display: flex;
  min-height: 73vh;
  height: calc(100vh - 132px);
}

.skills-container {
  max-width: 270px;
  display: flex;
  flex-basis: 150%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.skills{
  display: block;
}

.skill{
  font-size: 80px;
  width: 80px;
  height: 80px;
  margin-right: 10px;
}

.skill:hover{
  color: #42b883;
}

.skill-row{
  display: flex;
  margin-top: 10px;
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
  justify-content: center;
  display: flex;
  align-items: center;
}

.contact-item-container{
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24%;
}

.contact-items{
  display: inline-block;
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
  background-size: cover;
  background-position-x: right;
}

#title{
  font-size: 85px;
  padding-top: 11%;
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
  margin: 80px 25px 80px;
}

.card:hover{
  position: relative;
  top: -5px;
}

.cards{
  margin: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 142px);
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
  flex-wrap: wrap;
  padding: 0;
}

.card-top{
  display: flex;
  justify-content: space-between;
}

.card-bottom{
  margin-bottom: 100px;
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

a{
  color: white;
  text-decoration: none;
  padding: 0px;
  margin: 0px;
}

@media only screen and (max-width: 500px) {
  html{
    display: none;
  }
}
</style>