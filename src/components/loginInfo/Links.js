import React from 'react';
import { Link } from "react-router-dom";

function Links() {
  return (
    <div >
      <Link to='/users/register'>Sign Up</Link>
      <Link to='/users/login'>Login</Link>
    </div>
  );
}

export default Links;