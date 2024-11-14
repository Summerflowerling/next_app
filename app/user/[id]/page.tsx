import React from 'react';
import UserNotFoundPage from './not-found';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: number };
}

const UserDetailPAge = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return (
    <div>
      <div> UserDetails</div>
      <div>User Number:{id}</div>
    </div>
  );
};

export default UserDetailPAge;
