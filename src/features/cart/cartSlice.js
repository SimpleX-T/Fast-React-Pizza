import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [
		{
			pizzaId: 12,
			name: "Mediterranean",
			quantity: 2,
			unitPrice: 16,
			totalPrice: 32,
		},
	],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem(state, action) {
			//payload = newItem
			state.cart.push(action.payload);
		},
		deleteItem(state, action) {
			//payload = pizzaId
			state.cart = state.cart.filter(
				(item) => item.id !== action.payload
			);
		},
		increaseItemQuantity(state, action) {
			//payload = pizzaId
			const item = state.cart.find((item) => item.id === action.payload);

			item.quantity++;
			item.totalPrice = item.unitPrice * item.quantity;
		},
		decreaseItemQuantity(state, action) {
			//payload = pizzaId
			const item = state.cart.find((item) => item.id === action.payload);

			item.quantity--;
			item.totalPrice = item.unitPrice * item.quantity;
		},
		clearCart(state) {
			state.cart = [];
		},
	},
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
