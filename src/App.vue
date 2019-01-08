<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <!-- the webpage dose not need to reload every time it switches back from another page -->
      <keep-alive> 
        <router-view/>
      </keep-alive>
    	
    </div>
    <div class="g-footer-container"> 
    	<c-tabbar/>
    </div>
  </div>
</template>

<script>
	import CTabbar from 'components/tabbar'
export default {
  name: 'App',
  components: {
  	CTabbar
  }
}
</script>


