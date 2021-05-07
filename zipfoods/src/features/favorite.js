import { ref, computed } from 'vue'
import { axios } from '@/common/app.js';
import { store } from '@/common/store.js';

export default function favorite(productId) {

    // Reactive references
    let isFavorite = ref(false);
    let favoriteId = ref(null);

    // Just like in our components, we’ll access our state via computed props 
    let user = computed(() => {
        return store.state.user;
    });

    // Figure out if this product is a favorite by pinging the `favorite` “query” route
    axios.get('/favorite/query?product_id=' + productId + '&user_id=' + user.value.id).then((response) => {
        if (response.data.favorite.length > 0) {
            // There should only ever be one unique match between a given user id 
            // and a given product id so we narrow the results down to [0]
            favoriteId.value = response.data.favorite[0].id;
            isFavorite.value = true;
        }
    });

    // Method
    const addToFavorites = () => {
        axios.post('/favorite', {
            product_id: productId,
            user_id: user.value.id
        }).then((response) => {
            if (response.data.success) {
                isFavorite.value = true;
                favoriteId.value = response.data.favorite.id;
            }
        });
    }

    // Method
    const removeFromFavorites = () => {
        axios.delete('/favorite/' + favoriteId.value).then((response) => {
            if (response.data.success) {
                isFavorite.value = false;
                favoriteId.value = null;
            }
        });
    }

    return { isFavorite, addToFavorites, removeFromFavorites }
}
