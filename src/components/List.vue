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
        <div class="list">
          <ul>
              <li v-for="(movie, index) in searchedMovies" v-bind:key="index">
                  {{ movie }}
              </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      title: '90th Oscars: Best Picture',
      loggedIn: true,
      keyword: '',
      movies: [
        'Lady Bird',
        'Call Me by Your Name',
        'The Shape of Water',
        'The Post',
        'Three Billboards Outside Ebbing, Missouri',
        'Dunkirk',
        'The Darkest Hour',
        'Phantom Thread',
        'Get Out']
    }
  },
  computed: {
    searchedMovies () {
      return this.movies.filter(movie => {
        return movie.toLowerCase().includes(this.keyword.toLowerCase())
      })
    }
  }
}
</script>
