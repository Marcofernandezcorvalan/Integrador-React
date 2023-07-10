export const addProductToCart = (cartItems, product) => {
	const existProduct = cartItems.find((item) => {
		return item.id === product.id;
	});

	if (existProduct) {
		return cartItems.map((item) => {
			return item.id === existProduct.id ? { ...item, quantity: item.quantity + 1 } : item;
		});
	}

	return [
		...cartItems,
		{
			...product,
			quantity: 1,
		},
	];
};

export const removeProductToCart = (cartItems, id) => {
	const productToRemove = cartItems.find((item) => {
		return item.id === id;
	});

	if (productToRemove.quantity > 1) {
		return cartItems.map((item) => {
			return item.id === productToRemove.id ? { ...item, quantity: item.quantity - 1 } : item;
		});
	}

	return cartItems.filter((item) => {
		return item.id !== productToRemove.id;
	});
};
