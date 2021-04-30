<template>
  <div id="home">
    <div class="top-bg">
      <h1>Title Title Title<br>
          Title Title Title</h1>
    </div>

    <h2>Unforgettable memories to every tourist</h2>

    <div class="abouts">
      <div class="about"><img src="@/assets/about-1.jpg" class="sub-photo" alt="Kaimondake">
      <h3>DISCOVER</h3>
      <p>sub sub sub sub sub sub</p></div>
      <div class="about"><img src="@/assets/about-2.jpg" class="sub-photo" alt="Nagasaki">
      <h3>INTERACT</h3>
      <p>sub sub sub sub sub sub</p></div>
      <div class="about"><img src="@/assets/about-3.jpg" class="sub-photo" alt="Oboke">
      <h3>FAIR</h3>
      <p>sub sub sub sub sub sub</p></div>
      <div class="about"><img src="@/assets/about-4.jpg" class="sub-photo" alt="Zao">
      <h3>UNIQUE</h3>
      <p>sub sub sub sub sub sub</p></div>
    </div>

  </div>
</template>

<style scoped>
.top-bg {
  background-color: #66BAB7;
  padding: 0px;
  height: 20em; 
  margin: -3em 0 3em 0;
  width: 100%;
}
h1 {
  color: white;
  font-style: italic;
  font-size: 2em;
  padding: 100px 0 0 60px
}
h2 {
  font-size: 1.3em;
  text-align: center;
  margin-bottom: 1em;
}
h3 {
  font-size: 1em;
  letter-spacing: 0.1em;
}
p {
  font-size: 1em;
}
.abouts {
  padding: 0 2%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.about {
  margin: 0 1em;
  width: 95%;
}
@media (min-width: 600px) {
  .about {
    margin: 0 1em;
    max-width: 40%;
  }
  h2 {
    font-size: 1.5em;
  }
}
@media (min-width: 1025px) {
  .about {
    margin: 0 1em;
    max-width: 20%;
  }
  h2 {
    font-size: 1.5em;
  }
}
.sub-photo {
  width: 95%;
  text-align: center;
}
</style>