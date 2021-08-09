import {shallowMount} from '@vue/test-utils'
import SplitDropDownButton from "../../../src/components/SplitDropDownButton/SplitDropDownButton";

describe('SplitDropDownButton.vue', () => {
    it('render buttons success', () => {
        const wrapper = shallowMount(SplitDropDownButton)

        expect(wrapper.find('button.main').exists()).toBeTruthy()
        expect(wrapper.find('button.options').exists()).toBeTruthy()
        expect(wrapper.vm.showOptions).toBeFalsy()
    })
})
