import React from 'react';

const Data = (props) => {
    
    const{count}= props;

    return (
        <div>
            
            <h1>programming data is : {count}</h1>
        </div>
    );
};

export default Data;