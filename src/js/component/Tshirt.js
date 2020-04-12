import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export const Tshirt = props => {
	const [cart, setCart] = useContext(CartContext);

	const addToCart = () => {
		const thirt = { name: props.name, price: props.price };
		setCart(curr => [...curr, thirt]);
	};
	return (
		<div>
			<h2>{props.name}</h2>

			<h4>{props.price}</h4>

			<button onClick={addToCart}>Add Cart</button>
		</div>
	);
};
