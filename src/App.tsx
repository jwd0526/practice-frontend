// import { useState, useEffect } from "react";
import { useState } from "react";
import UserBox from "./UserBox/UserBox";

export interface User {
  id: string;
  name: string;
  email: string;
}

// const fetchUsers = () => {
//   return fetch("http://localhost:8080/api/users")
//     .then((response) => response.json())
//     .then((data) => data as User[]);
// };

function App() {
  const [users, setUsers] = useState<User[]>([
    { id: "1", name: "John", email: "example@gmail.com" },
  ]);

  return (
    <>
      <div>
        {users.map((user) => (
          <UserBox key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}

export default App;
