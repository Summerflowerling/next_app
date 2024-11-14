import React from 'react';
import Card from '@/app/Component/Card/Card';

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductPage {slug} {sortOrder}
      <Card />
    </div>
  );
};

export default ProductPage;
