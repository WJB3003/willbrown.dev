<template>
  <div class="card">
    <div class="card-top">
      <h2></></h2>
      <div class="icon">
        <div v-for="icon in this.project.icons">
          <a :href="icon.link" target="_blank">
            <img style="padding-left: 10px" :src="icon.img" height="20px">
          </a>
        </div>
      </div>
    </div>
    <div class="card-bottom">
      <div style="min-height: 0px">
        <h2>{{this.project.title}}</h2>
        <p>{{this.project.summary}}</p>
      </div>
      <div style="height: 0px">
        <h4 style="margin:0; padding-bottom:7px">Technologies:</h4>
        <ul class="project-tech">
          <li class="project-skill" v-for="tech in this.project.technologies">{{tech}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      project: {}
    }
  }
</script>

<style>

h2 {
  font-size: 14px;
}

.icon {
  display: flex;
  align-items: center;
}

.card{
  min-width: 220px;
  min-height: 350px;
  max-width: 220px;
  max-height: 350px;
  background-color: #42B883;
  border-radius: 10px;
  padding: 30px;
  margin: 40px 25px 40px;
}

.card:hover{
  position: relative;
  top: -5px;
}

.card-top{
  display: flex;
  justify-content: space-between;
}

.card-bottom{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-tech{
  display: grid;
  grid-template-columns: 105px 105px;
  grid-column-gap: 10px;
  width: 100%;
  padding: 0;
}

.project-skill{
  list-style-type: none;
  white-space: nowrap;
}

</style>