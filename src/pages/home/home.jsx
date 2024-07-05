import '../home/home.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <>
      <h1>PESSOAS MAIS RICAS DEL MUNDO</h1>
      <div className='telas'>
        <div class="box-3">
            <div class="btn btn-three">
                <span>TOP 3</span>
            </div>
        </div>
        <div class="box-3">
            <div class="btn btn-three">
                <span>TOP 10</span>
            </div>
        </div>
        <div class="box-3">
            <div class="btn btn-three">
                <span>TOP 100</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
