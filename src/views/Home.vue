<template>
  <div id="home">
    <div class="top-bg">
      <h1>Title Title Title<br>
          Title Title Title</h1>
    </div>
    <h2>Get through this chatting 'locals' service</h2>
    <div class="abouts">
      <div class="about"><img src="@/assets/kaimondake.jpg" class="sub-photo">
      <h3>DISCOVER</h3><p>sub sub sub sub sub sub</p></div>
      <div class="about"><img src="@/assets/nagasaki.jpg" class="sub-photo">
      <h3>INTERACT</h3><p>sub sub sub sub sub sub</p></div>
      <div class="about"><img src="@/assets/sub-1.jpg" class="sub-photo">
      <h3>FAIR</h3><p>sub sub sub sub sub sub</p></div>
      <div class="about"><img src="@/assets/zao.jpg" class="sub-photo">
      <h3>UNIQUE</h3><p>sub sub sub sub sub sub</p></div>
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
  text-align: center;
  margin-bottom: 1em;
}
h3 {
  /* width: 100%; */
  font-size: 1em;
  letter-spacing: 0.1em;
}
.about {
  margin: 0 1em;
}
.sub-photo {
  width: 250px;
  height: 168px;
  /* mix-blend-mode: multiply; */
}
p {
  font-size: 1em;
}
.abouts {
  box-sizing: border-box;
  padding: 0 5%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
/* .sub1 {
  border-radius: 50% 50% 50% 70%/50% 50% 70% 60%;
}
.sub2 {
  border-radius: 80% 30% 50% 50%/50%;  
}
.sub3 {
  border-radius: 40% 40% 50% 40%/30% 50% 50% 50%;  
}
.sub4 {
  border-radius: 50% 50% 50% 70%/50% 50% 70% 60%;
} */

</style>