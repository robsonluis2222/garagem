import React, { useState, useEffect } from 'react';
import './Estoque.css';

const Estoque = () => {
  const [veiculos, setVeiculos] = useState([]);
  const [query, setQuery] = useState('');
  const [filtredVeiculos, setFiltredVeiculos] = useState([]);

  // Função para atualizar a lista de veículos filtrados com base na query
  const onQueryChange = (e) => {
    setQuery(e.target.value.toLowerCase()); // Atualiza a query com o valor do input em minúsculas
  };

  useEffect(() => {
    const fetchVeiculos = async () => {
      try {
        const response = await fetch('/estoque.json');
        if (!response.ok) {
          throw new Error('Erro ao carregar os dados');
        }
        const data = await response.json();
        setVeiculos(data.carros); // Armazena os dados na variável de estado veiculos
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchVeiculos(); // Chama a função de busca ao montar o componente
  }, []);

  useEffect(() => {
    // Filtra os veículos com base na query atual
    const filtered = veiculos.filter(veiculo =>
      veiculo.marca.toLowerCase().includes(query) ||
      veiculo.modelo.toLowerCase().includes(query) ||
      veiculo.motor.toLowerCase().includes(query) ||
      veiculo.ano.toString().includes(query) // Converte o ano para string antes de verificar
    );
    setFiltredVeiculos(filtered);
  }, [query, veiculos]); // Executa sempre que a query ou a lista de veículos (veiculos) mudar

  return (
    <div className='estoque-div'>
      <span className='span-pesquisa'>PESQUISA:</span>
      <input
        type="text"
        value={query}
        onChange={onQueryChange} // Atualiza a query conforme o usuário digita
        placeholder="Pesquise"
      />
      <div className='estoque'>
        {filtredVeiculos.map((veiculo, index) => (
          <div className="veiculo" key={index}>
            <span className='price'>{veiculo.preco}</span>
            <img src={veiculo.imagens[0]} alt="" />
            <div className='v-info'>
              <h3>{veiculo.marca} {veiculo.modelo}</h3>
              <p>Motor: {veiculo.motor}</p>
              <p>Ano: {veiculo.ano}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Estoque;
