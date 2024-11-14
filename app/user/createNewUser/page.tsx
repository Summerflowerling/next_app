'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const CreateUserPage = () => {
  const router = useRouter();
  return (
    <div>
      <button className='btn btn-primary' onClick={() => router.push('/user')}>
        Create
      </button>
    </div>
  );
};

export default CreateUserPage;
