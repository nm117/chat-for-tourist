import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from './store'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue'
import Signin from './views/Signin.vue'
import Chat from './views/Chat.vue'
// import Rooms from './views/Rooms.vue'
import Top from './views/Top.vue'
import CreateRoom from './components/CreateRoom.vue'
import Hokkaido from './components/Hokkaido.vue'
import Aomori from './components/Aomori.vue'
import Akita from './components/Akita.vue'
import Iwate from './components/Iwate.vue'
import Yamagata from './components/Yamagata.vue'
import Miyagi from './components/Miyagi.vue'
import Fukushima from './components/Fukushima.vue'
import Fukui from './components/Fukui.vue'
import Niigata from './components/Niigata.vue'
import Toyama from './components/Toyama.vue'
import Ishikawa from './components/Ishikawa.vue'
import Nagano from './components/Nagano.vue'
import Gifu from './components/Gifu.vue'
import Yamanashi from './components/Yamanashi.vue'
import Shizuoka from './components/Shizuoka.vue'
import Aichi from './components/Aichi.vue'
import Tokyo from './components/Tokyo.vue'
import Ibaraki from './components/Ibaraki.vue'
import Gunma from './components/Gunma.vue'
import Chiba from './components/Chiba.vue'
import Saitama from './components/Saitama.vue'
import Kanagawa from './components/Kanagawa.vue'
import Tochigi from './components/Tochigi.vue'
import Shiga from './components/Shiga.vue'
import Mie from './components/Mie.vue'
import Nara from './components/Nara.vue'
import Wakayama from './components/Wakayama.vue'
import Osaka from './components/Osaka.vue'
import Kyoto from './components/Kyoto.vue'
import Hyogo from './components/Hyogo.vue'
import Tottori from './components/Tottori.vue'
import Okayama from './components/Okayama.vue'
import Shimane from './components/Shimane.vue'
import Hiroshima from './components/Hiroshima.vue'
import Yamaguchi from './components/Yamaguchi.vue'
import Kagawa from './components/Kagawa.vue'
import Tokushima from './components/Tokushima.vue'
import Ehime from './components/Ehime.vue'
import Kochi from './components/Kochi.vue'
import Fukuoka from './components/Fukuoka.vue'
import Saga from './components/Saga.vue'
import Oita from './components/Oita.vue'
import Kumamoto from './components/Kumamoto.vue'
import Miyazaki from './components/Miyazaki.vue'
import Nagasaki from './components/Nagasaki.vue'
import Kagoshima from './components/Kagoshima.vue'
import Okinawa from './components/Okinawa.vue'
import Tohoku from './components/Tohoku.vue'
import Chubu from './components/Chubu.vue'
import Kanto from './components/Kanto.vue'
import Kinki from './components/Kinki.vue'
import Chugoku from './components/Chugoku.vue'
import Shikoku from './components/Shikoku.vue'
import Kyushu from './components/Kyushu.vue'
import AuthGuard from './auth-guard.js'
// import firebase from './firebase'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      // beforeEnter: (to, from, next) => {
      // if (store.getters.getUser.length === 0) {
      //   next()
      // } else {
      //   next({ name: 'Top' })
      // }
      // }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin,
    },
    // {
    //   path: '/chat',
    //   name: 'Chat',
    //   component: Chat,
    // },
    {
      path: '/chat/:id',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: AuthGuard,
    },
    // {
    //   path: '/rooms',
    //   name: 'Rooms',
    //   component: Rooms,
    //   beforeEnter: AuthGuard,
    // },
    {
      path: '/top',
      name: 'Top',
      component: Top,
      beforeEnter: AuthGuard,
      // (to, from, next) => {
      //   if (store.getters.getUser) {
      //     next()
        // } else if (from.path === '/signup' && store.getters.isSignIn) {
        //   next()
        // } else if (from.path === '/signin' && store.getters.isSignIn) {
        //   next()
        // } else {
        //   next({ name: 'Home' })
        // }
      // },
    },
    {
      path: '/createroom/:value',
      name: 'CreateRoom',
      component: CreateRoom,
      beforeEnter: AuthGuard,
    },
    // {
    //   name: 'AuthGuard',
    //   component: AuthGuard,
    // },
    {
      path: '/hokkaido',
      name: 'Hokkaido',
      component: Hokkaido,
      beforeEnter: AuthGuard,
    },
    {
      path: '/aomori',
      name: 'Aomori',
      component: Aomori,
      beforeEnter: AuthGuard,
    },
    {
      path: '/akita',
      name: 'Akita',
      component: Akita,
      beforeEnter: AuthGuard,
    },
    {
      path: '/iwate',
      name: 'Iwate',
      component: Iwate,
      beforeEnter: AuthGuard,
    },
    {
      path: '/yamagata',
      name: 'Yamagata',
      component: Yamagata,
      beforeEnter: AuthGuard,
    },
    {
      path: '/fukushima',
      name: 'Fukushima',
      component: Fukushima,
      beforeEnter: AuthGuard,
    },
    {
      path: '/miyagi',
      name: 'Miyagi',
      component: Miyagi,
      beforeEnter: AuthGuard,
    },
    {
      path: '/niigata',
      name: 'Niigata',
      component: Niigata,
      beforeEnter: AuthGuard,
    },
    {
      path: '/toyama',
      name: 'Toyama',
      component: Toyama,
      beforeEnter: AuthGuard,
    },
    {
      path: '/ishikawa',
      name: 'Ishikawa',
      component: Ishikawa,
      beforeEnter: AuthGuard,
    },
    {
      path: '/fukui',
      name: 'Fukui',
      component: Fukui,
      beforeEnter: AuthGuard,
    },
    {
      path: '/nagano',
      name: 'Nagano',
      component: Nagano,
      beforeEnter: AuthGuard,
    },
    {
      path: '/gifu',
      name: 'Gifu',
      component: Gifu,
      beforeEnter: AuthGuard,
    },
    {
      path: '/yamanashi',
      name: 'Yamanashi',
      component: Yamanashi,
      beforeEnter: AuthGuard,
    },
    {
      path: '/shizuoka',
      name: 'Shizuoka',
      component: Shizuoka,
      beforeEnter: AuthGuard,
    },
    {
      path: '/aichi',
      name: 'Aichi',
      component: Aichi,
      beforeEnter: AuthGuard,
    },
    {
      path: '/tokyo',
      name: 'Tokyo',
      component: Tokyo,
      beforeEnter: AuthGuard,
    },
    {
      path: '/ibaraki',
      name: 'Ibaraki',
      component: Ibaraki,
      beforeEnter: AuthGuard,
    },
    {
      path: '/gunma',
      name: 'Gunma',
      component: Gunma,
      beforeEnter: AuthGuard,
    },
    {
      path: '/chiba',
      name: 'Chiba',
      component: Chiba,
      beforeEnter: AuthGuard,
    },
    {
      path: '/saitama',
      name: 'Saitama',
      component: Saitama,
      beforeEnter: AuthGuard,
    },
    {
      path: '/kanagawa',
      name: 'Kanagawa',
      component: Kanagawa,
      beforeEnter: AuthGuard,
    },
    {
      path: '/tochigi',
      name: 'Tochigi',
      component: Tochigi,
      beforeEnter: AuthGuard,
    },
    {
      path: '/shiga',
      name: 'Shiga',
      component: Shiga,
      beforeEnter: AuthGuard,
    },
    {
      path: '/kyoto',
      name: 'Kyoto',
      component: Kyoto,
      beforeEnter: AuthGuard,
    },
    {
      path: '/hyogo',
      name: 'Hyogo',
      component: Hyogo,
      beforeEnter: AuthGuard,
    },
    {
      path: '/osaka',
      name: 'Osaka',
      component: Osaka,
      beforeEnter: AuthGuard,
    },
    {
      path: '/mie',
      name: 'Mie',
      component: Mie,
      beforeEnter: AuthGuard,
    },
    {
      path: '/nara',
      name: 'Nara',
      component: Nara,
      beforeEnter: AuthGuard,
    },
    {
      path: '/wakayama',
      name: 'Wakayama',
      component: Wakayama,
      beforeEnter: AuthGuard,
    },
    {
      path: '/tottori',
      name: 'Tottori',
      component: Tottori,
      beforeEnter: AuthGuard,
    },
    {
      path: '/okayama',
      name: 'Okayama',
      component: Okayama,
      beforeEnter: AuthGuard,
    },
    {
      path: '/shimane',
      name: 'Shimane',
      component: Shimane,
      beforeEnter: AuthGuard,
    },
    {
      path: '/hiroshima',
      name: 'Hiroshima',
      component: Hiroshima,
      beforeEnter: AuthGuard,
    },
    {
      path: '/yamaguchi',
      name: 'Yamaguchi',
      component: Yamaguchi,
      beforeEnter: AuthGuard,
    },
    {
      path: '/kagawa',
      name: 'Kagawa',
      component: Kagawa,
      beforeEnter: AuthGuard,
    },
    {
      path: '/tokushima',
      name: 'Tokushima',
      component: Tokushima,
      beforeEnter: AuthGuard,
    },
    {
      path: '/ehime',
      name: 'Ehime',
      component: Ehime,
      beforeEnter: AuthGuard,
    },
    {
      path: '/kochi',
      name: 'Kochi',
      component: Kochi,
      beforeEnter: AuthGuard,
    },
    {
      path: '/fukuoka',
      name: 'Fukuoka',
      component: Fukuoka,
      beforeEnter: AuthGuard,
    },
    {
      path: '/saga',
      name: 'Saga',
      component: Saga,
      beforeEnter: AuthGuard,
    },
    {
      path: '/oita',
      name: 'Oita',
      component: Oita,
      beforeEnter: AuthGuard,
    },
    {
      path: '/kumamoto',
      name: 'Kumamoto',
      component: Kumamoto,
      beforeEnter: AuthGuard,
    },
    {
      path: '/kagoshima',
      name: 'Kagoshima',
      component: Kagoshima,
      beforeEnter: AuthGuard,
    },
    {
      path: '/nagasaki',
      name: 'Nagasaki',
      component: Nagasaki,
      beforeEnter: AuthGuard,
    },
    {
      path: '/miyazaki',
      name: 'Miyazaki',
      component: Miyazaki,
      beforeEnter: AuthGuard,
    },
    {
      path: '/tohoku',
      name: 'Tohoku',
      component: Tohoku,
      beforeEnter: AuthGuard,
    },
    {
      path: '/chubu',
      name: 'Chubu',
      component: Chubu,
      beforeEnter: AuthGuard,
    },
    {
      path: '/kanto',
      name: 'Kanto',
      component: Kanto,
      beforeEnter: AuthGuard,
    },
    {
      path: '/kinki',
      name: 'Kinki',
      component: Kinki,
      beforeEnter: AuthGuard,
    },
    {
      path: '/shikoku',
      name: 'Shikoku',
      component: Shikoku,
      beforeEnter: AuthGuard,
    },
    {
      path: '/chugoku',
      name: 'Chugoku',
      component: Chugoku,
      beforeEnter: AuthGuard,
    },
    {
      path: '/kyushu',
      name: 'Kyushu',
      component: Kyushu,
      beforeEnter: AuthGuard,
    },
    {
      path: '/okinawa',
      name: 'Okinawa',
      component: Okinawa,
      beforeEnter: AuthGuard,
    },
  ]
});