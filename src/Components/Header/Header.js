import React from "react";
import Home from "../Home/Home";


const Header = (props) => {
  const { count, setCount } = props;

  return (
    <div>
      

      
      <h1>Welcome to Header Page </h1>
      <p>Count: {count}</p>
        <Home count={count}></Home>
      <button onClick={() => setCount(count + 1)}> Incrase Value</button>
    </div>
  );
};

export default Header;
