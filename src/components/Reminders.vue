<template>
    <div>
        <input type="text" class="new-reminder" v-model="newReminder">
        <button @click="add">Add</button>

        <ul v-if="reminders.length">
            <li v-for="(reminder, i) in reminders">
                {{ reminder }}
                <button class="remove" @click="remove(i)">Remove</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            reminders: [],
            newReminder: '',
        };
    },
    methods: {
        add() {
            this.reminders.push(this.newReminder);

            this.newReminder = '';
        },
        remove(index) {
            this.reminders.splice(index, 1);
        }
    }
}
</script>
