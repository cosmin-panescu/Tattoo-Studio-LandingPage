import React from 'react';
// nav data
import { navData } from '../data';

const Nav = () => {
  // destructure nav data
  const { items } = navData;

  return (
    <nav>
      <ul className='flex gap-x-[58px]'>
        {items.map((item, i) => {
          return (
            <li key={i}>
              <a
                href={item.href}
                className='transition duration-300 link hover:border-b-[3px] hover:border-dark'
              >
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
};

export default Nav;
