import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
    console.log({initialState: initialState});
    const store = createStore(rootReducer, initialState)

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}