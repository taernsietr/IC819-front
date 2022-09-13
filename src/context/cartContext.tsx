// import {createContext} from "react";
// import {ItemsData} from "../types/types";

// export type CartListItem<Item extends ItemsData> = {
//     item: Item;
//     quantity: number;
// };

// export type CartContext<Item extends ItemsData> = {
//     cart: CartListItem<Item>[];
//     addItemToCart: (item: CartListItem<Item>) => void;
//     removeItemFromCart: (item: Item) => void;
// };

// const defaultContext: CartContext<any> = {
// 	cart: [],
// 	addItemToCart: () => {},
// 	removeItemFromCart: () => {}
// };

// export function CreateCartContext<Item extends ItemsData>() {
// 	return createContext<CartContext<Item>>(defaultContext);
// };


// // export interface props {
// //     children?: React.ReactNode;
// // }

// // useState<Order[]>([{item: {
// //     name: "aa",
// //     imagaName: "a",
// //     description: "a",
// //     value: 0,
// //     weight: 0
// // }, quantity: 2}]);



// // const CartContextProvider = ({ children }: props) => {
// // 	const [orders, setItems] = useState<Order[]>([{item: {
// // 		name: "aa",
// // 		imageName: "a",
// // 		description: "a",
// // 		value: 0,
// // 		weight: 0
// // 	}, quantity: 2}]);
    
// // 	const addItem = (order: Order) => {
// // 		const newItem: Order = {
// // 			item: {
// // 				name: order.item.name,
// // 				imageName: order.item.imageName,
// // 				description: order.item.description,
// // 				value : order.item.value,
// // 				weight: order.item.weight,
// // 			},  
// // 			quantity: order.quantity 
// // 		};
// // 		setItems([...orders, newItem]);
// // 	};    
    
// // 	return (
// // 		<CartItemsContext.Provider value={{orders, addItem}}>
// // 			{children}
// // 		</CartItemsContext.Provider>
// // 	);
// // };

// // export default CartContextProvider;

export {}