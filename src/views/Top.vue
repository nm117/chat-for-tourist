<template>
  <div id="top-page">
    <h2>Select area which you're interested in!</h2>
    <div class="top">
      <!-- Flexbox1/4 -->
      <div class="map-japan">
        <img v-if="hoverHokkaidoOn" src="@/assets/japanmap_hokkaido.png" class="img-japanmap" usemap="#ImageMap"
          alt="japan-map-hokkaido" />
        <img v-else-if="hoverTohokuOn" src="@/assets/japanmap_tohoku.png" class="img-japanmap" usemap="#ImageMap"
          alt="japan-map-tohoku" />
        <img v-else-if="hoverKantoOn" src="@/assets/japanmap_kanto.png" class="img-japanmap" usemap="#ImageMap"
          alt="japan-map-kanto" />
        <img v-else-if="hoverChubuOn" src="@/assets/japanmap_chubu.png" class="img-japanmap" usemap="#ImageMap"
          alt="japan-map-chubu" />
        <img v-else-if="hoverKinkiOn" src="@/assets/japanmap_kinki.png" class="img-japanmap" usemap="#ImageMap"
          alt="japan-map-kinki" />
        <img v-else-if="hoverChugokuOn" src="@/assets/japanmap_chugoku.png" class="img-japanmap" usemap="#ImageMap"
          alt="japan-map-chugoku" />
        <img v-else-if="hoverShikokuOn" src="@/assets/japanmap_shikoku.png" class="img-japanmap" usemap="#ImageMap"
          alt="japan-map-shikoku" />
        <img v-else-if="hoverKyushuOn" src="@/assets/japanmap_kyushu.png" class="img-japanmap" usemap="#ImageMap"
          alt="japan-map-kyushu" />
        <img v-else-if="hoverOkinawaOn" src="@/assets/japanmap_okinawa.png" class="img-japanmap" usemap="#ImageMap"
          alt="japan-map-okinawa" />
        <img v-else src="@/assets/japanmap.png" usemap="#ImageMap" class="img-japanmap" alt="japan-map" />

        <map name="ImageMap">
          <router-link to="/hokkaido">
            <area class="btn-hokkaido" shape="rect" coords="366,16,501,121" @mouseover="hoverHokkaido"
              @mouseleave="hoverOutHokkaido" />
          </router-link>
          <router-link to="/tohoku" class="btn-tohoku">
            <area @mouseover="hoverTohoku" @mouseleave="hoverOutTohoku" shape="rect" coords="368,121,474,270" />
          </router-link>
          <router-link to="/kanto" class="btn-kanto">
            <area @mouseover="hoverKanto" @mouseleave="hoverOutKanto" shape="rect" coords="370,269,474,408" />
          </router-link>
          <router-link to="/chubu" class="btn-chubu">
            <area @mouseover="hoverChubu" @mouseleave="hoverOutChubu" shape="poly"
              coords="274,218,275,219,368,218,370,407,304,404,302,306,255,304,255,281,273,281,273,281" />
          </router-link>
          <router-link to="/kinki" class="btn-kinki">
            <area @mouseover="hoverKinki" @mouseleave="hoverOutKinki" shape="poly"
              coords="230,281,230,278,256,282,256,306,255,309,302,308,302,426,228,428,228,426" />
          </router-link>
          <router-link to="/chugoku" class="btn-chugoku">
            <area @mouseover="hoverChugoku" @mouseleave="hoverOutChugoku" shape="rect" coords="127,281,229,356" />
          </router-link>
          <router-link to="/shikoku" class="btn-shikoku">
            <area @mouseover="hoverShikoku" @mouseleave="hoverOutShikoku" shape="rect" coords="127,362,222,432" />
          </router-link>
          <router-link to="/kyushu" class="btn-kyushu">
            <area @mouseover="hoverKyushu" @mouseleave="hoverOutKyushu" shape="rect" coords="1,276,124,435" />
          </router-link>
          <router-link to="/okinawa" class="btn-okinawa">
            <area @mouseover="hoverOkinawa" @mouseleave="hoverOutOkinawa" shape="rect" coords="38,435,101,491" />
          </router-link>
        </map>
      </div>

      <!-- Flexbox2/4 -->
      <div class="select-pref-left">
        <!-- Hokkaido -->
        <div class="hokkaido">
          <span class="select-region" :class="{ 'hover-map': hoverHokkaidoOn === true }" @mouseover="hoverHokkaido"
            @mouseleave="hoverOutHokkaido">
            <router-link to="/hokkaido" class="hokkaido-title">Hokkaido</router-link>
          </span>
        </div>
        <!-- Tohoku -->
        <div class="tohoku">
          <label class="ac1" for="box1">></label>
          <span class="select-region" :class="{ 'hover-map': hoverTohokuOn === true }" @mouseover="hoverTohoku"
            @mouseleave="hoverOutTohoku">
            <router-link to="/tohoku" class="tohoku-title">Tohoku</router-link>
          </span>
          <input type="checkbox" class="check1" id="box1">
          <ul class="toggle1">
            <li><router-link to="/aomori">Aomori</router-link></li>
            <li><router-link to="/akita">Akita</router-link></li>
            <li><router-link to="/iwate">Iwate</router-link></li>
            <li><router-link to="/yamagata">Yamagata</router-link></li>
            <li><router-link to="/miyagi">Miyagi</router-link></li>
            <li><router-link to="/fukushima">Fukushima</router-link></li>
          </ul>
        </div>
        <!-- kanto -->
        <div class="kanto">
          <label class="ac2" for="box2">></label>
          <span class="select-region" :class="{ 'hover-map': hoverKantoOn === true }" @mouseover="hoverKanto"
            @mouseleave="hoverOutKanto">
            <router-link to="/kanto" class="kanto-title">Kanto</router-link>
          </span>
          <input type="checkbox" class="check2" id="box2">
          <ul class="toggle2">
            <li><router-link to="/tokyo">Tokyo</router-link></li>
            <li><router-link to="/kanagawa">Kanagawa</router-link></li>
            <li><router-link to="/saitama">Saitama</router-link></li>
            <li><router-link to="/chiba">Chiba</router-link></li>
            <li><router-link to="/ibaraki">Ibaraki</router-link></li>
            <li><router-link to="/gunma">Gunma</router-link></li>
            <li><router-link to="/tochigi">Tochigi</router-link></li>
          </ul>
        </div>
      </div>

      <!-- Flexbox3/4 -->
      <div class="select-pref-center">
        <!-- chubu -->
        <div class="chubu">
          <label class="ac3" for="box3">></label>
          <span class="select-region" :class="{ 'hover-map': hoverChubuOn === true }" @mouseover="hoverChubu"
            @mouseleave="hoverOutChubu">
            <router-link to="/chubu" class="chubu-title">Chubu</router-link>
          </span>
          <input type="checkbox" class="check3" id="box3">
          <ul class="toggle3">
            <li><router-link to="/niigata">Niigata</router-link></li>
            <li><router-link to="/yamanashi">Yamanashi</router-link></li>
            <li><router-link to="/nagano">Nagano</router-link></li>
            <li><router-link to="/gifu">Gifu</router-link></li>
            <li><router-link to="/toyama">Toyama</router-link></li>
            <li><router-link to="/ishikawa">Ishikawa</router-link></li>
            <li><router-link to="/fukui">Fukui</router-link></li>
            <li><router-link to="/shizuoka">Shizuoka</router-link></li>
            <li><router-link to="/aichi">Aichi</router-link></li>
          </ul>
        </div>
        <!-- kinki -->
        <div class="kinki">
          <label class="ac4" for="box4">></label>
          <span class="select-region" :class="{ 'hover-map': hoverKinkiOn === true }" @mouseover="hoverKinki"
            @mouseleave="hoverOutKinki">
            <router-link to="/kinki" class="kinki-title">Kinki</router-link>
          </span>
          <input type="checkbox" class="check4" id="box4">
          <ul class="toggle4">
            <li><router-link to="/osaka">Osaka</router-link></li>
            <li><router-link to="/kyoto">Kyoto</router-link></li>
            <li><router-link to="/nara">Nara</router-link></li>
            <li><router-link to="/hyogo">Hyogo</router-link></li>
            <li><router-link to="/wakayama">Wakayama</router-link></li>
            <li><router-link to="/shiga">Shiga</router-link></li>
            <li><router-link to="/mie">Mie</router-link></li>
          </ul>
        </div>
      </div>

      <!-- Flexbox4/4 -->
      <div class="select-pref-right">
        <!-- chugoku -->
        <div class="chugoku">
          <label class="ac5" for="box5">></label>
          <span class="select-region" :class="{ 'hover-map': hoverChugokuOn === true }" @mouseover="hoverChugoku"
            @mouseleave="hoverOutChugoku">
            <router-link to="/chugoku" class="chugoku-title">Chugoku</router-link>
          </span>
          <input type="checkbox" class="check5" id="box5">
          <ul class="toggle5">
            <li><router-link to="/okayama">Okayama</router-link></li>
            <li><router-link to="/hiroshima">Hiroshima</router-link></li>
            <li><router-link to="/tottori">Tottori</router-link></li>
            <li><router-link to="/shimane">Shimane</router-link></li>
            <li><router-link to="/yamaguchi">Yamaguchi</router-link></li>
          </ul>
        </div>
        <!-- shikoku -->
        <div class="shikoku">
          <label class="ac6" for="box6">></label>
          <span class="select-region" :class="{ 'hover-map': hoverShikokuOn === true }" @mouseover="hoverShikoku"
            @mouseleave="hoverOutShikoku">
            <router-link to="/shikoku" class="shikoku-title">Shikoku</router-link>
          </span>
          <input type="checkbox" class="check6" id="box6">
          <ul class="toggle6">
            <li><router-link to="/kagawa">Kagawa</router-link></li>
            <li><router-link to="/ehime">Ehime</router-link></li>
            <li><router-link to="/tokushima">Tokushima</router-link></li>
            <li><router-link to="/kochi">Kochi</router-link></li>
          </ul>
        </div>
        <!-- kyushu -->
        <div class="kyushu">
          <label class="ac7" for="box7">></label>
          <span class="select-region" :class="{ 'hover-map': hoverKyushuOn === true }" @mouseover="hoverKyushu"
            @mouseleave="hoverOutKyushu">
            <router-link to="/kyushu" class="kyushu-title">Kyushu</router-link>
          </span>
          <input type="checkbox" class="check7" id="box7">
          <ul class="toggle7">
            <li><router-link to="/fukuoka">Fukuoka</router-link></li>
            <li><router-link to="/kumamoto">Kumamoto</router-link></li>
            <li><router-link to="/oita">Oita</router-link></li>
            <li><router-link to="/nagasaki">Nagasaki</router-link></li>
            <li><router-link to="/saga">Saga</router-link></li>
            <li><router-link to="/miyazaki">Miyazaki</router-link></li>
            <li><router-link to="/kagoshima">Kagoshima</router-link></li>
          </ul>
        </div>
        <!-- okinawa -->
        <div class="okinawa">
          <span class="select-region" :class="{ 'hover-map': hoverOkinawaOn === true }" @mouseover="hoverOkinawa"
            @mouseleave="hoverOutOkinawa">
            <router-link to="/okinawa" class="okinawa-title">Okinawa</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import imageMapResize from "image-map-resizer";

  export default {
    data: function () {
      return {
        hoverHokkaidoOn: false,
        hoverTohokuOn: false,
        hoverKantoOn: false,
        hoverChubuOn: false,
        hoverKinkiOn: false,
        hoverChugokuOn: false,
        hoverShikokuOn: false,
        hoverKyushuOn: false,
        hoverOkinawaOn: false,
      };
    },
    computed: {
      getUser() {
        return this.$store.getters.getUser;
      },
      isSignIn() {
        return this.$store.getters.isSignIn;
      },
    },
    watch: {
      async isSignIn(value) {
        if (value === true) {
          await this.$store.commit("setSignIn", true);
          console.log(value);
        }
      },
    },
    mounted() {
      imageMapResize();
    },
    methods: {
      hoverHokkaido() {
        this.hoverHokkaidoOn = true;
      },
      hoverOutHokkaido() {
        this.hoverHokkaidoOn = false;
      },
      hoverTohoku() {
        this.hoverTohokuOn = true;
      },
      hoverOutTohoku() {
        this.hoverTohokuOn = false;
      },
      hoverKanto() {
        this.hoverKantoOn = true;
      },
      hoverOutKanto() {
        this.hoverKantoOn = false;
      },
      hoverChubu() {
        this.hoverChubuOn = true;
      },
      hoverOutChubu() {
        this.hoverChubuOn = false;
      },
      hoverKinki() {
        this.hoverKinkiOn = true;
      },
      hoverOutKinki() {
        this.hoverKinkiOn = false;
      },
      hoverChugoku() {
        this.hoverChugokuOn = true;
      },
      hoverOutChugoku() {
        this.hoverChugokuOn = false;
      },
      hoverShikoku() {
        this.hoverShikokuOn = true;
      },
      hoverOutShikoku() {
        this.hoverShikokuOn = false;
      },
      hoverKyushu() {
        this.hoverKyushuOn = true;
      },
      hoverOutKyushu() {
        this.hoverKyushuOn = false;
      },
      hoverOkinawa() {
        this.hoverOkinawaOn = true;
      },
      hoverOutOkinawa() {
        this.hoverOkinawaOn = false;
      },
    },
  };
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Cinzel&display=swap");

  #top-page {
    background-color: #fffffe;
    padding-top: 7em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url("~@/assets/sandybeach.svg"),
      url("~@/assets/sandybeach2.svg");
    background-position: bottom;
    background-size: 100% auto;
    background-repeat: no-repeat;
    height: auto;
  }
  * {
    margin: 0;
  }
  .top {
    margin: 0 10% 0 5%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  a {
    padding: 0 0.3em;
    transition: all 0.01s;
  }
  a:hover:not(.hokkaido-title, .tohoku-title, .chubu-title, .kanto-title, .kinki-title, .chugoku-title, .shikoku-title, .kyushu-title, .okinawa-title) {
    filter: drop-shadow(5px 5px 10px #c93f47);
  }
  h2 {
    margin-left: 8%;
  }
  .img-japanmap {
    margin: 0 auto;
  }
  li {
    line-height: 1.8em;
    padding-left: 1%;
    font-size: 1.2em;
  }
  span {
    display: inline-block;
  }
  .select-region {
    font-size: 1.5em;
    font-style: italic;
    font-weight: bold;
    margin-top: 0.5em;
    text-decoration: underline;
    filter: none;
  }
  .hover-map {
    font-size: 1.5em;
    font-style: italic;
    font-weight: bold;
    margin-top: 0.5em;
    text-decoration: underline;
    filter: drop-shadow(5px 5px 10px #c93f47);
  }
  .map-japan,
  .select-pref-left,
  .select-pref-center {
    width: 90%;
  }
  .select-pref-right {
    width: 90%;
    margin-bottom: 5em;
  }
  .hokkaido-title, .tohoku-title, .chubu-title, .kanto-title, .kinki-title, .chugoku-title, .shikoku-title, .kyushu-title, .okinawa-title {
    display: block;
    width: 100%;
  }
  .ac1,
  .ac2,
  .ac3,
  .ac4,
  .ac5,
  .ac6,
  .ac7 {
    pointer-events: all;
  }
  .toggle1,
  .toggle2,
  .toggle3,
  .toggle4,
  .toggle5,
  .toggle6,
  .toggle7 {
    height: 0;
    padding: 0 8px;
    transition: .2s;
    overflow: hidden;
  }
  .check1,
  .check2,
  .check3,
  .check4,
  .check5,
  .check6,
  .check7 {
    display: none;
  }
  .check1:checked+.toggle1,
  .check2:checked+.toggle2,
  .check3:checked+.toggle3,
  .check4:checked+.toggle4,
  .check5:checked+.toggle5,
  .check6:checked+.toggle6,
  .check7:checked+.toggle7 {
    height: auto;
    padding: 8px;
  }
  @media (min-width: 600px) {
    #top-page {
      height: auto;
    }
    .map-japan,
    .select-pref-left,
    .select-pref-center,
    .select-pref-right {
      width: 90%;
    }
  }
  @media (min-width: 1020px) {
    #top-page {
      height: 100vh;
    }
    .map-japan {
      width: auto;
    }
    .select-pref-left,
    .select-pref-center,
    .select-pref-right {
      margin-top: -4%;
      width: auto;
      margin-bottom: auto;
    }
    .ac1,
    .ac2,
    .ac3,
    .ac4,
    .ac5,
    .ac6,
    .ac7 {
      display: none;
    }
    input {
      display: none;
    }
    .toggle1,
    .toggle2,
    .toggle3,
    .toggle4,
    .toggle5,
    .toggle6,
    .toggle7 {
      height: auto;
      margin: 0;
      overflow: visible;
    }
    li {
    line-height: 1.7em;
    padding-left: 1%;
    font-size: 1.05em;
    }
  }
</style>