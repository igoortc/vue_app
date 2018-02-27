<template>
    <div class="card-header">
        <span>{{ title}}</span>
        <router-link v-if="loggedIn" :to="{ path: '/'}"><span class="fa fa-sign-out" aria-hidden="true"></span></router-link>
        <a href="#" v-else><span class="fa fa-times" aria-hidden="true"></span></a>
    </div>
</template>

<script>
export default {
  name: 'box-header',
  props: ['title', 'loggedIn']
}
</script>
