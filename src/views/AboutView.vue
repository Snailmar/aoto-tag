<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="hancleClick">123</button>
    <div>
      <span v-if="show">do something</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'page_about',
  data() {
    return {
      show:false
    }
  },
  methods: {
    hancleClick(){
      this.show=!this.show
    }
  },
}
</script>