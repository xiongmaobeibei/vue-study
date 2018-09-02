<template>
  <div class="love-container">
    <dl>
      <dt>{{firstName}}</dt>
      <dd>{{importent}}love</dd>
      <dt>tanjinwei</dt>
    </dl>
  </div>
</template>
<script>
export default {
  props: {
    firstName: {
      type: String,
      default: 'tangkaijie'
    }
  },
  data () {
    return {
      importent: ''
    }
  },
  methods: {
    changeImportent () {
      this.importent = 'real'
    }
  },
  mounted () {
    this.changeImportent()
  }
}
</script>

<style lang="stylus" scoped>
.love-container
  dl
    dt
      font-size 28px
    dd
      color red
      margin 0 10px
</style>

