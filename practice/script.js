const Practice = {
    data() {
        return {
            item: "",
            qty: "",
            items: [],
            itemCount: 0,
            empty: true,
        }
    },
    methods: {
        addItem() {
            this.items.push([this.qty, this.item]);
            this.itemCount = this.qty + this.itemCount;
            this.qty = "";
            this.item = "";
            this.empty = false;
            qtyLabel.focus();
        },
        removeItem(event) {
            this.itemCount = this.itemCount - (this.items[event.target.parentNode.value][0]);
            this.items.splice(event.target.parentNode.value, 1);
            if (this.items.length < 1) {
                this.empty = true;
            }
        },
    }
}


const app = Vue.createApp(Practice).mount('#app');