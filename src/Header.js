import React from 'react';

const Header = ({ onToggleDarkTheme }) => {
  return (
    <div>
      Header <button onClick={onToggleDarkTheme}>tema</button>
    </div>
  );
};

export default Header;
