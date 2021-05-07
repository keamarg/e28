import { ref, computed } from 'vue'
import { axios } from '@/common/app.js';
import { store } from '@/common/store.js';

export default function favorite(quizId) {

    // Reactive references
    let isFavorite = ref(false);
    let favoriteId = ref(null);

    // Just like in our components, we’ll access our state via computed props 
    let user = computed(() => {
        return store.state.user;
    });

    // Figure out if this product is a favorite by pinging the `favorite` “query” route
    axios.get('/favoritequiz/query?quiz_id=' + quizId + '&user_id=' + user.value.id).then((response) => {
        if (response.data.favoritequiz.length > 0) {
            // There should only ever be one unique match between a given user id 
            // and a given product id so we narrow the results down to [0]
            favoriteId.value = response.data.favoritequiz[0].id;
            isFavorite.value = true;
            console.log("favoriteId: " + favoriteId.value)
        }
    });

    // Method
    const addToFavorites = () => {
        console.log("adding: " + quizId + "to user_id: " + user.value.id);
        axios.post('/favoritequiz', {
            quiz_id: quizId,
            user_id: user.value.id
        }).then((response) => {
            if (response.data.success) {
                isFavorite.value = true;
                favoriteId.value = response.data.favoritequiz.id;
            }
        });
    }

    // Method
    const removeFromFavorites = () => {
        axios.delete('/favoritequiz/' + favoriteId.value).then((response) => {
            if (response.data.success) {
                isFavorite.value = false;
                favoriteId.value = null;
            }
        });
    }

    return { isFavorite, addToFavorites, removeFromFavorites }
}
