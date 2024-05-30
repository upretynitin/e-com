import{createStore,combineReducers,applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk';
import{composeWithDevTools} from 'redux-devtools-extension';
import { CategoryReducer } from './reducer/CategoryReducer';
import { ProductReducer, productDetailReducer } from './reducer/ProductReducer';
import { cartReducer } from './reducer/CartReducer';
import { userReducer, userRegisterReducer } from './reducer/UserReducer';
import { newOrderReducer } from './reducer/OrderReducer';

const reducer = combineReducers({
    c:CategoryReducer,
    p:ProductReducer,
    pdetail:productDetailReducer,
    cart:cartReducer,
    auth:userRegisterReducer,
    user:userReducer,
    neworder:newOrderReducer
})
let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    },
}
// MiddlewearThunk
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
    
)
export default store;