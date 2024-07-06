import React from 'react';

const Star = ({ filled, onClick, percentage }) => {
    return (
        <span onClick={onClick} style={{ position: 'relative', display: 'inline-block', width: '1em', height: '1em' }}>
            <span style={{ position: 'absolute', width: `${percentage}%`, overflow: 'hidden', color: 'gold' }}>
                ★
            </span>
            <span style={{ color: 'lightgray' }}>
                ★
            </span>
        </span>
    );
};

export default Star;
