import '../home/home.css'
import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <h1>PESSOAS MAIS RICAS DO MUNDO</h1>
      <div className='telas'>
        <div className="box-3">
          <Link to="/Top3" className="btn btn-three">
            <span>TOP 3</span>
          </Link>
        </div>
        <div className="box-3">
          <Link to="/Top10" className="btn btn-three">
            <span>TOP 10</span>
          </Link>
        </div>
        <div className="box-3">
          <Link to="/Top100" className="btn btn-three">
            <span>TOP 100</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home
