<template>
  <div class="products">
    <ul>
        <li v-for="product in products" :key="product.id">
            <!-- <img :src="product.image" :alt="product.name" /> -->
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p>{{ product.price }}</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default{
    props: {
        products: {
            type: Array,
            required: true,
        },
    },
}
</script>