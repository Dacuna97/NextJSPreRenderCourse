import React, { Fragment } from 'react';

function ProductDetailPage() {
  return (
    <Fragment>
      <h1>Title</h1>
      <p>Description</p>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;
}

export default ProductDetailPage;
