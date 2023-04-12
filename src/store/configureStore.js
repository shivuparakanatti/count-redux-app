import { createStore, combineReducers} from 'redux'
import countReducer from '../reducers/countReducer'

const configureStores = ()=>{
    const store = createStore(combineReducers({
        count : countReducer

    }))

    return store
}

export default configureStores