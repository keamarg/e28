const Project = {
    data() {
        return {
            images: [{ Strawberry: "images/strawberry.jpg" }, { Lime: "images/lime.jpg" }, { Car: "images/car.jpg" }, { Ball: "images/ball.jpg" }, { Cat: "images/cat.jpg" }, { Hat: "images/hat.jpg" }, { Flower: "images/flower.jpg" }, { Tree: "images/tree.jpg" }, { Sea: "images/sea.jpg" }, { Cow: "images/cow.jpg" }, { Salad: "images/salad.jpg" }, { Mask: "images/mask.jpg" }],
            image: null,
            hidden: true,
        }
    },
    methods: {
        showRandomImage() {
            this.image = Object.values(this.images[Math.floor(Math.random() * this.images.length)]);
            this.hidden = false;
        },
    }
}


const app = Vue.createApp(Project).mount('#app');