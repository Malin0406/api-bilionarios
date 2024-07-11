import React, { useEffect, useState } from 'react';
import Botao from '../../components/botao/botao.jsx'
import { Link } from 'react-router-dom';

const Top100 = () => {
  const [top100Data, setTop100Data] = useState([]);

  useEffect(() => {
    fetchTop100Data();
  }, []);

  const fetchTop100Data = async () => {
    try {
      const response = await fetch('./bilionarios.json');
      if (!response.ok) {
        throw new Error('Erro ao carregar dados');
      }
      const data = await response.json();
    
      const top100Bilionarios = data.filter(bilionario => bilionario.rank <= 100);
      
      setTop100Data(top100Bilionarios.slice(0, 100));
      
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div>
      <h2>Top 100 Pessoas Mais Ricas do Mundo</h2>
      <ul>
        {top100Data.map((bilionario, index) => (
          <li key={index}>
            <strong>{bilionario.nome}</strong> - {bilionario.rank}º lugar - Fortuna: {bilionario.fortuna}
          </li>
        ))}
      </ul>
      <Link to="/">Voltar para Home</Link>
      
    </div>
    
  );
};

export default Top100;