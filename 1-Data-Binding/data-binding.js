const BUTTON_TEXT = {
    HIDDEN: 'SHOW ME THE SECRET',
    SHOW: 'HIDE THE SECRET'
};

const SECRET_TEXT_CLASS = {
    HIDDEN: 'hidden',
    SHOW: 'show'
};

const dataBinding = new Vue({
    el: '#data-binding',
    data: {
        buttonText: BUTTON_TEXT.HIDDEN,
        inputData: 'This is input data',
        secretTextClass: SECRET_TEXT_CLASS.HIDDEN,
        title: 'Title berubah pada saat ' + (new Date()).toLocaleDateString()
    },
    methods: {
        toggleSecret: function () {
            this.secretTextClass = this.secretTextClass === SECRET_TEXT_CLASS.HIDDEN ?
                SECRET_TEXT_CLASS.SHOW :
                SECRET_TEXT_CLASS.HIDDEN;
            this.buttonText = this.buttonText === BUTTON_TEXT.HIDDEN ? BUTTON_TEXT.SHOW : BUTTON_TEXT.HIDDEN;
        }
    }
});