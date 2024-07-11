import React, { useEffect, useState } from 'react';
import Botao from '../../components/botao/botao.jsx'
import { Link } from 'react-router-dom';

const Top3 = () => {
  const [top3Data, setTop3Data] = useState([]);

  useEffect(() => {
    fetchTop3Data();
  }, []);

  const fetchTop3Data = async () => {
    try {
      const response = await fetch('./bilionarios.json');
      if (!response.ok) {
        throw new Error('Erro ao carregar dados');
      }
      const data = await response.json();
      
      // Filtrando apenas até o rank 3
      const top3Bilionarios = data.filter(bilionario => bilionario.rank <= 3);
      
      // Limitando para mostrar apenas os 3 primeiros
      setTop3Data(top3Bilionarios.slice(0, 3));
      
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div>
      <h2>Top 3 Pessoas Mais Ricas do Mundo</h2>
      <ul>
        {top3Data.map((bilionario, index) => (
          <li key={index}>
            <strong>{bilionario.nome}</strong> - {bilionario.rank}º lugar - Fortuna: {bilionario.fortuna}
          </li>
        ))}
      </ul>
      <Link to="/">Voltar para Home</Link>
      
    </div>
  );
};

export default Top3;