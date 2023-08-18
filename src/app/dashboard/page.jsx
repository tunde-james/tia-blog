'use client';

import { useSession } from 'next-auth/react';
import React from 'react';
import useSWR from 'swr';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

async function fetcher(endpoint) {
  const res = await fetch(endpoint);
  const json = await res.json();

  return json;
}

function Dashboard() {
  const session = useSession();
  console.log(session);
  const { data, isLoading, error } = useSWR(ENDPOINT, fetcher);

  return <div>Dashboard</div>;
}

export default Dashboard;
