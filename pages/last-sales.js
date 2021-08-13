import { useEffect, useState } from 'react';
import useSWR from 'swr';

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  //   const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    'https://nextjs-course-623da-default-rtdb.europe-west1.firebasedatabase.app/sales.json'
  );

  useEffect(() => {
    const transformedSales = [];

    if (data) {
      Object.keys(data).forEach((key) => {
        transformedSales.push({ id: key, username: data[key].username, volume: data[key].volume });
      });
      setSales(transformedSales);
    }
  }, [data]);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch('https://nextjs-course-623da-default-rtdb.europe-west1.firebasedatabase.app/sales.json')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const transformedSales = [];

  //         Object.keys(data).forEach((key) => {
  //           transformedSales.push({ id: key, username: data[key].username, volume: data[key].volume });
  //         });
  //         setSales(transformedSales);
  //         setIsLoading(false);
  //       });
  //   }, []);

  //   if (isLoading) {
  //     return <p>Loading...</p>;
  //   }

  //   if (!sales) {
  //     return <p>No data yet</p>;
  //   }
  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://nextjs-course-623da-default-rtdb.europe-west1.firebasedatabase.app/sales.json');
  const data = await response.json();

  const transformedSales = [];

  Object.keys(data).forEach((key) => {
    transformedSales.push({ id: key, username: data[key].username, volume: data[key].volume });
  });

  return {
    props: {
      sales: transformedSales,
      revalidate: 10
    }
  };
}

export default LastSalesPage;
