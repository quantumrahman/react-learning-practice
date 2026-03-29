import { useEffect, useState } from 'react';
import Users from './Users.jsx';

export default function App() {
  const styles = {
    width: '550px',
    padding: '20px 15px',
    border: '1px solid yellow',
    borderRadius: '10px',
  };

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <>
      <h1>React useEffect</h1>
      <div style={styles}>
        <Users user={user}></Users>
      </div>
    </>
  );
};