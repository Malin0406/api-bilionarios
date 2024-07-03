import React, { useEffect, useState } from 'react';

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
      setTop3Data(data);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div>
      <h2>Top 3 Pessoas Mais Ricas do Mundo</h2>
      <ul>
        {top3Data.map((bilionarios, rank) => (
          <li key={rank}>
            <strong>{bilionarios.nome}</strong> - {bilionarios.rank}º lugar - Fortuna: {bilionarios.fortuna}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Top3;