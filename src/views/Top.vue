<template>
  <div id="top-page">
    <div class="top">
      <div class="map-japan">
        <img
          v-if="hoverHokkaidoOn"
          src="@/assets/japanmap_hokkaido.png"
          class="hokkaido-region-hover"
          usemap="#ImageMap"
          alt="japan-map-hokkaido"
        />
        <img
          v-else-if="hoverTohokuOn"
          src="@/assets/japanmap_tohoku.png"
          class="tohoku-region-hover"
          usemap="#ImageMap"
          alt="japan-map-tohoku"
        />
        <img
          v-else-if="hoverKantoOn"
          src="@/assets/japanmap_kanto.png"
          class="kanto-region-hover"
          usemap="#ImageMap"
          alt="japan-map-kanto"
        />
        <img
          v-else-if="hoverChubuOn"
          src="@/assets/japanmap_chubu.png"
          class="chubu-region-hover"
          usemap="#ImageMap"
          alt="japan-map-chubu"
        />
        <img
          v-else-if="hoverKinkiOn"
          src="@/assets/japanmap_kinki.png"
          class="kinki-region-hover"
          usemap="#ImageMap"
          alt="japan-map-kinki"
        />
        <img
          v-else-if="hoverChugokuOn"
          src="@/assets/japanmap_chugoku.png"
          class="chugoku-region-hover"
          usemap="#ImageMap"
          alt="japan-map-chugoku"
        />
        <img
          v-else-if="hoverShikokuOn"
          src="@/assets/japanmap_shikoku.png"
          class="shikoku-region-hover"
          usemap="#ImageMap"
          alt="japan-map-shikoku"
        />
        <img
          v-else-if="hoverKyushuOn"
          src="@/assets/japanmap_kyushu.png"
          class="kyushu-region-hover"
          usemap="#ImageMap"
          alt="japan-map-kyushu"
        />
        <img
          v-else-if="hoverOkinawaOn"
          src="@/assets/japanmap_okinawa.png"
          class="okinawa-region-hover"
          usemap="#ImageMap"
          alt="japan-map-okinawa"
        />
        <img
          v-else
          src="@/assets/japanmap.png"
          usemap="#ImageMap"
          alt="japan-map"
        />

        <map name="ImageMap">
          <router-link to="/hokkaido">
            <area
              class="btn-hokkaido"
              shape="rect"
              coords="366,16,501,121"
              @mouseover="hoverHokkaido"
              @mouseleave="hoverOutHokkaido"
            />
          </router-link>
          <router-link to="/tohoku" class="btn-tohoku">
            <area
              @mouseover="hoverTohoku"
              @mouseleave="hoverOutTohoku"
              shape="rect"
              coords="368,121,474,270"
            />
          </router-link>
          <router-link to="/kanto" class="btn-kanto">
            <area
              @mouseover="hoverKanto"
              @mouseleave="hoverOutKanto"
              shape="rect"
              coords="370,269,474,408"
            />
          </router-link>
          <router-link to="/chubu" class="btn-chubu">
            <area
              @mouseover="hoverChubu"
              @mouseleave="hoverOutChubu"
              shape="poly"
              coords="274,218,275,219,368,218,370,407,304,404,302,306,255,304,255,281,273,281,273,281"
            />
          </router-link>
          <router-link to="/kinki" class="btn-kinki">
            <area
              @mouseover="hoverKinki"
              @mouseleave="hoverOutKinki"
              shape="poly"
              coords="230,281,230,278,256,282,256,306,255,309,302,308,302,426,228,428,228,426"
            />
          </router-link>
          <router-link to="/chugoku" class="btn-chugoku">
            <area
              @mouseover="hoverChugoku"
              @mouseleave="hoverOutChugoku"
              shape="rect"
              coords="127,281,229,356"
            />
          </router-link>
          <router-link to="/shikoku" class="btn-shikoku">
            <area
              @mouseover="hoverShikoku"
              @mouseleave="hoverOutShikoku"
              shape="rect"
              coords="127,362,222,432"
            />
          </router-link>
          <router-link to="/kyushu" class="btn-kyushu">
            <area
              @mouseover="hoverKyushu"
              @mouseleave="hoverOutKyushu"
              shape="rect"
              coords="1,276,124,435"
            />
          </router-link>
          <router-link to="/okinawa" class="btn-okinawa">
            <area
              @mouseover="hoverOkinawa"
              @mouseleave="hoverOutOkinawa"
              shape="rect"
              coords="38,435,101,491"
            />
          </router-link>
        </map>
      </div>

      <div class="select-pref-left">
        <ul>
          <li
            class="select-region hokkaido-title"
            :class="{ tameshi: hoverHokkaidoOn === true }"
            @mouseover="hoverHokkaido"
            @mouseleave="hoverOutHokkaido"
          >
            <router-link to="/hokkaido">Hokkaido</router-link>
          </li>
          <li
            class="select-region tohoku-title"
            :class="{ tameshi: hoverTohokuOn === true }"
            @mouseover="hoverTohoku"
            @mouseleave="hoverOutTohoku"
          >
            <router-link to="/tohoku">Tohoku</router-link>
          </li>
          <div class="select-prefs">
            <li><router-link to="/aomori">Aomori</router-link></li>
            <li><router-link to="/akita">Akita</router-link></li>
            <li><router-link to="/iwate">Iwate</router-link></li>
            <li><router-link to="/yamagata">Yamagata</router-link></li>
            <li><router-link to="/miyagi">Miyagi</router-link></li>
            <li><router-link to="/fukushima">Fukushima</router-link></li>
          </div>
          <li
            class="select-region kanto-title"
            :class="{ tameshi: hoverKantoOn === true }"
            @mouseover="hoverKanto"
            @mouseleave="hoverOutKanto"
          >
            <router-link to="/kanto">Kanto</router-link>
          </li>
          <div class="select-prefs">
            <li><router-link to="/tokyo">Tokyo</router-link></li>
            <li><router-link to="/ibaraki">Ibaraki</router-link></li>
            <li><router-link to="/gunma">Gunma</router-link></li>
            <li><router-link to="/chiba">Chiba</router-link></li>
            <li><router-link to="/saitama">Saitama</router-link></li>
            <li><router-link to="/kanagawa">Kanagawa</router-link></li>
            <li><router-link to="/tochigi">Tochigi</router-link></li>
          </div>
        </ul>
      </div>
      <div class="select-pref-center">
        <ul>
          <li
            class="select-region chubu-title"
            :class="{ tameshi: hoverChubuOn === true }"
            @mouseover="hoverChubu"
            @mouseleave="hoverOutChubu"
          >
            <router-link to="/chubu">Chubu</router-link>
          </li>
          <div class="select-prefs">
            <li><router-link to="/niigata">Niigata</router-link></li>
            <li><router-link to="/toyama">Toyama</router-link></li>
            <li><router-link to="/ishikawa">Ishikawa</router-link></li>
            <li><router-link to="/fukui">Fukui</router-link></li>
            <li><router-link to="/nagano">Nagano</router-link></li>
            <li><router-link to="/gifu">Gifu</router-link></li>
            <li><router-link to="/yamanashi">Yamanashi</router-link></li>
            <li><router-link to="/shizuoka">Shizuoka</router-link></li>
            <li><router-link to="/aichi">Aichi</router-link></li>
          </div>
          <li
            class="select-region kinki-title"
            :class="{ tameshi: hoverKinkiOn === true }"
            @mouseover="hoverKinki"
            @mouseleave="hoverOutKinki"
          >
            <router-link to="/kinki">Kinki</router-link>
          </li>
          <div class="select-prefs">
            <li><router-link to="/osaka">Osaka</router-link></li>
            <li><router-link to="/kyoto">Kyoto</router-link></li>
            <li><router-link to="/nara">Nara</router-link></li>
            <li><router-link to="/hyogo">Hyogo</router-link></li>
            <li><router-link to="/wakayama">Wakayama</router-link></li>
            <li><router-link to="/shiga">Shiga</router-link></li>
            <li><router-link to="/mie">Mie</router-link></li>
          </div>
        </ul>
      </div>
      <div class="select-pref-right">
        <ul>
          <li
            class="select-region chugoku-title"
            :class="{ tameshi: hoverChugokuOn === true }"
            @mouseover="hoverChugoku"
            @mouseleave="hoverOutChugoku"
          >
            <router-link to="/chugoku">Chugoku</router-link>
          </li>
          <div class="select-prefs">
            <li><router-link to="/okayama">Okayama</router-link></li>
            <li><router-link to="/hiroshima">Hiroshima</router-link></li>
            <li><router-link to="/tottori">Tottori</router-link></li>
            <li><router-link to="/shimane">Shimane</router-link></li>
            <li><router-link to="/yamaguchi">Yamaguchi</router-link></li>
          </div>
          <li
            class="select-region shikoku-title"
            :class="{ tameshi: hoverShikokuOn === true }"
            @mouseover="hoverShikoku"
            @mouseleave="hoverOutShikoku"
          >
            <router-link to="/shikoku">Shikoku</router-link>
          </li>
          <div class="select-prefs">
            <li><router-link to="/kagawa">Kagawa</router-link></li>
            <li><router-link to="/ehime">Ehime</router-link></li>
            <li><router-link to="/tokushima">Tokushima</router-link></li>
            <li><router-link to="/kochi">Kochi</router-link></li>
          </div>
          <li
            class="select-region kyushu-title"
            :class="{ tameshi: hoverKyushuOn === true }"
            @mouseover="hoverKyushu"
            @mouseleave="hoverOutKyushu"
          >
            <router-link to="/kyushu">Kyushu</router-link>
          </li>
          <div class="select-prefs">
            <li><router-link to="/fukuoka">Fukuoka</router-link></li>
            <li><router-link to="/kumamoto">Kumamoto</router-link></li>
            <li><router-link to="/oita">Oita</router-link></li>
            <li><router-link to="/nagasaki">Nagasaki</router-link></li>
            <li><router-link to="/saga">Saga</router-link></li>
            <li><router-link to="/miyazaki">Miyazaki</router-link></li>
            <li><router-link to="/kagoshima">Kagoshima</router-link></li>
          </div>
          <li
            class="select-region okinawa-title"
            :class="{ tameshi: hoverOkinawaOn === true }"
            @mouseover="hoverOkinawa"
            @mouseleave="hoverOutOkinawa"
          >
            <router-link to="/okinawa">Okinawa</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- <div class="pulldownset"> -->
  <!-- select area -->
  <!-- Area
  <select class="mainselect">
      <option value="">Select area</option>
      <option value="Hokkaido">Hokkaido</option>
      <option value="Tohoku">Tohoku</option>
      <option value="Kanto">Kanto</option>
      <option value="Chubu">Chubu</option>
      <option value="Kansai">Kansai</option>
      <option value="Chugoku">Chugoku</option>
      <option value="Shikoku">Shikoku</option>
      <option value="Kyushu">Kyushu</option>
      <option value="Okinawa">Okinawa</option>
      <option value="No select">No select</option>
  </select> -->

  <!-- select pref in Hokkaido area-->
  <!-- <select id="Hokkaido" class="subbox">
    <option value="HK">Hokkaido</option>
  </select> -->
  <!-- select pref in Tohoku area-->
  <!-- <select id="Tohoku" class="subbox">
    <option value="TAO">Aomori</option>
    <option value="TAK">Akita</option>
    <option value="TI">Iwate</option>
    <option value="TY">Yamagata</option>
    <option value="TM">Miyagi</option>
    <option value="TF">Fukushima</option>
  </select> -->
  <!-- select pref in Kanto area-->
  <!-- <select id="Kanto" class="subbox">
    <option value="KT">Tokyo</option>
    <option value="KK">Kanagawa</option>
    <option value="KC">Chiba</option>
    <option value="KS">Saitama</option>
    <option value="KI">Ibaraki</option>
    <option value="KT">Tochigi</option>
    <option value="KG">Gunma</option>
  </select> -->
  <!-- select pref in Chubu area-->
  <!-- <select id="Chubu" class="subbox">
    <option value="CNI">Niigata</option>
    <option value="CNA">Nagano</option>
    <option value="CYAM">Yamanashi</option>
    <option value="CS">Shizuoka</option>
    <option value="CG">Gifu</option>
    <option value="CT">Toyama</option>
    <option value="CI">Ishikawa</option>
    <option value="CF">Fukui</option>
    <option value="CA">Aichi</option>
  </select> -->
  <!-- select pref in Kansai area-->
  <!-- <select id="Kansai" class="subbox">
    <option value="KO">Osaka</option>
    <option value="KK">Kyoto</option>
    <option value="NK">Nara</option>
    <option value="KH">Hyogo</option>
    <option value="KS">Shiga</option>
    <option value="KW">Wakayama</option>
    <option value="KM">Mie</option>
  </select> -->
  <!-- select pref in Chugoku area-->
  <!-- <select id="Chugoku" class="subbox">
    <option value="CH">Hiroshima</option>
    <option value="CO">Okayama</option>
    <option value="CS">Shimane</option>
    <option value="CT">Tottori</option>
    <option value="CYAMAG">Yamaguchi</option>
  </select> -->
  <!-- select pref in Shikoku area-->
  <!-- <select id="Shikoku" class="subbox">
    <option value="ST">Tokushima</option>
    <option value="SE">Ehime</option>
    <option value="SK">Kanagawa</option>
    <option value="SK">Kochi</option>
  </select> -->
  <!-- select pref in Kyushu area-->
  <!-- <select id="Kyushu" class="subbox">
    <option value="KF">Fukuoka</option>
    <option value="KO">Oita</option>
    <option value="KKU">Kumamoto</option>
    <option value="KN">Nagasaki</option>
    <option value="KM">Miyazaki</option>
    <option value="KS">Saga</option>
    <option value="KKA">Kagoshima</option>
  </select>   -->
  <!-- select pref in Okinawa area-->
  <!-- <select id="Okinawa" class="subbox">
    <option value="OK">Okinawa</option>
  </select> -->
  <!-- </div> -->
  <!-- <button @click="createRoom">CREATE</button> -->
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
  created() {
    console.log(this.$store.getters.getUser);
    console.log(this.hoverHokkaidoOn);
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
  background-color: #FFFFFE;
  padding-top: 7em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: calc(100vh - 3.5em);
  background-image: url("~@/assets/sandybeach.svg"),
                    url("~@/assets/sandybeach2.svg");
  background-position: bottom;
  background-size: 100% auto;
  background-repeat: no-repeat;
}
.top {
  margin: 0 10% 0 5%;
  display: flex;
  justify-content: space-around;
}
a {
  padding: 0 0.3em;
  transition: all 0.01s;
}
a:hover {
  filter: drop-shadow(5px 5px 10px #c93f47);
}
/* 日本地図DOM */
.map-japan {
  position: relative;
  box-sizing: border-box;
}
/* 日本地図画像 */
.img-japanmap {
  /* width: 80%; */
  margin: 8% 18% auto 0;
}
.map-japan .map-btn {
  position: absolute;
  box-sizing: border-box;
  padding: 0.2em auto;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  font-family: "Cinzel", serif;
}
.select-prefs {
  line-height: 1.7em;
  padding-left: 0.7em;
}
.select-region,
.tameshi {
  font-size: 1.5em;
  font-style: italic;
  font-weight: bold;
  padding-top: 10px;
  margin-bottom: 3px;
  display: block;
  border-bottom: 1px solid;
  filter: none;
}
.tameshi {
  font-size: 1.5em;
  font-style: italic;
  font-weight: bold;
  padding-top: 10px;
  margin-bottom: 3px;
  display: block;
  border-bottom: 1px solid;
  filter: drop-shadow(5px 5px 10px #c93f47);
}
</style>