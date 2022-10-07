const getState = ({ getStore, getActions, setStore }) => {



	return {
		store: {
			baseUrl: "https://www.swapi.tech/api",
			characters: [],
			characteristics: [],
			planets: [],
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},

		actions: {
			getCharacters: () => {
				const store = getStore()
				for (let index = 1; index <= 10; index++) {
					const baseUrlChar = `${store.baseUrl}/people/${index}`
					console.log(baseUrlChar);
					fetch(baseUrlChar)
						.then((response) => {
							if (response.ok) {
								return response.json()
							}
							throw new Error("Character fetch failed")
						})
						.then((data) => {
							setStore({ characters: [...store.characters, data.result] })
						})
						.catch((error) => { console.log(error); })
				}
			},

			getPlanets: async () => {
				const store = getStore()
				for (let index = 1; index <= 10; index++) {
					try {
						let response = await fetch(`${store.baseUrl}/planets/${index}`)
						if (response.ok) {
							let body = await response.json()
							setStore({ planets: [...store.planets, body.result] })
						} else if (response.status === 500) {
							console.log(response.status);
						}
					} catch (error) {
						console.log(error);
					}
				}
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
