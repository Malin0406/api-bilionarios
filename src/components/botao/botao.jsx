// botao.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './botao.module.css'; 

function Botao() {
  return (
    <div className={styles.box3}> 
      <Link to="/" className={styles.btnThree}> 
        <span>TESTE</span>
      </Link>
    </div>
  );
}

export default Botao;
