<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h2 class="mb-4">Latest Posts</h2>
      </div>
    </div>
    <div class="row blog-entries">
      <div class="col-md-12 col-lg-12 main-content">
        <div class="row">
          <div class="col-md-4" v-for="item in catalogue">
            <a :href="'articles'+item.path" class="blog-entry">
              <img :src="item.variants[0].images[0].url" class="img" alt="Image placeholder">
              <div class="blog-content-body">
                <div class="post-meta">
                  <span class="author mr-2">{{item.type}}</span>•
                  <span class="mr-2">Price: {{item.variants[0].price}} € </span>
                </div>
                <h2>{{item.name}}</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const {data} = await useAsyncData('products' , () => GqlProducts())

const catalogue = ref()
catalogue.value = data._value.catalogue.children

</script>

<style scoped>
.img{

}
</style>
