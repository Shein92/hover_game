import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { mainReducer } from './mainReducer'

const rootReducer = combineReducers({
	main: mainReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>