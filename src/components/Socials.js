import React from 'react';
// social data
import { socialData } from '../data';

const Socials = () => {
  return (
    <ul className="flex items-center justify-center gap-x-[30px]">
      {socialData.map((item, i) => {
        return (
          <li key={i}>
            <a href={item.href}>{item.icon}</a>
          </li>
        )
      })}
    </ul>
  )
};

export default Socials;
