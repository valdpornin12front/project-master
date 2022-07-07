import { types } from '../types'

const initinalState = {
	name: [],
	data: [
		{
			id: 1,
			img: 'https://avatars.mds.yandex.net/i?id=2a00000181b3c2cdd252bfd8c991397426bc-761811-fast-images&n=13',
			title: 'Смартфон Redmi Note 10 128 Гб ',
			vershion: 'EU',
			porc: '8-Core Qualcomm Snapdragon 678	',
			Mainphoto: ' 48 MP + 8 MP + 2 MP + 2 MP',
			secondPhoto: ' 13 MP',
			ssd: ' 128 Гб',
			valuta: 'сом',
		},
		{
			id: 2,
			img: 'https://avatars.mds.yandex.net/i?id=2a00000181b3c2cdd252bfd8c991397426bc-761811-fast-images&n=13',
			title: 'Смартфон Redmi Note 10 128 Гб ',
			vershion: 'EU',
			porc: '8-Core Qualcomm Snapdragon 678	',
			Mainphoto: ' 48 MP + 8 MP + 2 MP + 2 MP',
			secondPhoto: ' 13 MP',
			ssd: ' 128 Гб',
			valuta: 'сом',
		},
		{
			id: 3,
			img: 'https://avatars.mds.yandex.net/i?id=2a00000181b3c2cdd252bfd8c991397426bc-761811-fast-images&n=13',
			title: 'Смартфон Redmi Note 10 128 Гб ',
			vershion: 'EU',
			porc: '8-Core Qualcomm Snapdragon 678	',
			Mainphoto: ' 48 MP + 8 MP + 2 MP + 2 MP',
			secondPhoto: ' 13 MP',
			ssd: ' 128 Гб',
			valuta: 'сом',
		},
		{
			id: 4,
			img: 'https://avatars.mds.yandex.net/i?id=2a00000181b3c2cdd252bfd8c991397426bc-761811-fast-images&n=13',
			title: 'Смартфон Redmi Note 10 128 Гб ',
			vershion: 'EU',
			porc: '8-Core Qualcomm Snapdragon 678	',
			Mainphoto: ' 48 MP + 8 MP + 2 MP + 2 MP',
			secondPhoto: ' 13 MP',
			ssd: ' 128 Гб',
			valuta: 'сом',
		},
		{
			id: 5,
			img: 'https://avatars.mds.yandex.net/i?id=2a00000181b3c2cdd252bfd8c991397426bc-761811-fast-images&n=13',
			title: 'Смартфон Redmi Note 10 128 Гб ',
			vershion: 'EU',
			porc: '8-Core Qualcomm Snapdragon 678	',
			Mainphoto: ' 48 MP + 8 MP + 2 MP + 2 MP',
			secondPhoto: ' 13 MP',
			ssd: ' 128 Гб',
			valuta: 'сом',
		},
		{
			id: 6,
			img: 'https://avatars.mds.yandex.net/i?id=2a00000181b3c2cdd252bfd8c991397426bc-761811-fast-images&n=13',
			title: 'Смартфон Redmi Note 10 128 Гб ',
			vershion: 'EU',
			porc: '8-Core Qualcomm Snapdragon 678	',
			Mainphoto: ' 48 MP + 8 MP + 2 MP + 2 MP',
			secondPhoto: ' 13 MP',
			ssd: ' 128 Гб',
			valuta: 'сом',
		},
	],
}

export const favoriteReducer = (state = initinalState, action) => {
	switch (action.type) {
		case types.ADD_TO:
			return {
				...state,
				name: [...action.payload, ...state.data],
			}
		case types.REMOVE_TO:
			return [...state, state.filter(name => name.id !== action.name.id)]
		default:
			return state
	}
}
