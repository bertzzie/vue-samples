const BUTTON_TEXT = {
    FALSE: 'SHOW ME THE SECRET',
    TRUE: 'HIDE THE SECRET'
};

const app = new Vue({
    el: '#cond-loop',
    data: {
        buttonText: BUTTON_TEXT.FALSE,
        items: [
            { title: 'Tea', shortDesc: 'Chamomile' },
            { title: 'Sponge Cake', shortDesc: 'Chocolate sponge cake!' },
            { title: 'Plate', shortDesc: 'A set of paper plate for your cake' }
        ],
        show: false
    },
    methods: {
        toggleSecretText: function () {
            this.show = !this.show;
            this.buttonText = BUTTON_TEXT[this.show.toString().toUpperCase()];
        }
    }
});