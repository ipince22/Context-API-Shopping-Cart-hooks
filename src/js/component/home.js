import React from "react";
import { TshirtList } from "./TshirtList";
import { Cart } from "./Cart";
import { CartProvider } from "./CartContext";

//create your first component
export function App() {
	return (
		<CartProvider>
			<div>
				<Cart />
				<TshirtList />
			</div>
		</CartProvider>
	);
}
