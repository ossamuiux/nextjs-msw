'use client';

export default function Child({
  data,
  setData,
}: {
  data: { id: number; name: string; country: string; lang: string }[] | null;
  setData: (
    data: { id: number; name: string; country: string; lang: string }[]
  ) => void;
}) {
  // const [users, setUsers] = useState<
  //   | {
  //       id: number;
  //       name: string;
  //       country: string;
  //       lang: string;
  //     }[]
  //   | null
  // >(data);

  // 버튼 클릭시 유저 추가
  async function addUser() {
    const response = await fetch('http://localhost:9090/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'ossam',
        country: 'USA',
        lang: 'English',
      }),
    });
    const newUser = await response.json();
    setData(newUser);
  }

  return (
    <div>
      <button type="button" onClick={() => addUser()}>
        유저추가
      </button>
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
    </div>
  );
}
