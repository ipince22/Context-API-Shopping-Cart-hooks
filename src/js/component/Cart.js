import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export const Cart = () => {
	const [cart, setCart] = useContext(CartContext);
	const totalprice = cart.reduce((acc, curr) => acc + curr.price, 0);

	return (
		<div>
			<span>Items in cart : {cart.length}</span>
			<br />
			<span>Total price : {totalprice}</span>
		</div>
	);
};
