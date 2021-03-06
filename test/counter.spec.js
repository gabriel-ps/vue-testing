import { mount } from 'vue-test-utils';
import Counter from '../src/components/Counter.vue';
import expect from 'expect';

describe('Counter', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Counter);
    });

    it('defaults to a count of zero', () => {
        expect(wrapper.vm.count).toBe(0);
    });

    it('increments the count when the increment button is clicked', () => {
        expect(wrapper.vm.count).toBe(0);

        wrapper.find('.increment').trigger('click');

        expect(wrapper.vm.count).toBe(1);
    });

    it('decrements the count when the decrement button is clicked', () => {
        wrapper.setData({ count: 2 });

        wrapper.find('.decrement').trigger('click');

        expect(wrapper.vm.count).toBe(1);
    });

    it('never goes below zero', () => {
        expect(wrapper.vm.count).toBe(0);

        expect(wrapper.find('.decrement').element.style.display == 'none').toBe(true);

        wrapper.setData({ count: 1 });

        expect(wrapper.find('.decrement').element.style.display == 'none').toBe(false);
    });

    it('presents the current count', () => {
        expect(wrapper.find('.count').html()).toContain(0);

        wrapper.find('button').trigger('click');

        expect(wrapper.find('.count').html()).toContain(1);
    });

});
