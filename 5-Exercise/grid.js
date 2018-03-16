const grid = new Vue({
    el: '#grid',
    data: {
        inputNama: '',
        inputDeskripsi: '',
        inputJumlah: 0,
        inputSearch: '',
        sortField: '',
        items: []
    },
    methods: {
        sort: function (field) {
            this.sortField = field;
        },
        addItem: function () {
            this.items.push({
               name: this.inputNama,
                description: this.inputDeskripsi,
                count: this.inputJumlah
            });

            this.inputNama = '';
            this.inputDeskripsi = '';
            this.inputJumlah = 0;
        },
        renderedItems: function () {
            let result = this.items;

            if (this.inputSearch !== '') {
                result = result.filter(item => item.name.indexOf(this.inputSearch) >= 0);
            }

            if (this.sortField !== '') {
                result = result.sort((a, b) => a[this.sortField] > b[this.sortField]);
                this.sortField = '';
            }

            return result;
        },
        notHaveItems: function () {
            return this.items.length <= 0;
        }
    }
});