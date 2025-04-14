'use client';

import Child from '@/app/ui/Child';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<
    | {
        id: number;
        name: string;
        country: string;
        lang: string;
      }[]
    | null
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://nextjs-msw-three.vercel.app/user'
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Network response was not ok');
        } else {
          setData(data);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  // const response = await fetch('http://localhost:9090/user');
  // if (!response.ok) {
  //   throw new Error('Failed to fetch mock data');
  // }
  // const data = await response.json();

  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      {data && data?.length > 0 && (
        <ul>
          {data.map(
            (user: {
              id: number;
              name: string;
              country: string;
              lang: string;
            }) => (
              <li key={user.id}>
                <p>
                  {user.name} {user.country} {user.lang}
                </p>
              </li>
            )
          )}
        </ul>
      )}
      <Image
        className="dark:invert w-[180px] h-[38px]"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />

      <Child data={data} setData={setData} />
    </main>
  );
}
