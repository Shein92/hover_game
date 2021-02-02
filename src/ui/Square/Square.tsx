import React, { useState } from 'react';
import style from './Square.module.css';

type SquarePropsType = {
	row: number,
	col: number,
	onMouseEnter: (row: number, col: number) => void,
	onMouseLeave: () => void
}



const Square = React.memo((props: SquarePropsType) => {

	const [active, setActive] = useState(false);
	const activeSquare = active ? style.active : null
	const onMouseEnterHandler = () => {
		props.onMouseEnter(props.row, props.col);
		setActive(true)
	}

	const onMouseLeaveHandler = () => {
		props.onMouseLeave();
		setActive(false)
	}

	return (
		<div className={style.square + ' ' + activeSquare}
			onMouseEnter={onMouseEnterHandler} 
			onMouseLeave={onMouseLeaveHandler}
		></div>
	)
})

export default Square;