const infoProducts = [
	{
		id: 1,
		name: "GeForce RTX 4090",
		precio: 2300,
		category: "expensive",
		img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/10/analisis-nvidia-rtx-4090-founders-edition-2839429.jpg?tf=1200x",
	},
	{
		id: 2,
		name: "GeForce RTX 4080",
		precio: 1800,
		category: "expensive",
		img: "https://i.blogs.es/92cc42/geforcertx4080-ap/1366_2000.jpeg",
	},
	{
		id: 3,
		name: "GeForce RTX 3090 TI",
		precio: 1500,
		category: "accessible",
		img: "https://www.enfasys.net/wp-content/uploads/2022/03/RTX-3090-Ti-ENFASYS.jpg",
	},
	{
		id: 4,
		name: "GeForce RTX 3090",
		precio: 1300,
		category: "accessible",
		img: "https://i.blogs.es/a7c57b/rtx-3090-precio-disponibiliad/1366_2000.jpg",
	},
	{
		id: 5,
		name: "GeForce RTX 3080 TI",
		precio: 1100,
		category: "accessible",
		img: "https://tecnogaming.com/wp-content/uploads/2021/06/Nvidia-GeForce-RTX-3080-Ti-Review-09.jpg",
	},
	{
		id: 6,
		name: "GeForce RTX 3080",
		precio: 1000,
		category: "accessible",
		img: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3080/images/design/geforce-rtx-3080-1-960.jpg",
	},
	{
		id: 7,
		name: "GeForce RTX 3070 TI",
		precio: 900,
		category: "economic",
		img: "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/geforce_rtx_3070_product_gallery_full_screen_3840_2_5_2.jpg",
	},
	{
		id: 8,
		name: "GeFoce RTX 3070",
		precio: 800,
		category: "economic",
		img: "https://cdn.mos.cms.futurecdn.net/Q8QdeZv4CDLyfuCdbuhaDm.jpg",
	},
];

export const TotalProducts = infoProducts.length;

export const Products = infoProducts.reduce((acc, product) => {
	if (!acc[product.category]) {
		acc[product.category] = [];
	}

	acc[product.category] = [...acc[product.category], product];
	return acc;
}, {});
