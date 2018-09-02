<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <router-view/>
    <a href="#/wan">wan</a>
    <br />
    <a href="#/hello">hello</a>
    <br />
    <a href="/">/</a>
    <!-- <HelloWorld v-if="isShowHelloWorld"/>
    <HW />
    <wo-ai-ni :firstName="firstName1" v-if="!isShowHelloWorld"/> -->
    <!-- <button @click="handleOnClickChange">click me to change page</button>
    <button @click="handleOnClickChangeWords">click me to change wo ai ni</button> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HW from './components/hw.vue'
import WoAiNi from './components/woaini.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    HW,
    WoAiNi
  },
  data () {
    return {
      isShowHelloWorld: false,
      firstName1: 'tangkaijie'
    }
  },
  methods: {
    handleOnClickChange() {
      const { isShowHelloWorld } = this
      this.isShowHelloWorld = !isShowHelloWorld
    },
    handleOnClickChangeWords () {
      this.firstName1 = 'tkj'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
