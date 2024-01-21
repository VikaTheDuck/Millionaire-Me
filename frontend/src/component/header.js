import React from 'react';



function Header(props) {
  return (
    <div className="text-center my-8">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-lime-400  text-transparent bg-clip-text">{props.name}</h1>
      <p className="text-lg text-gray-600 mt-2">Want to become a millionaire? Input your current financial situation and find out when you could become a millionaire.</p>
    </div>
  );
}



export default Header;