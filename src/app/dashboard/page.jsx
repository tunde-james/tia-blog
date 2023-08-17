'use client';

import React from 'react';
import useSWR from 'swr';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

async function fetcher(endpoint) {
  const res = await fetch(endpoint);
  const json = await res.json();

  return json;
}

function Dashboard() {
  const { data, isLoading, error } = useSWR(ENDPOINT, fetcher);

  // const [data, setData] = React.useState([]);
  // const [error, setError] = React.useState(false);
  // const [isLoading, setIsLoading] = React.useState(false);

  // React.useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true);

  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       cache: 'no-store',
  //     });

  //     if (!res.ok) {
  //       setError(true);
  //     }

  //     const data = await res.json();

  //     setData(data);
  //     setIsLoading(false);
  //   }
  //   getData();
  // }, []);

  console.log(data);

  return <div>Dashboard</div>;
}

export default Dashboard;
