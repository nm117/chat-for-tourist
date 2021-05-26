import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Signup from '@/views/Signup.vue'
import Signin from '@/views/Signin.vue'
import Mypage from '@/views/Mypage.vue'
import Myroom from '@/views/Myroom.vue'
import Chat from '@/views/Chat.vue'
import Top from '@/views/Top.vue'
import SettingEmail from '@/views/SettingEmail.vue'
import SettingPassword from '@/views/SettingPassword.vue'
import ResetPassword from '@/views/ResetPassword.vue'
import RoomList from '@/components/RoomList.vue'
import CreateRoom from '@/components/CreateRoom.vue'
import Hokkaido from '@/components/prefs/Hokkaido.vue'
import Aomori from '@/components/prefs/Aomori.vue'
import Akita from '@/components/prefs/Akita.vue'
import Iwate from '@/components/prefs/Iwate.vue'
import Yamagata from '@/components/prefs/Yamagata.vue'
import Miyagi from '@/components/prefs/Miyagi.vue'
import Fukushima from '@/components/prefs/Fukushima.vue'
import Fukui from '@/components/prefs/Fukui.vue'
import Niigata from '@/components/prefs/Niigata.vue'
import Toyama from '@/components/prefs/Toyama.vue'
import Ishikawa from '@/components/prefs/Ishikawa.vue'
import Nagano from '@/components/prefs/Nagano.vue'
import Gifu from '@/components/prefs/Gifu.vue'
import Yamanashi from '@/components/prefs/Yamanashi.vue'
import Shizuoka from '@/components/prefs/Shizuoka.vue'
import Aichi from '@/components/prefs/Aichi.vue'
import Tokyo from '@/components/prefs/Tokyo.vue'
import Ibaraki from '@/components/prefs/Ibaraki.vue'
import Gunma from '@/components/prefs/Gunma.vue'
import Chiba from '@/components/prefs/Chiba.vue'
import Saitama from '@/components/prefs/Saitama.vue'
import Kanagawa from '@/components/prefs/Kanagawa.vue'
import Tochigi from '@/components/prefs/Tochigi.vue'
import Shiga from '@/components/prefs/Shiga.vue'
import Mie from '@/components/prefs/Mie.vue'
import Nara from '@/components/prefs/Nara.vue'
import Wakayama from '@/components/prefs/Wakayama.vue'
import Osaka from '@/components/prefs/Osaka.vue'
import Kyoto from '@/components/prefs/Kyoto.vue'
import Hyogo from '@/components/prefs/Hyogo.vue'
import Tottori from '@/components/prefs/Tottori.vue'
import Okayama from '@/components/prefs/Okayama.vue'
import Shimane from '@/components/prefs/Shimane.vue'
import Hiroshima from '@/components/prefs/Hiroshima.vue'
import Yamaguchi from '@/components/prefs/Yamaguchi.vue'
import Kagawa from '@/components/prefs/Kagawa.vue'
import Tokushima from '@/components/prefs/Tokushima.vue'
import Ehime from '@/components/prefs/Ehime.vue'
import Kochi from '@/components/prefs/Kochi.vue'
import Fukuoka from '@/components/prefs/Fukuoka.vue'
import Saga from '@/components/prefs/Saga.vue'
import Oita from '@/components/prefs/Oita.vue'
import Kumamoto from '@/components/prefs/Kumamoto.vue'
import Miyazaki from '@/components/prefs/Miyazaki.vue'
import Nagasaki from '@/components/prefs/Nagasaki.vue'
import Kagoshima from '@/components/prefs/Kagoshima.vue'
import Okinawa from '@/components/prefs/Okinawa.vue'
import Tohoku from '@/components/Tohoku.vue'
import Chubu from '@/components/Chubu.vue'
import Kanto from '@/components/Kanto.vue'
import Kinki from '@/components/Kinki.vue'
import Chugoku from '@/components/Chugoku.vue'
import Shikoku from '@/components/Shikoku.vue'
import Kyushu from '@/components/Kyushu.vue'
import AuthGuard from '@/auth-guard.js'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
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
    {
      path: '/mypage',
      name: 'Mypage',
      component: Mypage,
    },
    {
      path: '/myroom',
      name: 'Myroom',
      component: Myroom,
    },
    {
      path: '/chat/:id',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: AuthGuard,
    },
    {
      path: '/top',
      name: 'Top',
      component: Top,
      beforeEnter: AuthGuard,
    },
    {
      path: '/setting/email',
      name: 'SettingEmail',
      component: SettingEmail,
      beforeEnter: AuthGuard,
    },
    {
      path: '/setting/password',
      name: 'SettingPassword',
      component: SettingPassword,
      beforeEnter: AuthGuard,
    },
    {
      path: '/setting/reset_password',
      name: 'ResetPassword',
      component: ResetPassword,
    },
    {
      path: '/roomlist',
      name: 'RoomList',
      component: RoomList,
      beforeEnter: AuthGuard,
    },
    {
      path: '/createroom/:value',
      name: 'CreateRoom',
      component: CreateRoom,
      beforeEnter: AuthGuard,
    },
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