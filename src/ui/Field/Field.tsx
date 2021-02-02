import React from 'react';
import Square from '../Square/Square';
import style from './Fields.module.css';

type FieldPropstype = {
	field: Array<Array<{ row: number, col: number }>>
	onMouseEnter: (row: number, col: number) => void,
	onMouseLeave: () => void
};

const Field = React.memo((props: FieldPropstype) => {

	return (
		<div key="field">
			{props.field.map((item, index) => {
				return (
					<div key={index} className={style.row}>
						{item.map(i => {
							return (
								<Square
									row={i.row}
									col={i.col}
									onMouseEnter={props.onMouseEnter}
									onMouseLeave={props.onMouseLeave}
									key={`${i.row}${i.col}`}
								/>
							)
						})}
					</div>
				)
			})}
		</div>
	);
});

export default Field;