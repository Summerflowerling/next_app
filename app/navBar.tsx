import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div className='flex bg-red-200 p-1'>
      <Link href='/' className='m-5'>
        Ling
      </Link>
      <Link href='/user' className='m-5'>
        User
      </Link>
      <Link href='/product' className='m-5'>
        Product
      </Link>
    </div>
  );
};

export default NavBar;
