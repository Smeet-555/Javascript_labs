import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URLS } from '../services/coingeckoApi';
import "./learn-crypto.css";

const LearnCrypto = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URLS.COINS_MARKETS)
      .then(response => response.json())
      .then(data => {
        setCoins(data.slice(0, 5));
        setLoading(false);
      });
  }, []);

  return (
    <div className="learn-crypto-app">
      <div className="topbar" role="region">
        <div className="lc-container topbar_in">
          <div className="stat">
            <span className="label">Coins:</span> <span className="value">16,849</span>
          </div>
          <div className="stat">
            <span className="label">Exchanges:</span> <span className="value">1,366</span>
          </div>
          <div className="stat">
            <span className="label">Market Cap:</span> <span className="value">$3.98T</span>{" "}
            <span className="pct pct-up">+1.1%</span>
          </div>
          <div className="stat hide-mobile">
            <span className="label">24h Vol:</span> <span className="value">$108.38B</span>
          </div>
          <div className="stat hide-mobile">
            <span className="label">Dominance:</span>{" "}
            <span className="value">BTC 56.3% • ETH 13.1%</span>
          </div>
          <div className="stat hide-mobile">
            <span className="label">
              <i className="fa-solid fa-fire"></i> Gas:
            </span>{" "}
            <span className="value">1,368 GWEI</span>
          </div>
        </div>
      </div>

      <header className="lc-header" role="banner">
        <div className="lc-container nav_in">
          <Link to="/" className="brand" aria-label="CoinGecko Home">
            <img
              src="https://placehold.co/32x32/ffffff/000000?text=CG"
              alt="CoinGecko"
              className="main-logo"
            />
            <span className="brand__name">coingecko</span>
          </Link>

          <nav className="nav" role="navigation" aria-label="Main">
            <ul className="navList">
              <li className="navItem navItem--dropdown dropd" tabIndex="0">
                <Link to="#" className="navLink navLink--crypto" aria-haspopup="true" aria-expanded="false">
                  Cryptocurrencies <i className="fa-solid fa-caret-down" aria-hidden="true"></i>
                </Link>
                <div className="dropdown" role="menu">
                  <Link to="/market-cap" className="dropdown__link dropdown-item">By Market Cap</Link>
                  <Link to="/categories" className="dropdown__link dropdown-item">Categories</Link>
                </div>
              </li>
              <li className="navItem navItem--dropdown dropd" tabIndex="0">
                <Link to="#" className="navLink navLink--exchanges" aria-haspopup="true" aria-expanded="false">
                  Exchanges <i className="fa-solid fa-caret-down" aria-hidden="true"></i>
                </Link>
                <div className="dropdown" role="menu">
                  <Link to="/crypto-exchanges" className="dropdown__link dropdown-item">Crypto Exchanges</Link>
                  <Link to="/decentralized-exchanges" className="dropdown__link dropdown-item">Decentralized Exchanges</Link>
                </div>
              </li>
              <li className="navItem navItem--dropdown dropd" tabIndex="0">
                <Link to="#" className="navLink navLink--nft" aria-haspopup="true" aria-expanded="false">
                  NFT <i className="fa-solid fa-caret-down" aria-hidden="true"></i>
                </Link>
                <div className="dropdown" role="menu">
                  <Link to="/nft-floor-price" className="dropdown__link dropdown-item">NFT Floor Price</Link>
                  <Link to="/nft-related-coins" className="dropdown__link dropdown-item">NFT Related Coins</Link>
                </div>
              </li>
              <li className="navItem navItem--dropdown dropd" tabIndex="0">
                <Link to="#" className="navLink navLink--learn is-current" aria-haspopup="true" aria-current="page">
                  Learn <i className="fa-solid fa-caret-down" aria-hidden="true"></i>
                </Link>
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
              <Link to="#" className="icon-btn"><i className="fa-solid fa-right-to-bracket"></i></Link>
              <button className="sign-up-btn">Sign up</button>
            </div>
            <div className="search-box">
              <i className="fa-solid fa-search search-icon"></i>
              <input type="text" placeholder="Search" className="search-input" />
            </div>
          </div>
        </div>
      </header>

      <main className="lc-main-content">
        <section className="lc-hero">
          <div className="lc-container">
            <h1 className="lc-hero__title">Learn Crypto</h1>
            <p className="lc-hero__subtitle">Educational resources and guides for cryptocurrency beginners and experts</p>
          </div>
        </section>

        <section className="lc-toolbar">
          <div className="lc-container">
            <div className="lc-toolbar-row">
              <div className="lc-field">
                <label className="lc-field__label">Search Articles</label>
                <input type="text" className="lc-input" placeholder="Search crypto guides..." />
              </div>
              <div className="lc-field">
                <label className="lc-field__label">Category</label>
                <select className="lc-select">
                  <option>All Categories</option>
                  <option>Beginner</option>
                  <option>Advanced</option>
                  <option>Trading</option>
                  <option>DeFi</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <section className="lc-table-section">
          <div className="lc-container">
            <div className="lc-table-wrap">
              <table className="lc-table">
                <thead>
                  <tr>
                    <th>Article</th>
                    <th>Category</th>
                    <th>Difficulty</th>
                    <th>Reading Time</th>
                    <th>Published</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="5" style={{textAlign: 'center', padding: '20px'}}>Loading...</td>
                    </tr>
                  ) : (
                    coins.map((coin, index) => (
                      <tr key={coin.id}>
                        <td>Learn About {coin.name}</td>
                        <td><span className={`lc-badge lc-badge--${index % 2 === 0 ? 'beginner' : 'advanced'}`}>
                          {index % 2 === 0 ? 'Beginner' : 'Advanced'}
                        </span></td>
                        <td>{index % 3 === 0 ? 'Easy' : index % 3 === 1 ? 'Medium' : 'Hard'}</td>
                        <td>{5 + index * 2} min</td>
                        <td>Dec {15 - index}, 2024</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <p className="lc-note">Browse our comprehensive library of cryptocurrency educational content</p>
          </div>
        </section>
      </main>

      <footer className="lc-footer">
        <div className="lc-container">
          <div className="lc-footer-row">
            <p className="lc-copy">&copy; 2024 CoinGecko Clone. All rights reserved.</p>
            <nav className="lc-footnav">
              <ul className="lc-footnav__list">
                <li><Link to="#" className="lc-footnav__link">Privacy</Link></li>
                <li><Link to="#" className="lc-footnav__link">Terms</Link></li>
                <li><Link to="#" className="lc-footnav__link">Support</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LearnCrypto;
