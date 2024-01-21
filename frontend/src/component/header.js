import React from 'react';



function Header(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Want to become a millionaire? Input your current financial situaiton and find out when you could become a millionaire</p>
    </div>
  );
}

export default Header;