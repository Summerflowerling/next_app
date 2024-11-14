import React from 'react';

interface Props {
  params: { id: number; photoId: number };
}
const PhotoID = ({ params: { id, photoId } }: Props) => {
  return (
    <>
      <div>PhotoID:{photoId} </div>
      <div>User ID:{id}</div>
    </>
  );
};

export default PhotoID;
