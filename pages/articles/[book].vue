<template>
  <div class="container">
    <div class="row blog-entries">
      <div class="col-md-12 col-lg-12">
        <div style="text-align: center">
          <img :src="book.variants[0].images[0].variants[2].url" alt="Image" class="img-fluid mb-5 align-content-center">
        </div>
        <div class="post-meta">
          <span class="author mr-2"><img src="/images/marcelle.jpg" alt="Colorlib" class="mr-2"> {{book.type}}</span>•
          <span class="mr-2">Price: {{book.variants[0].price}} € </span>
        </div>
        <h1 class="mb-4">{{book.name}}</h1>
        <a class="category mb-5"
           v-for="topic in book.topics" href="#">{{topic.name}}</a>

        <div class="post-content-body"
             v-html="book.components[0].content.html">
        </div>

        <input type="submit" value="Buy" class="btn btn-primary">

        <div class="pt-5">
          <p>Categories:  <a href="#" v-for="topic in book.topics"> {{topic.name}} &nbsp;</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const route = useRoute()

const id = route.params.book

const {data} = await useAsyncData('product',() => GqlProduct({language: "en" , path: "/" +id}))

const book = data.value.catalogue

</script>

<style scoped>

</style>
