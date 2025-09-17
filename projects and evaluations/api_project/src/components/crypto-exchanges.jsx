import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URLS } from '../services/coingeckoApi';
import "./crypto-exchanges.css";

const CryptoExchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URLS.EXCHANGES)
      .then(response => response.json())
      .then(data => {
        setExchanges(data.slice(0, 10));
        setLoading(false);
      });
  }, []);

  return (
    <div className="coingecko-app">
      <div className="top-header">
        <div className="container topbar_in">
          <div className="stat"><span className="label">Coins:</span> <span className="value">16,849</span></div>
          <div className="stat"><span className="label">Exchanges:</span> <span className="value">1,366</span></div>
          <div className="stat"><span className="label">Market Cap:</span> <span className="value">$3.98T</span> <span className="pct pct-up">+1.1%</span></div>
          <div className="stat hide-mobile"><span className="label">24h Vol:</span> <span className="value">$108.38B</span></div>
          <div className="stat hide-mobile"><span className="label">Dominance:</span> <span className="value">BTC 56.3% • ETH 13.1%</span></div>
          <div className="stat hide-mobile"><span className="label"><i className="fa-solid fa-fire"></i> Gas:</span> <span className="value">1,368 GWEI</span></div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container nav_in">
          <Link to="/" className="brand" aria-label="CoinGecko Home">
            <img src="https://placehold.co/32x32/ffffff/000000?text=CG" alt="CoinGecko" className="main-logo" />
            <span className="brand__name">coingecko</span>
          </Link>

          <nav className="nav" role="navigation" aria-label="Main">
            <ul className="navList">
              <li className="navItem navItem--dropdown dropd">
                <Link to="/market-cap" className="navLink navLink--crypto">
                  Cryptocurrencies <i className="fa-solid fa-caret-down"></i>
                </Link>
                <div className="dropdown">
                  <Link to="/market-cap" className="dropdown__link">By Market Cap</Link>
                  <Link to="/categories" className="dropdown__link">Categories</Link>
                </div>
              </li>
              <li className="navItem navItem--dropdown dropd">
                <Link to="/crypto-exchanges" className="navLink navLink--exchanges is-current">
                  Exchanges <i className="fa-solid fa-caret-down"></i>
                </Link>
                <div className="dropdown">
                  <Link to="/crypto-exchanges" className="dropdown__link">Crypto Exchanges</Link>
                  <Link to="/decentralized-exchanges" className="dropdown__link">Decentralized Exchanges</Link>
                </div>
              </li>
              <li className="navItem navItem--dropdown dropd">
                <Link to="/nft-floor-price" className="navLink navLink--nft">
                  NFT <i className="fa-solid fa-caret-down"></i>
                </Link>
                <div className="dropdown">
                  <Link to="/nft-floor-price" className="dropdown__link">NFT Floor Price</Link>
                  <Link to="/nft-related-coins" className="dropdown__link">NFT Related Coins</Link>
                </div>
              </li>
              <li className="navItem navItem--dropdown dropd">
                <Link to="/learn-crypto" className="navLink navLink--learn">
                  Learn <i className="fa-solid fa-caret-down"></i>
                </Link>
                <div className="dropdown">
                  <Link to="/learn-crypto" className="dropdown__link">Learn Crypto</Link>
                  <Link to="/research-insights" className="dropdown__link">Research Insights</Link>
                </div>
              </li>
            </ul>
          </nav>

          <div className="header-right">
            <div className="user-actions">
              <button className="icon-btn"><i className="fa-solid fa-bell"></i></button>
              <a href="#" className="icon-btn"><i className="fa-solid fa-right-to-bracket"></i></a>
              <button className="sign-up-btn">Sign up</button>
            </div>
            <div className="search-box">
              <i className="fa-solid fa-search search-icon"></i>
              <input type="text" placeholder="Search" className="search-input" />
            </div>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <h1>Top Crypto Exchanges Ranked by Trust Score</h1>
          <p>
            As of today, we track 202 crypto exchanges with a total 24h trading volume of $188 Billion,
            a 6.35% change in the last 24 hours. Currently, the 3 largest cryptocurrency exchanges are
            Binance, Bybit, and MEXC. Total tracked crypto exchange reserves currently stands at $334 Billion.
          </p>
        </div>
      </section>

      <div className="tabs">
        <div className="container tab-container">
          <div className="tabs-left">
            <Link to="/crypto-exchanges" className="tab active">
              <i className="fa-solid fa-building-columns"></i> Crypto Exchanges
            </Link>
            <Link to="/decentralized-exchanges" className="tab">
              <i className="fa-solid fa-coins"></i> Decentralized Exchanges
            </Link>
            <Link to="/derivatives" className="tab">
              <i className="fa-solid fa-chart-line"></i> Derivatives
            </Link>
          </div>
          <div className="tabs-right">
            <div className="filter-dropdown">
              <button className="filter-btn">
                All Countries <i className="fa-solid fa-chevron-down"></i>
              </button>
            </div>
          </div>
        </div>
      </div>



      <footer className="footer">
        <div className="container">
        <table className="exchange-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Exchange</th>
                <th>Trust Score <i className="fa-solid fa-info-circle"></i></th>
                <th>24h Volume</th>
                <th>Last 7 Days</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" style={{textAlign: 'center', padding: '20px'}}>Loading...</td>
                </tr>
              ) : (
                exchanges.map((exchange, index) => (
                  <tr key={exchange.id}>
                    <td>{index + 1}</td>
                    <td className="exchange">
                      <img src={exchange.image} alt={exchange.name} width="24" height="24" />
                      <span className="exchange-name">{exchange.name}</span>
                      <span className="exchange-badge verified">✓</span>
                    </td>
                    <td><span className="trust-score green">{exchange.trust_score}/10</span></td>
                    <td className="volume">${exchange.trade_volume_24h_btc?.toLocaleString()}</td>
                    <td><img src="https://placehold.co/80x30/10b981/ffffff?text=📈" alt="Chart" className="chart-mini" /></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

        </div>
      </footer>
    </div>
  );
};

export default CryptoExchanges;
