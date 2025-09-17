import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URLS } from '../services/coingeckoApi';
import "./decentralized-exchanges.css";

const DecentralizedExchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URLS.EXCHANGES)
      .then(response => response.json())
      .then(data => {
        setExchanges(data.slice(0, 5));
        setLoading(false);
      });
  }, []);

  return (
    <div className="decentralized-exchanges-app">
      <div className="topbar" role="region">
        <div className="de-container topbar_in">
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

      <header className="de-header" role="banner">
        <div className="de-container nav_in">
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
                <Link to="/market-cap" className="navLink navLink--crypto" aria-haspopup="true">
                  Cryptocurrencies <i className="fa-solid fa-caret-down" aria-hidden="true"></i>
                </Link>
                <div className="dropdown" role="menu">
                  <Link to="/market-cap" className="dropdown__link dropdown-item">
                    By Market Cap
                  </Link>
                  <Link to="/categories" className="dropdown__link dropdown-item">
                    Categories
                  </Link>
                </div>
              </li>
              <li className="navItem navItem--dropdown dropd" tabIndex="0">
                <Link
                  to="/decentralized-exchanges"
                  className="navLink navLink--exchanges is-current"
                  aria-haspopup="true"
                  aria-current="page"
                >
                  Exchanges <i className="fa-solid fa-caret-down" aria-hidden="true"></i>
                </Link>
                <div className="dropdown" role="menu">
                  <Link to="/crypto-exchanges" className="dropdown__link dropdown-item">
                    Crypto Exchanges
                  </Link>
                  <Link to="/decentralized-exchanges" className="dropdown__link dropdown-item">
                    Decentralized Exchanges
                  </Link>
                </div>
              </li>
              <li className="navItem navItem--dropdown dropd" tabIndex="0">
                <Link
                  to="/nft-floor-price"
                  className="navLink navLink--nft"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  NFT <i className="fa-solid fa-caret-down" aria-hidden="true"></i>
                </Link>
                <div className="dropdown" role="menu">
                  <Link to="/nft-floor-price" className="dropdown__link dropdown-item">
                    NFT Floor Price
                  </Link>
                  <Link to="/nft-related-coins" className="dropdown__link dropdown-item">
                    NFT Related Coins
                  </Link>
                </div>
              </li>
              <li className="navItem navItem--dropdown dropd" tabIndex="0">
                <Link
                  to="/learn-crypto"
                  className="navLink navLink--learn"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Learn <i className="fa-solid fa-caret-down" aria-hidden="true"></i>
                </Link>
                <div className="dropdown" role="menu">
                  <Link to="/learn-crypto" className="dropdown__link dropdown-item">
                    Learn Crypto
                  </Link>
                  <Link to="/research-insights" className="dropdown__link dropdown-item">
                    Research Insights
                  </Link>
                </div>
              </li>
            </ul>
          </nav>

          <div className="header-right">
            <div className="user-actions">
              <button className="icon-btn">
                <i className="fa-solid fa-bell"></i>
              </button>
              <Link to="/login" className="icon-btn">
                <i className="fa-solid fa-right-to-bracket"></i>
              </Link>
              <button className="sign-up-btn">Sign up</button>
            </div>
            <div className="search-box">
              <i className="fa-solid fa-search search-icon"></i>
              <input type="text" placeholder="Search" className="search-input" />
            </div>
          </div>
        </div>
      </header>

      <main className="de-main-content">
        <section className="de-hero">
          <div className="de-container">
            <h1 className="de-hero__title">
              Top Decentralized Exchanges Ranked by 24H Trading Volume
            </h1>
            <p className="de-hero__subtitle">
              We track 1,051 decentralized crypto exchanges with a total 24h trading volume of $11.7
              Billion, a <span className="pct pct-down">-4.52%</span> change in the last 24 hours.
            </p>

            <div className="stats-cards-row">
              <div className="card">
                <div className="card-header">
                  <h3>$11,716,288,368</h3>
                  <p>
                    DEX 24h Trading Volume <span className="pct pct-down">-4.5%</span>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h3>7.1%</h3>
                  <p>DeFi Volume Dominance</p>
                </div>
              </div>
              <div className="card trending-card">
                <div className="card-header">
                  <h3>
                    <i className="fa-solid fa-fire"></i> Trending
                  </h3>
                  <a href="#">
                    View more <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
                <ul className="trending-list">
                  <li>
                    <span className="trending-item">DogeCoin</span>
                    <span className="pct pct-up">+6.55%</span>
                  </li>
                  <li>
                    <span className="trending-item">Uniswap</span>
                    <span className="pct pct-up">+0.48%</span>
                  </li>
                  <li>
                    <span className="trending-item">Shiba Inu</span>
                    <span className="pct pct-up">+0.001974%</span>
                  </li>
                </ul>
              </div>
              <div className="card trending-card">
                <div className="card-header">
                  <h3>Top Gainers</h3>
                  <a href="#">
                    View more <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
                <ul className="trending-list">
                  <li>
                    <span className="trending-item">DogeCoin</span>
                    <span className="pct pct-up">+6.55%</span>
                  </li>
                  <li>
                    <span className="trending-item">Bitcoin</span>
                    <span className="pct pct-up">+0.273%</span>
                  </li>
                  <li>
                    <span className="trending-item">Ethereum</span>
                    <span className="pct pct-up">+0.01321%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        <div className="de-toolbar">
          <div className="de-container">
            <div className="de-toolbar-row">
              <Link to="/crypto-exchanges" className="tab">
                Crypto Exchanges
              </Link>
              <Link to="/decentralized-exchanges" className="tab is-current" aria-current="page">
                Decentralized Exchanges
              </Link>
              <div className="tab-filter">
                <select className="de-select">
                  <option>All Chains</option>
                  <option>Ethereum</option>
                  <option>BSC</option>
                  <option>Solana</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <section className="de-table-section">
          <div className="de-container">
            <div className="de-table-wrap">
              <table className="de-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Exchange</th>
                    <th>24h Volume</th>
                    <th>% Market Share by Volume</th>
                    <th># Coins / # Pairs</th>
                    <th>Most Traded Pair</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="6" style={{textAlign: 'center', padding: '20px'}}>Loading...</td>
                    </tr>
                  ) : (
                    exchanges.map((exchange, index) => (
                      <tr key={exchange.id}>
                        <td>{index + 1}</td>
                        <td className="exchange">
                          <img src={exchange.image} alt={exchange.name} width="32" height="32" />
                          {exchange.name}
                        </td>
                        <td>${exchange.trade_volume_24h_btc?.toLocaleString()}</td>
                        <td>{((index + 1) * 5).toFixed(1)}%</td>
                        <td>N/A</td>
                        <td>
                          Trading Pair
                          <br />
                          <small>$1,000,000</small>
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

      <footer className="de-footer">
        <div className="de-container">
          <div className="de-footer-row">
            <p className="de-copy">&copy; 2025 CoinGecko Clone. All rights reserved.</p>
            <nav className="de-footnav">
              <ul className="de-footnav__list">
                <li>
                  <Link to="/" className="de-footnav__link">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#" className="de-footnav__link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="de-footnav__link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DecentralizedExchanges;
