import List from '@/components/List'
import Vue from 'vue'

describe('List.vue', () => {
  it('displays items from the list', () => {
    const Constructor = Vue.extend(List)
    const ListComponent = new Constructor().$mount()
    // assert that component text contains items from the list
    expect(ListComponent.$el.textContent).to.contain('Lady Bird')
  })
  // it('adds a new item to list on click', () => {
  //   // build component
  //   const Constructor = Vue.extend(List)
  //   const ListComponent = new Constructor().$mount()
  //   // set input value
  //   ListComponent.newItem = 'three billboards outside ebbing missouri'
  //   // simulate click event
  //   const button = ListComponent.$el.querySelector('button')
  //   const clickEvent = new window.Event('click')
  //   button.dispatchEvent(clickEvent)
  //   // assert list contains new item
  //   ListComponent._watcher.run()
  //   expect(ListComponent.$el.textContent).to.contain('three billboards outside ebbing missouri')
  //   expect(ListComponent.listItems).to.contain('three billboards outside ebbing missouri')
  // })
})
