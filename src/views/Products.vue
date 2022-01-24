<template>
  <div class="products">

    <Create v-if="status"></Create>

    <Edit v-else></Edit>

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
            <button type="button" class="btn btn-warning btn-sm" @click="edit">Edit</button>

            <button type="button" class="mx-2 btn btn-danger btn-sm">Delete</button>
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
      status: 1,
    }
  },
  created(){
    this.getProducts();
  },
  methods:{
    edit(){
      this.status = 0
    },
    getProducts(){
      this.$store.dispatch('getProducts')
    }
  },
  computed:{
    products(){
      return this.$store.getters['getProducts']
    }
  }
}
</script>
