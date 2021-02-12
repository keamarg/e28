const Practice = {
    data() {
        return {
            item: "",
            items: [],
            empty: true,
        }
    },
    methods: {
        addItem() {
            this.items.push(this.item);
            this.empty = false;
        },
        removeItem() {
            this.items.pop(this.item);
            if (this.items.length < 1) {
                this.empty = true;
            }
        },
    }
}


const app = Vue.createApp(Practice).mount('#app');