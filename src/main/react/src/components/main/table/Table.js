import React from 'react';
import TableRow from "./TableRow";

function Table({ resultList }) {
    return (
        <table className="main__table">
            <thead>
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Hit Result</th>
            </tr>
            </thead>
            <tbody>
                { resultList.map(result => {
                    return <TableRow result={result} />
                })}
            </tbody>
        </table>
    )
}

export default Table