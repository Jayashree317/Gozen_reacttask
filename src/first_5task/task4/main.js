  import React, { useState } from 'react';
  import Login from './login';
  import Welcome from './welcome';


  const Main = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    const handleLoginSuccess = (name) => {
      setIsLoggedIn(true);
      setUserName(name);
    };

    return (
      <div>
        {isLoggedIn ? (
          <Welcome userName={userName} />
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
      </div>
    );
  };

  export default Main;


