import { describe, it, expect, test, expectTypeOf } from 'vitest'
import { mount } from '@vue/test-utils'

import type { Card as CardType } from '@/models/card'
import Card from '@/components/Card.vue'

describe('Card components tests', () => {
    const wrapper = mount(Card, {
        propsData: {
            card: {
                id: 30,
                name: 'caterpie',
                img: 'https://cdn-icons-png.flaticon.com/512/189/189004.png',
                flipped: false,
                disabled: false,
            },
        },
    })

    it('renders properly', () => {
        const props = wrapper.props()
        
        expectTypeOf(props.card).toMatchTypeOf<CardType>()
        expect(props.card).toMatchObject({
            id: 30,
            name: 'caterpie',
            img: 'https://cdn-icons-png.flaticon.com/512/189/189004.png',
            flipped: false,
            disabled: false,
        })
        

        const img = wrapper.find('.cardImage')
        
        expect(img.attributes('alt')).toBe('caterpie')
        expect(img.attributes('src')).toBe(
            'https://cdn-icons-png.flaticon.com/512/189/189004.png'
        )
    })

    test('cardClicked event emitted on card click', async () => {
        await wrapper.trigger('click')

        expect(wrapper.emitted().cardClicked).toBeTruthy()
    })
})
