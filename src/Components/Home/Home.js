import React from 'react';
import Data from '../Programming-Data/Data';



const Home = (props) => {

    const{count}=props;

    return (
        <div>
            <h1>Welcome to Home Page</h1>
            
            <p>Count Value : {count}</p>
            <div>
            <Data count={count}></Data>
            
            </div>

        </div>
    );
};

export default Home;