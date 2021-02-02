import React from 'react';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../bll/store';
import style from './History.module.css';

const History = React.memo(() => {

    const history = useSelector<AppRootStateType, Array<{ row: number, col: number }>>(state => state.main.history);

    return (
        <div className={style.history}>
            <h2>History</h2>
            {history.map((item) => {
                return (
                    <div className={style.historyItem}>
                        <span>{`row ${item.row} col ${item.col}`}</span>
                    </div>
                )
            })}
        </div>
    )
});

export default History;