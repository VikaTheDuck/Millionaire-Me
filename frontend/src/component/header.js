import React from 'react';



function Header(props) {
  return (
    <div className="text-center my-8">
      <h1 className="pb-1 text-4xl font-extrabold bg-gradient-to-r from-green-400 to-lime-400  text-transparent bg-clip-text">{props.name}</h1>
      <div className="mx-auto">
      <p className="pl-7 pr-7 wd-1/3 text-lg text-gray-600 mt-2">Are you graduating soon and want to become a millionaire? Don't know how much to save? Input your current financial situation and find out when you could become one.</p>
    </div>
    </div>
  );
}



export default Header;