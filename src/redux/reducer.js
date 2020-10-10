import { ADD_TO_CART, REMOVE_CART } from "./actions"

const initialState = {
    cart: [{ "_id": "5ce3c85a022e720c1aea7147", "category": "5cae0d4801e06de0c6399764", "name": "iPhone 7 Plus 32GB Rose Gold", "image": "iPhone-7-Plus-32GB-Rose-Gold.png", "price": 10000000, "status": "Máy Mới 100%", "accessories": "Hộp, sách, sạc, cáp, tai nghe", "promotion": "Dán Màn Hình 4D", "details": "Sản phẩm này chúng tôi đang cập nhật nội dung chi tiết, các bạn có thể qua trực tiếp cửa hàng để xem sản phẩm, vì hàng chúng tôi luôn có sẵn.", "isStock": true, "isFeatured": true, "comments": [], "createdAt": "2019-04-10T15:53:24.102Z", "updatedAt": "2019-04-10T15:53:24.102Z", "__v": 0 }],
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            }
        case REMOVE_CART:
            return {
                ...state,
                cart: [],
            }
        default:
            return state
    }
}

export default reducer
