import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { getOptionsMode } from './bll/mainReducer';
import Main from './ui/Main/Main';
import History from './ui/History/History';

function App() {
	
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOptionsMode());
	}, [])

	return (
		<div className="App">
			<Main/>
			<History/>
		</div>
	);
}

export default App;
