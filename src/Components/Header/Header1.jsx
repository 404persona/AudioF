import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header1 = () => {
  return (
    <div>
      <ul className="flex justify-between px-40 text-[#7F7F7F] font-medium text-[1.190rem] py-8">
        <li>
          <NavLink to='/' style={({isActive}) =>({
            color: isActive ? '#0ACF83' : '#333',
          } )} >Headphones</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) =>({
            color: isActive ? '#0ACF83' : '#333',
          } )}  to='/headbands'>Headbands</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) =>({
            color: isActive ? '#0ACF83' : '#333',
          } )}  to='/earpads' >Earpads</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) =>({
            color: isActive ? '#0ACF83' : '#333',
          } )} to='/cables' >Cables</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header1;
