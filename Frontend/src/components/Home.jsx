import React, { useEffect, useState } from 'react';

const Home = ({ token }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/users/home", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (token) fetchUser();
  }, [token]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      {user ? (
        <h1 className="text-3xl font-bold">Welcome, {user.username}!</h1>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;