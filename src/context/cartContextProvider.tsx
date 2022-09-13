// import React, { useState, HTMLAttributes } from "react";
// import { CartContext, CartListItem } from  "./cartContext";
// import { ItemsData } from "../types/types";

// export type CartContextProps<Item extends ItemsData> = {
//   context: React.Context<CartContext<Item>>;
// } & HTMLAttributes<HTMLDivElement>;

// export function CartContextProvider<Item extends ItemsData>({
// 	children,
// 	context
// }: CartContextProps<Item>) {
// 	const [products, setProducts] = useState<CartListItem<Item>[]>([]);

// 	const getProductById = (id: string): CartListItem<Item> | undefined => {
// 		return products.find((p) => p.item.id === id);
// 	};

// 	const addItemToCart = (product: CartListItem<Item>): void => {
// 		{
// 			const existingProduct = getProductById(product.item.id);
// 			let newState: CartListItem<Item>[] = [];
// 			if (existingProduct) {
// 				newState = products.map((p) => {
// 					if (p.item.id === existingProduct.item.id) {
// 						return {
// 							item: p.item,
// 							quantity: p.quantity + product.quantity
// 						};
// 					}
// 					return p;
// 				});
// 				setProducts(newState);
// 			}
// 			setProducts([...products, product]);
// 		}
// 	};
// 	const removeItemFromCart = (product: Item) => {
// 		const newProducts = products.filter((p) => p.item.id !== product.id);

// 		setProducts(newProducts);
// 	};

// 	const contextValue: CartContext<Item> = {
// 		cart: products,
// 		addItemToCart: addItemToCart,
// 		removeItemFromCart: removeItemFromCart
// 	};

// 	return <context.Provider value={contextValue}>{children}</context.Provider>;
// }

export {}