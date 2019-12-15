<template>
  <div class="card">
    <div class="card-top">
      <h2></></h2>
      <div style="display: flex">
        <div v-for="icon in this.project.icons">
          <a :href="icon.link" target="_blank">
            <img :src="icon.img" height="20px" style="padding-left: 10px">
          </a>
        </div>
      </div>
    </div>
    <div class="card-bottom">
      <div class="project-desc">
        <h2>{{this.project.title}}</h2>
        <p>{{this.project.summary}}</p>
      </div>
    </div>
    <h4 style="margin: 0">Technologies:</h4>
    <ul class="project-tech">
      <li class="project-skill" style="white-space: nowrap" v-for="tech in this.project.technologies">{{tech}}</li>
    </ul>
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


</style>