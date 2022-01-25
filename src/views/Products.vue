<template>
  <div class="products">

    <Create v-if="form == 'create'"></Create>

    <Edit v-else :product="product"></Edit>

    <table class="table my-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row,index) in products" :key="index">
          <th scope="row">{{++index}}</th>
          <td>{{row.name}}</td>
          <td>{{row.price}}</td>
          <td>
            <button type="button" class="btn btn-warning btn-sm" @click="editfun(row)">Edit</button>

            <button type="button" class="mx-2 btn btn-danger btn-sm" @click="deletefun(row)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Create from '@/components/Createform.vue'
import Edit from '@/components/Editform.vue'

export default {
  components: {
    Create,
    Edit,
  },
  data(){
    return {
      product: Object,
    }
  },
  created(){
    this.getProducts();
  },
  methods:{
    editfun(product){
      this.product = product
      this.$store.dispatch('changeForm','edit')
    },
    deletefun(product){
      this.product = product
      this.$store.dispatch('deleteProduct',this.product)
    },
    getProducts(){
      this.$store.dispatch('getProducts')
    }
  },
  computed:{
    products(){
      return this.$store.getters['getProducts']
    },
    form(){
      return this.$store.getters['getform']
    }
  }
}
</script>
