import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URLS } from '../services/coingeckoApi';
import SparklineChart from './sparkline-chart';
import './market-cap.css';

const MarketCap = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  useEffect(() => {
    fetch(API_URLS.COINS)
      .then(response => response.json())
      .then(data => {
        setCoins(data);
        setLoading(false);
      });
  }, []);
  
  return (
    <div className="coingecko-app">
      <header className="header">
        <div className="container">
          <div className="top-row">
            <div className="stats-top">
              <span>Coins: <strong>16,849</strong></span>
              <span className="dot"></span>
              <span>Exchanges: <strong>1,366</strong></span>
              <span className="dot"></span>
              <span>Market Cap: <strong>$3.98T</strong> <span className="up">▲ 1.1%</span></span>
              <span className="dot"></span>
              <span>24h Vol: <strong>$108.38B</strong></span>
              <span className="dot"></span>
              <span>Dominance: <strong>BTC 56.3%</strong> <span className="dot"></span> <strong>ETH 13.1%</strong></span>
              <span className="dot"></span>
              <span>🔥 <strong>Fear & Greed: 75</strong></span>
            </div>
            <div className="user-actions">
              <button className="icon-btn">🌙</button>
              <button className="icon-btn">🔔</button>
              <button className="login-btn">Log In</button>
              <button className="signup-btn">Sign Up</button>
            </div>
          </div>
          <div className="main-header-row">
            <Link className="mc-logo" to="/" aria-label="Go to homepage">
              <div className="logo-section">
                <div className="gecko-icon">🦎</div>
              </div>
              <span className="logoText">CoinGecko</span>
            </Link>

            <nav className="mc-nav" aria-label="Main">
              <ul className="navList">
                <li className="navItem navItem--dropdown">
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown('crypto');
                    }}
                    className="navLink active"
                  >
                    Cryptocurrencies ▼
                  </a>
                  {openDropdown === 'crypto' && (
                    <div className="dropdown" role="menu">
                      <Link 
                        to="/market-cap" 
                        className="dropdown__link dropdown-item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        By Market Cap
                      </Link>
                      <Link 
                        to="/categories" 
                        className="dropdown__link dropdown-item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Categories
                      </Link>
                    </div>
                  )}
                </li>
                <li className="navItem navItem--dropdown">
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown('exchanges');
                    }}
                    className="navLink"
                  >
                    Exchanges ▼
                  </a>
                  {openDropdown === 'exchanges' && (
                    <div className="dropdown" role="menu">
                      <Link 
                        to="/crypto-exchanges" 
                        className="dropdown__link dropdown-item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Crypto Exchanges
                      </Link>
                      <Link 
                        to="/decentralized-exchanges" 
                        className="dropdown__link dropdown-item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Decentralized Exchanges
                      </Link>
                    </div>
                  )}
                </li>
                <li className="navItem navItem--dropdown">
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown('nft');
                    }}
                    className="navLink"
                  >
                    NFT ▼
                  </a>
                  {openDropdown === 'nft' && (
                    <div className="dropdown" role="menu">
                      <Link 
                        to="/nft-floor-price" 
                        className="dropdown__link dropdown-item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        NFT Floor Price
                      </Link>
                      <Link 
                        to="/nft-related-coins" 
                        className="dropdown__link dropdown-item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        NFT Related Coins
                      </Link>
                    </div>
                  )}
                </li>
                <li className="navItem navItem--dropdown">
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown('learn');
                    }}
                    className="navLink"
                  >
                    Learn ▼
                  </a>
                  {openDropdown === 'learn' && (
                    <div className="dropdown" role="menu">
                      <Link 
                        to="/learn-crypto" 
                        className="dropdown__link dropdown-item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Learn Crypto
                      </Link>
                      <Link 
                        to="/research-insights" 
                        className="dropdown__link dropdown-item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Research Insights
                      </Link>
                    </div>
                  )}
                </li>
                <li className="navItem navItem--dropdown">
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown('products');
                    }}
                    className="navLink"
                  >
                    Products ▼
                  </a>
                  {openDropdown === 'products' && (
                    <div className="dropdown" role="menu">
                      <Link 
                        to="/portfolio" 
                        className="dropdown__link dropdown-item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Portfolio
                      </Link>
                      <Link 
                        to="/api" 
                        className="dropdown__link dropdown-item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        API
                      </Link>
                    </div>
                  )}
                </li>
              </ul>
            </nav>
            <div className="header-right">
              <div className="search-container">
                <div className="search-box">
                  <span className="search-icon">🔍</span>
                  <input 
                    type="text" 
                    placeholder="Search coins, categories, exchanges..." 
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <button className="portfolio-btn">📊 Portfolio</button>
            </div>
          </div>
          <nav className="mc-breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li aria-current="page">Cryptocurrency by Market Cap</li>
            </ol>
          </nav>
        </div>
      </header>

      <main>
        <section className="tableSec">
          <div className="container">
            <div className="tWrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th className="favorite-col"></th>
                    <th>Coin</th>
                    <th>Buy</th>
                    <th>Price</th>
                    <th>1h</th>
                    <th>24h</th>
                    <th>7d</th>
                    <th>24h Volume</th>
                    <th>Market Cap</th>
                    <th>Last 7 Days</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="11" style={{textAlign: 'center', padding: '20px'}}>Loading...</td>
                    </tr>
                  ) : (
                    coins.map((coin, index) => (
                      <tr key={coin.id}>
                        <td>{coin.market_cap_rank}</td>
                        <td className="favorite-col">⭐</td>
                        <td>
                          <div className="coin">
                            <img src={coin.image} alt={`${coin.name} logo`} width="32" height="32" />
                            <div className="coin-info">
                              <span className="name">{coin.name}</span>
                              <span className="symbol">{coin.symbol.toUpperCase()}</span>
                            </div>
                          </div>
                        </td>
                        <td><button className="buy-btn">Buy</button></td>
                        <td className="price">${coin.current_price?.toLocaleString()}</td>
                        <td className={coin.price_change_percentage_1h_in_currency > 0 ? 'up' : 'down'}>
                          {coin.price_change_percentage_1h_in_currency?.toFixed(2)}%
                        </td>
                        <td className={coin.price_change_percentage_24h > 0 ? 'up' : 'down'}>
                          {coin.price_change_percentage_24h?.toFixed(2)}%
                        </td>
                        <td className={coin.price_change_percentage_7d_in_currency > 0 ? 'up' : 'down'}>
                          {coin.price_change_percentage_7d_in_currency?.toFixed(2)}%
                        </td>
                        <td>${coin.total_volume?.toLocaleString()}</td>
                        <td>${coin.market_cap?.toLocaleString()}</td>
                        <td>
                          <div className="sparkline-container">
                            <SparklineChart 
                              data={coin.sparkline_in_7d?.price} 
                              width={100} 
                              height={40}
                            />
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2025 CoinGecko Clone — Demo page for "Cryptocurrency by Market Cap".</p>
          <Link to="/" className="back"><i className="fa-solid fa-arrow-left-long"></i> Back to Home</Link>
        </div>
      </footer>
    </div>
  );
};

export default MarketCap;