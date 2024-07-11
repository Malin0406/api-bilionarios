import React, { useEffect, useState } from 'react';
import Botao from '../../components/botao/botao.jsx'
import { Link } from 'react-router-dom';

const Top10 = () => {
  const [top10Data, setTop10Data] = useState([]);

  useEffect(() => {
    fetchTop10Data();
  }, []);

  const fetchTop10Data = async () => {
    try {
      const response = await fetch('./bilionarios.json');
      if (!response.ok) {
        throw new Error('Erro ao carregar dados');
      }
      const data = await response.json();
    
      const top10Bilionarios = data.filter(bilionario => bilionario.rank <= 10);
      
      setTop10Data(top10Bilionarios.slice(0, 10));
      
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div>
      <h2>Top 10 Pessoas Mais Ricas do Mundo</h2>
      <ul>
        {top10Data.map((bilionario, index) => (
          <li key={index}>
            <strong>{bilionario.nome}</strong> - {bilionario.rank}º lugar - Fortuna: {bilionario.fortuna}
          </li>
        ))}
      </ul>
      <Link to="/">Voltar para Home</Link>
      
    </div>
  );
};

export default Top10;