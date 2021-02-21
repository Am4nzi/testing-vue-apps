import { shallowMount } from '@vue/test-utils'
import ItemList from '../../views/ItemList.vue'
import Item from '../../components/Item.vue'
describe('Item.vue', () => {
    test('renders item.url', () => {
        const item = {
            url: 10
        }
        const wrapper = shallowMount(Item, {
            propsData: { item }
        })
        expect(wrapper.text()).toContain(item.url)
    })

    test('renders a link to the item.url with item.title as text', () => {
        const item = {
            url: 'http://some-url.com',
            title: 'some-title'
        }
        const wrapper = shallowMount(Item, {
            propsData: { item }
        })
        const a = wrapper.find('a')
        expect(a.text()).toBe(item.title)
        expect(a.attributes().href).toBe(item.url)
    })
})

describe('ItemList.vue', () => {
    test('renders an Item for each item in window.items', () => {
        window.items = [{}, {}, {}]
        const wrapper = shallowMount(ItemList)
        expect(wrapper.findAll(Item))
            .toHaveLength(window.items.length)
    })
})