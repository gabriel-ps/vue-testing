import { mount } from 'vue-test-utils';
import Reminders from '../src/components/Reminders.vue';
import expect from 'expect';

describe('Reminders', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Reminders);
    });

    it('hides the reminders if there are none', () => {
        expect(wrapper.contains('ul')).toBe(false);
    });

    it('can add reminders', () => {
        addReminder('Go to the store');

        expect(remindersList().text()).toContain('Go to the store');
    });

    it('clears the input after a new reminder is added', () => {
        addReminder('Go to the store');

        expect(wrapper.find('.new-reminder').element.value).toBe('');
    });

    it('can remove reminders', () => {
        addReminder('Go to the store');
        addReminder('Clean house');

        const deleteButton = wrapper.find('ul > li:first-child .remove');
        deleteButton.trigger('click');

        expect(remindersList().text()).not.toContain('Go to the store');
    });

    function addReminder(body) {
        const input = wrapper.find('.new-reminder');

        input.element.value = body;
        input.trigger('input');

        wrapper.find('button').trigger('click');
    }

    function remindersList() {
        return wrapper.find('ul');
    }

});
