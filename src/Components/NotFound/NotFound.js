import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
      <h1 style={{fontSize:'140px'}} className="notfound mt-5 text-dark text-center">404</h1>
      <h1 className="text-secondary text-center">No Results Found</h1>
      <div className="m-5 p-5">
        <Link className="text-primary text-center" to="/home">
          <p>Back to home</p>
        </Link>
      </div>
    </div>
    );
};

export default NotFound;