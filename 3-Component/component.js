const BUTTON_TEXT = {
    FALSE: 'SHOW ME THE SECRET',
    TRUE: 'HIDE THE SECRET'
};

Vue.component('custom-component', {
    template: '<div>Test Custom Component!</div>'
});

Vue.component('secret-input', {
    template: '#secretInputTemplate',
    data: function () {
        return {
            secretButtonText: BUTTON_TEXT.FALSE,
            showSecretText: false
        };
    },
    methods: {
        toggleSecretText: function () {
            this.showSecretText = !this.showSecretText;
            this.secretButtonText = BUTTON_TEXT[this.showSecretText.toString().toUpperCase()];
        }
    },
});

const app = new Vue({
    el: '#component'
});