import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFieldMode, setHistory } from '../../bll/mainReducer';
import { AppRootStateType } from '../../bll/store';
import Field from '../Field/Field';
import style from './Main.module.css';

const Main = React.memo(() => {

	const [val, setVal] = useState('');

	const options = useSelector<AppRootStateType, Array<string>>(state => state.main.optionsMode);
	const num = useSelector<AppRootStateType, number>(state => state.main.mode);
	const dispatch = useDispatch();

	const onBtnClick = () => {
		dispatch(setFieldMode(val));
	}

	const onSelectClick = (event: ChangeEvent<HTMLSelectElement>) => {
		setVal(event.currentTarget.value);
	}

	let field: Array<Array<{ row: number, col: number }>> = [];
	for (let i = 1; i <= num; i++) {
		let res = [];
		for (let j = 1; j <= num; j++) {
			res.push({ row: i, col: j })
		}
		field.push(res);
	}

	let myTimeout: NodeJS.Timeout;

	const onMouseEnter = (row: number, col: number) => {
		myTimeout = setTimeout(() => {
			dispatch(setHistory(row, col));
		}, 500);
	}

	const onMouseLeave = () => {
		clearTimeout(myTimeout);
	};

	return (
		<div>
			<div className={style.picker}>
				<select className={style.select} placeholder={"Select mode"} onChange={onSelectClick} value={val}>
					<option value="none" hidden>Pick mode</option>
					{options.map(op => {
						return (
							<option value={op} key={op}>{op}</option>
						)
					})}
				</select>
				<button className={style.btn} onClick={onBtnClick}>START</button>
			</div>
			{field && <Field field={field} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />}
		</div>
	)
});

export default Main;