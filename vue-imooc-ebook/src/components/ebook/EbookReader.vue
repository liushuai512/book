<template>
  <div class="ebook-reader">
    <div id="read"></div> 
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import Epub from 'epubjs'
global.ePub = Epub  
export default {
  computed: {
    ...mapGetters(['fileName'])
  },
  methods: {
    initEpub(){
      const url = 'http://localhost:8081/epub/' + this.fileName + '.epub'
      this.book = new Epub(url);
      this.rendition = this.book.renderTo('read',{
        width:innerWidth,
        height:innerHeight,
        method:'default'
      })
      this.rendition.display()
    }
  },
  mounted () {
    const fileNameAA = this.$route.params.fileName
    const fileName = this.$route.params.fileName.split('|').join('/')
    this.$store.dispatch('setFileName', fileName).then(()=>{this.initEpub()})
  }   
}
</script>

<style lang="scss" rel="stylesheet/scss" scope>
  @import "../../assets/styles/global.scss"
</style>
