<template>
  <div id="home">
    <div class="top-bg">
      <h1>Let's get more right information for sightseeing</h1>
    </div>

    <h2>We support you to</h2>

    <div class="abouts">
      <div class="about">
        <img src="@/assets/about-1.jpg" class="sub-photo" alt="Kaimondake" />
        <h3>GET</h3>
        <p>fair information and price</p>
      </div>
      <div class="about">
        <img src="@/assets/about-2.jpg" class="sub-photo" alt="Nagasaki" />
        <h3>INTERACT</h3>
        <p>with locals would be the best memories in your trip</p>
      </div>
      <div class="about">
        <img src="@/assets/about-3.jpg" class="sub-photo" alt="Oboke" />
        <h3>DISCOVER</h3>
        <p>unexplored places</p>
      </div>
      <div class="about">
        <img src="@/assets/about-4.jpg" class="sub-photo" alt="Zao" />
        <h3>ENJOY</h3>
        <p>the trip with no stress and worries</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-bg {
  background-color: #66bab7;
  padding: 0px;
  height: 16em;
  margin: -3em 0 3em 0;
  width: 100%;
}
h1 {
  color: white;
  font-style: italic;
  font-size: 2em;
  padding: 70px 0 0 30px;
}
h2 {
  text-align: left;
  margin: 0 0 1em 5em;
  color: gray;
}
h3 {
  font-size: 1em;
  letter-spacing: 0.1em;
}
p {
  font-size: 1em;
  text-align: right;
  margin-right: 1em;
}
hr {
  color: gray;
  margin-bottom: 1em;
  width: 85%;
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
  h1 {
  padding: 130px 0 0 60px;
}
.top-bg {
  height: 20em;
}
}
@media (min-width: 1025px) {
  .about {
    margin: 0 1em;
    max-width: 20%;
  }
  h1 {
  padding: 130px 0 0 60px;
}
.top-bg {
  height: 20em;
}
}
.sub-photo {
  width: 95%;
}
</style>
