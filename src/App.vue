<template>
  <v-app>
    <v-main>
      <!-- <Mobilemenubar class="mobile" v-if="isMobile"/> -->
      <Sidebar class="mobile" v-if="isMobile"/>
      <PCmenubar class="pc" v-if="!isMobile"/>
      <v-container>

        <router-link to="/"/>
        <router-view />
      </v-container>


      <!-- <Footer> -->

    </v-main>
  </v-app>
</template>

<script>
//import Mobilemenubar from './components/Mobilemenubar.vue'
import PCmenubar from './components/PCmenubar'
import Sidebar from './components/Sidebar'
//import Footer from './components/Footer'
export default {
  name: 'App',

  components: {
    //Mobilemenubar,
    PCmenubar,
    Sidebar,
    //Footer
    
  },
  data: () => ({
    isMobile: false,
    isLogin: false,

  }),

  beforeMount() {
    this.windowResize();
    window.addEventListener("resize", this.windowResize);
  },

  methods: {
    check(){
      console.log(window.innerWidth);
    },
    //모바일, PC 화면 체크
    windowResize() {
      if (window.innerWidth <= 1263) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }

  }
};
</script>

<style scope>
.mobile {
  position:sticky;
  top: 0px;
  z-index: 999;
}
</style>
