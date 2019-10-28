import user from './modules/user'
import message from './modules/message'
import game from './modules/game'
import Vuex from 'vuex'
const store = new Vuex.Store({
    modules: {
        user,
        message,
        game
    },
})
export default store

