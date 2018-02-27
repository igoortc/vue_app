<template>
  <div class="card box">
    <box-header :title="title" :loggedIn="loggedIn"></box-header>
    <div class="card-body movies">
        <div class="input-group mb-3">
          <input type="text" class="form-control" id="keyword" placeholder="Search a movie" v-model="keyword">
          <div class="input-group-append">
            <span class="input-group-text"><i class="fa fa-search" aria-hidden="true"></i></span>
          </div>
        </div>
        <ul>
            <li v-for="(movie, index) in searchedMovies" v-bind:key="index">
                {{ movie.title }}
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      title: '90th Oscars: Best Picture',
      loggedIn: true,
      keyword: '',
      movies: [
        {title: 'Lady Bird'},
        {title: 'Call Me by Your Name'},
        {title: 'The Shape of Water'},
        {title: 'The Post'},
        {title: 'Three Billboards Outside Ebbing, Missouri'},
        {title: 'Dunkirk'},
        {title: 'The Darkest Hour'},
        {title: 'Phantom Thread'},
        {title: 'Get Out'}
      ]
    }
  },
  computed: {
    searchedMovies () {
      return this.movies.filter(movie => {
        return movie.title.toLowerCase().includes(this.keyword.toLowerCase())
      })
    }
  }
}
</script>
