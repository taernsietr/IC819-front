import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getMenu(req, res) {
	const data = [
    	{
    		id: "1",
    		name: "Massas",
    		available: true,
    		description: "Esse é um exemplo de descrição de um menu, abaixo temos os itens desse cardápio",
    		itemsData: [
    			{
    				id: "101",
    				name: "Lasanha à bolonhesa",
    				imageName: "lasanha-bolonhesa.jpg",
    				description: "Esse é um exemplo de descrição de item",
    				enable: true,
    				value: 30.50,
    				availableInStock: 5,
    				weight: 500.00,
    			},
    			{
    				id: "102",
    				name: "Fettucini com bacon",
    				imageName: "fettuccine-bacon.jpg",
    				description: "Esse é um exemplo de descrição de item",
    				enable: true,
    				value: 25.00,
    				availableInStock: 7,
    				weight: 500.00,
    			},
    			{
    				id: "103",
    				name: "Spaghetti al sugo",
    				imageName: "spaghetti-sugo.jpg",
    				description: "Esse é um exemplo de descrição de item",
    				enable: true,
    				value: 22.00,
    				availableInStock: 3,
    				weight: 500.00,
    			},
    			{
    				id: "104",
    				name: "Spaghetti all'oglio",
    				imageName: "spaghetti-alloglio.jpg",
    				description: "Esse é um exemplo de descrição de item",
    				enable: true,
    				value: 20.00,
    				availableInStock: 2,
    				weight: 500.00,
    			},
    			{
    				id: "105",
    				name: "Penne à parisiense",
    				imageName: "penne-parisienne.jpg",
    				description: "Esse é um exemplo de descrição de item",
    				enable: true,
    				value: 27.00,
    				availableInStock: 9,
    				weight: 500.00,
    			},
    			{
    				id: "106",
    				name: "Fettucini Bacon",
    				imageName: "fettuccine-bacon.jpg",
    				description: "Esse é um exemplo de descrição de item",
    				enable: true,
    				value: 26.00,
    				availableInStock: 5,
    				weight: 500.00,
    			},
    		],
		},
    	{
    		id: "2",
    		name: "Fit",
    		available: true,
    		description: "Esse é um exemplo de descrição de um menu, abaixo temos os itens desse cardápio",
    		itemsData: [
    			{
    				id: "201",
    				name: "Tabule",
    				imageName: "tabule.jpg",
    				description: "Esse é um exemplo de descrição de item",
    				enable: true,
    				value: 18.00,
    				availableInStock: 12,
    				weight: 250.00,
    			},
    			{
    				id: "202",
    				name: "Frango Grelhado com Quinoa",
    				imageName: "frango-quinoa.jpg",
    				description: "Esse é um exemplo de descrição de item",
    				enable: true,
    				value: 23.00,
    				availableInStock: 7,
    				weight: 400.00,
    			},
			],
    	},
    	{
    		id: "3",
    		name: "Saladas",
    		available: true,
    		description: "Esse é um exemplo de descrição de um menu, abaixo temos os itens desse cardápio",
    		itemsData: [
    			{
    				id: "301",
    				name: "Salada Caesar",
    				imageName: "caesar-salad.jpg",
    				description: "Esse é um exemplo de descrição de item",
    				enable: true,
    				value: 15.00,
    				availableInStock: 4,
    				weight: 250.00,
    			},
    		],
		},
    	{
    		id: "4",
    		name: "Risotos",
    		available: true,
    		description: "Esse é um exemplo de descrição de um menu, abaixo temos os itens desse cardápio",
    		itemsData: [
    			{
    				id: "401",
    				name: "Risotto de Camarão",
    				imageName: "risotto-camarao.jpg",
    				description: "Esse é um exemplo de descrição de item",
    				enable: true,
    				value: 29.00,
    				availableInStock: 10,
    				weight: 500.00,
    			},
    			{
    				id: "402",
    				name: "Risotto Branco",
    				imageName: "risotto-branco.jpg",
    				description: "Esse é um exemplo de descrição de item",
    				enable: true,
    				value: 22.00,
    				availableInStock: 8,
    				weight: 450.00,
    			},
			],
    	}];
	res.send(data);
}

function getItems(req, res) {
	const data = [ { item: {
			id: "101",
			name: "Lasanha à bolonhesa",
			imageName: "lasanha-bolonhesa.jpg",
			description: "Esse é um exemplo de descrição de item",
			enable: true,
			value: 30.50,
			availableInStock: 5,
			weight: 500.00,
		},
	},
	{ item:
		{
			id: "102",
			name: "Fettucini com bacon",
			imageName: "fettuccine-bacon.jpg",
			description: "Esse é um exemplo de descrição de item",
			enable: true,
			value: 25.00,
			availableInStock: 7,
			weight: 500.00,
		},
	},
	{item:
		{
			id: "103",
			name: "Spaghetti al sugo",
			imageName: "spaghetti-sugo.jpg",
			description: "Esse é um exemplo de descrição de item",
			enable: true,
			value: 22.00,
			availableInStock: 3,
			weight: 500.00,
		}, 
	}];
	res.send(data);
}

function getImgMenu(req, res) {
    let imgName = req.params.imageName;
    let file = __dirname + "/img/" + imgName;
    res.sendFile(file);
};

export {
	getMenu,
	getItems,
	getImgMenu,
};
