import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URLS } from '../services/coingeckoApi';
import './categories.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URLS.CATEGORIES)
      .then(response => response.json())
      .then(data => {
        setCategories(data.slice(0, 5));
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="topbar" role="region">
        <div className="container topbar_in">
          <div className="stat">
            <span className="label">Coins:</span> <span className="value">16,849</span>
          </div>
          <div className="stat">
            <span className="label">Exchanges:</span> <span className="value">1,366</span>
          </div>
          <div className="stat">
            <span className="label">Market Cap:</span> <span className="value">$3.98T</span> 
            <span className="pct pct-up">+1.1%</span>
          </div>
          <div className="stat hide">
            <span className="label">24h Vol:</span> <span className="value">$108.38B</span>
          </div>
          <div className="stat hide">
            <span className="label">Dominance:</span> <span className="value">BTC 56.3% • ETH 13.1%</span>
          </div>
        </div>
      </div>

      <header className="navbar" role="banner">
        <div className="container nav_in">
          <Link to="/" className="brand" aria-label="CoinGecko Home">
            <div className="logo-section">
              <img src="https://placehold.co/32x32/ffffff/000000?text=CG" alt="CoinGecko" className="main-logo" />
            </div>
            <span className="brand__name">coingecko</span>
          </Link>

          <nav className="nav" role="navigation" aria-label="Main">
            <ul className="navList">
              <li className="navItem navItem--dropdown dropd">
                <a href="#" className="navLink navLink--crypto" aria-haspopup="true" aria-expanded="false">
                  Cryptocurrencies <i className="fa-solid fa-caret-down" aria-hidden="true"></i>
                </a>
                <div className="dropdown" role="menu">
                  <Link to="/market-cap" className="dropdown__link dropdown-item">By Market Cap</Link>
                  <Link to="/categories" className="dropdown__link dropdown-item">Categories</Link>
                </div>
              </li>
              <li className="navItem navItem--dropdown dropd">
                <a href="#" className="navLink navLink--exchanges" aria-haspopup="true" aria-expanded="false">
                  Exchanges <i className="fa-solid fa-caret-down" aria-hidden="true"></i>
                </a>
                <div className="dropdown" role="menu">
                  <Link to="/crypto-exchanges" className="dropdown__link dropdown-item">Crypto Exchanges</Link>
                  <Link to="/decentralized-exchanges" className="dropdown__link dropdown-item">Decentralized Exchanges</Link>
                </div>
              </li>
              <li className="navItem navItem--dropdown dropd">
                <a href="#" className="navLink navLink--nft" aria-haspopup="true" aria-expanded="false">
                  NFT <i className="fa-solid fa-caret-down" aria-hidden="true"></i>
                </a>
                <div className="dropdown" role="menu">
                  <Link to="/nft-floor-price" className="dropdown__link dropdown-item">NFT Floor Price</Link>
                  <Link to="/nft-related-coins" className="dropdown__link dropdown-item">NFT Related Coins</Link>
                </div>
              </li>
              <li className="navItem navItem--dropdown dropd">
                <a href="#" className="navLink navLink--learn" aria-haspopup="true" aria-expanded="false">
                  Learn <i className="fa-solid fa-caret-down" aria-hidden="true"></i>
                </a>
                <div className="dropdown" role="menu">
                  <Link to="/learn-crypto" className="dropdown__link dropdown-item">Learn Crypto</Link>
                  <Link to="/research-insights" className="dropdown__link dropdown-item">Research Insights</Link>
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
      </header>

      <main className="main">
        <section className="mainSec">
          <div className="container">
            <div className="page-header-row">
              <h1 className="page-title">Top Crypto Categories By Market Cap</h1>
              <div className="highlights">
                <span>Highlights</span>
                <i className="fa-solid fa-toggle-on"></i>
              </div>
            </div>
            <p className="page-subtitle">
              This list of cryptocurrency categories ranks the largest sectors by market cap. 
              Note: Some cryptos may overlap across multiple categories.
            </p>
            <div className="stats-cards-row">
              <div className="card following-card">
                <div className="card-header">
                  <h3><i className="fa-solid fa-bookmark"></i> Following</h3>
                  <a href="#">Login <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="following-content">
                  <p>Login to start following categories</p>
                </div>
              </div>
              <div className="card trending-card">
                <div className="card-header">
                  <h3>Trending</h3>
                  <a href="#">View more <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <ul className="trending-list">
                  <li>
                    <span className="trending-item">Optimism Superchain Ecos...</span>
                    <span className="pct pct-up">+17.4%</span>
                  </li>
                  <li>
                    <span className="trending-item">Internet of Things (IOT)</span>
                    <span className="pct pct-up">+40.7%</span>
                  </li>
                  <li>
                    <span className="trending-item">Binance HOODler Airdrops</span>
                    <span className="pct pct-up">+12.4%</span>
                  </li>
                </ul>
              </div>
              <div className="card trending-card">
                <div className="card-header">
                  <h3>Top Gainers</h3>
                  <a href="#">View more <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <ul className="trending-list">
                  <li>
                    <span className="trending-item">Optimism Superchain Ecos...</span>
                    <span className="pct pct-up">+407.7%</span>
                  </li>
                  <li>
                    <span className="trending-item">Internet of Things (IOT)</span>
                    <span className="pct pct-up">+95.7%</span>
                  </li>
                  <li>
                    <span className="trending-item">Trading Card RWA Platform</span>
                    <span className="pct pct-up">+38.4%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="toolbar">
          <div className="container toolIn">
            <div className="left-toolbar">
              <span className="chip-icon-group">
                <i className="fa-solid fa-sliders"></i>
                <span className="chip active">All</span>
              </span>
              <span className="chip-icon-group">
                <i className="fa-solid fa-lightbulb"></i>
                <span className="chip">Highlights</span>
              </span>
              <span className="chip-icon-group">
                <i className="fa-solid fa-list-ul"></i>
                <span className="chip active">Categories</span>
              </span>
              <span className="chip-icon-group">
                <i className="fa-solid fa-wifi"></i>
                <span className="chip">Internet of Things (IOT)</span>
              </span>
              <span className="chip-icon-group">
                <i className="fa-solid fa-chart-bar"></i>
                <span className="chip">Binance Wallet IDO</span>
              </span>
              <span className="chip-icon-group">
                <i className="fa-solid fa-star"></i>
                <span className="chip">Trending Card RWA Platform</span>
              </span>
              <span className="chip-icon-group">
                <i className="fa-solid fa-deaf"></i>
                <span className="chip">Decentralized Identifier (DID)</span>
              </span>
              <span className="chip-icon-group">
                <i className="fa-solid fa-democrat"></i>
                <span className="chip">Trump-Affiliated</span>
              </span>
            </div>
            <div className="legend">
              <span className="dot up"></span> Market Cap
            </div>
          </div>
        </section>

        <section className="table-section">
          <div className="container">
            <div className="table-container" role="region" tabIndex="0">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th><i className="far fa-star"></i></th>
                    <th>Category</th>
                    <th>Top Gainers</th>
                    <th>1h</th>
                    <th>24h</th>
                    <th>7d</th>
                    <th>Market Cap</th>
                    <th>24h Volume</th>
                    <th># of coins</th>
                    <th>Last 7 Days</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="11" style={{textAlign: 'center', padding: '20px'}}>Loading...</td>
                    </tr>
                  ) : (
                    categories.map((category, index) => (
                      <tr key={category.id}>
                        <td>{index + 1}</td>
                        <td><i className="far fa-star"></i></td>
                        <td className="cell-name">
                          <div className="name">
                            <div className="avatar" style={{background: '#4A90E2', color: 'white'}}>
                              {category.name.substring(0, 2).toUpperCase()}
                            </div>
                            <div>
                              <div className="nameTitle">{category.name}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="top-gainers-img">
                            <img src="https://placehold.co/32x32/ffffff/000000?text=C" alt="Category" />
                          </div>
                        </td>
                        <td><span className="pct pct-up">+0.2%</span></td>
                        <td><span className={category.market_cap_change_24h > 0 ? 'pct pct-up' : 'pct pct-down'}>
                          {category.market_cap_change_24h?.toFixed(1)}%
                        </span></td>
                        <td><span className="pct pct-up">+2.2%</span></td>
                        <td>${category.market_cap?.toLocaleString()}</td>
                        <td>${category.volume_24h?.toLocaleString()}</td>
                        <td>{category.content || 'N/A'}</td>
                        <td>
                          <img src="https://placehold.co/100x30/ffffff/000000?text=chart" alt="Chart" className="sparkline-chart" />
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
        <div className="container footerIn">
          <p>© 2025 CoinGecko Clone</p>
          <nav aria-label="Footer">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Categories;
