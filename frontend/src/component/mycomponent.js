import React from 'react';



function MyComponent(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>This is a custom component added to the App.</p>
    </div>
  );
}

export default MyComponent;