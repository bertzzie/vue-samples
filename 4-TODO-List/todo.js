const todo = new Vue({
    el: '#todo',
    data: {
        items: [],
        inputText: '',
    },
    methods: {
        itemHasContent: function () {
            return this.items.length > 0;
        },
        addItem: function () {
            this.items.push({ text: this.inputText });
            this.inputText = '';
        },
        removeElement: function (element) {
            const index = this.items.findIndex(e => e.text == element);
            this.items.splice(index, 1);
        }
    }
});