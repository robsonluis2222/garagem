import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Home.css';

const Home = () => {
  const [veiculos, setVeiculos] = useState([]);

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
  }, []); // O segundo argumento vazio [] indica que este useEffect será executado apenas uma vez, sem depender de nenhum estado específico

  return (
    <div className='home-page'>
      <div className='container1'>
        <span className='title1'>CONFIRA OS VEICULOS EM</span>
        <span className='subtitle1'>DESTAQUE</span>
        <div className='destaque'>
          {/* Aqui você pode iterar sobre os veículos e exibir informações */}
          {veiculos.map((veiculo, index) => (
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
        <Link className="links" to="/estoque"><span className='ver-estoque'>VER ESTOQUE COMPLETO</span></Link>
      </div>
    </div>
  );
};

export default Home;
