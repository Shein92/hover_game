import { Dispatch } from "redux"

const initialState: MainReducerStateType = {
	mode: 0,
	history: [],
	optionsMode: [],
	options: {}
}


export const mainReducer = (state: MainReducerStateType = initialState, action: ActionsType) => {
	switch (action.type) {
		case 'SET-OPTIONS-MODE': {
			return { ...state, optionsMode: [...action.options] }
		}
		case 'SET-FIELD-NUMBER': {
			let copyState = { ...state }
			let num = 0;
			for (let key in copyState.options) {
				if (key === action.val) {
					num = copyState.options[key].field
				}
			}
			return { ...state, mode: num, history: [] }
		}
		case 'SET-OPTIONS': {
			return { ...state, options: { ...action.opt } }
		}
		case 'SET-HISTORY': {
			return { ...state, history: [action.payload, ...state.history] }
		}
		default: {
			return state
		}
	}
}

//Action Creators
export const setFieldMode = (val: string) => {
	return { type: 'SET-FIELD-NUMBER', val } as const
}
const setOptionsMode = (options: Array<string>) => {
	return { type: 'SET-OPTIONS-MODE', options } as const
}
const setOptions = (opt: OptionsType) => {
	return { type: 'SET-OPTIONS', opt } as const
}
export const setHistory = (row: number, col: number) => {
	return { type: 'SET-HISTORY', payload: { row, col } } as const
}

//Thunk

export const getOptionsMode = () => {
	return async (dispatch: Dispatch) => {

		const response = await fetch('http://demo1030918.mockable.io/');

		const body = await response.json();

		const data = [];
		for (let key in body) {
			data.push(key)
		}
		dispatch(setOptions(body));
		dispatch(setOptionsMode(data));
	}
}


//TYPES
type MainReducerStateType = {
	history: Array<{ row: number, col: number }>,
	mode: number,
	optionsMode: Array<string>
	options: OptionsType
}

export type OptionsType = {
	[name: string]: {
		field: number
	}
}
type ActionsType = ReturnType<typeof setFieldMode>
	| ReturnType<typeof setOptionsMode>
	| ReturnType<typeof setOptions>
	| ReturnType<typeof setHistory>