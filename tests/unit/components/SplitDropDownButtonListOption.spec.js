import {shallowMount} from '@vue/test-utils'
import SplitDropDownButtonListOption from "../../../src/components/SplitDropDownButton/SplitDropDownButtonListOption";

describe('SplitDropDownButtonListOption.vue', () => {
    it('render option success', () => {
        const label = 'Random option label';
        const action = () => console.log('Random option label');

        const wrapper = shallowMount(SplitDropDownButtonListOption, {
            propsData: {label, action}
        })

        expect(wrapper.text()).toMatch(label)
    })
})
