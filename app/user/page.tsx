import React from 'react';

import UserTable from './userTable';
import Link from 'next/link';

interface Props {
  searchParams: { sortOrder: string };
}

const UserPage = ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);
  return (
    <div className='p-1'>
      <UserTable sortOrder={sortOrder} />
      <Link href='/user/createNewUser' className='btn'>
        Add User
      </Link>
    </div>
  );
};

export default UserPage;
