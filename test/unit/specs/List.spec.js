import List from '@/components/List'
import Vue from 'vue'

Vue.config.ignoredElements = [
  'box-header'
]

describe('List.vue', () => {
  it('mostra os itens da lista', () => {
    const Constructor = Vue.extend(List)
    const ListComponent = new Constructor().$mount()
    expect(ListComponent.$el.textContent).to.contain('Lady Bird')
  })
  it('busca é realizada', () => {
    const Constructor = Vue.extend(List)
    const ListComponent = new Constructor().$mount()
    ListComponent.keyword = 'lady'
    expect(ListComponent.searchedMovies).to.contain('Lady Bird')
  })
})
