<template>
  <div>
    <h1>Добро пожаловать на главную страницу!</h1>
    <p>Здесь вы можете добавить свой контент</p>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/FooterComponent.vue'

export default {
  name: 'HomePage',
  components: {

    Footer
  }
}
</script>
