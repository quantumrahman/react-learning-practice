import { Suspense } from "react";
import Users from "./Users.jsx";
import Friends from "./Friend.jsx";

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());

const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

export default function App() {
  const fetchPromisse = fetchFriends();

  const styles = {
    width: '550px',
    padding: '20px 15px',
    border: '1px solid yellow',
    borderRadius: '10px',
  };

  return (
    <>
      <h1>React Suspense And Use</h1>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <div style={styles}>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Friends fetchPromisse={fetchPromisse}></Friends>
        </Suspense>
      </div>
    </>
  );
};