import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URLS } from '../services/coingeckoApi';

function Homepage() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URLS.COINS)
      .then(response => response.json())
      .then(data => {
        setCoins(data.slice(0, 3));
        setLoading(false);
      });
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div>
      {/* Topbar */}
      <div className="topbar" role="region">
        <div className="container topbar_in">
          <div className="stat">
            <span className="label">Coins:</span>
            <span className="value">16,849</span>
          </div>
          <div className="stat">
            <span className="label">Exchanges:</span>
            <span className="value">1,366</span>
          </div>
          <div className="stat">
            <span className="label">Market Cap:</span>
            <span className="value">$3.98T</span>
            <span className="pct pct-up">+1.1%</span>
          </div>
          <div className="stat hide-mobile">
            <span className="label">24h Vol:</span>
            <span className="value">$108.38B</span>
          </div>
          <div className="stat hide-mobile">
            <span className="label">Dominance:</span>
            <span className="value">BTC 56.3% • ETH 13.1%</span>
          </div>
          <div className="stat hide-mobile">
            <span className="label">
              <i className="fa-solid fa-fire"></i> Gas:
            </span>
            <span className="value">1,368 GWEI</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="navbar" role="banner">
        <div className="container nav_in">
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
              {/* Cryptocurrencies */}
              <li className="navItem navItem--dropdown dropd">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown('crypto');
                  }}
                  className="navLink navLink--crypto"
                >
                  Cryptocurrencies{' '}
                  <i className="fa-solid fa-caret-down" aria-hidden="true"></i>
                </a>
                {openDropdown === 'crypto' && (
                  <div className="dropdown" role="menu">
                    <Link to="/market-cap" className="dropdown-item">By Market Cap</Link>
                    <Link to="/categories" className="dropdown-item">Categories</Link>
                  </div>
                )}
              </li>

              {/* Exchanges */}
              <li className="navItem navItem--dropdown dropd">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown('exchanges');
                  }}
                  className="navLink navLink--exchanges"
                >
                  Exchanges <i className="fa-solid fa-caret-down"></i>
                </a>
                {openDropdown === 'exchanges' && (
                  <div className="dropdown" role="menu">
                    <Link to="/crypto-exchanges" className="dropdown-item">Crypto Exchanges</Link>
                    <Link to="/decentralized-exchanges" className="dropdown-item">Decentralized Exchanges</Link>
                  </div>
                )}
              </li>

              {/* NFT */}
              <li className="navItem navItem--dropdown dropd">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown('nft');
                  }}
                  className="navLink navLink--nft"
                >
                  NFT <i className="fa-solid fa-caret-down"></i>
                </a>
                {openDropdown === 'nft' && (
                  <div className="dropdown" role="menu">
                    <Link to="/nft-floor-price" className="dropdown-item">NFT Floor Price</Link>
                    <Link to="/nft-related-coins" className="dropdown-item">NFT Related Coins</Link>
                  </div>
                )}
              </li>

              {/* Learn */}
              <li className="navItem navItem--dropdown dropd">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown('learn');
                  }}
                  className="navLink navLink--learn"
                >
                  Learn <i className="fa-solid fa-caret-down"></i>
                </a>
                {openDropdown === 'learn' && (
                  <div className="dropdown" role="menu">
                    <Link to="/learn-crypto" className="dropdown-item">Learn Crypto</Link>
                    <Link to="/research-insights" className="dropdown-item">Research Insights</Link>
                  </div>
                )}
              </li>
            </ul>
          </nav>

          {/* Header Right */}
          <div className="header-right">
            <div className="user-actions">
              <button className="icon-btn">
                <i className="fa-solid fa-bell"></i>
              </button>
              <a href="#" className="icon-btn">
                <i className="fa-solid fa-right-to-bracket"></i>
              </a>
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
        <section className="hero">
          <div className="container">
            <div className="page-header-row">
              <h1 className="page-title">Cryptocurrency Prices by Market Cap</h1>
              <div className="highlights">
                <span>Highlights</span>
                <i className="fa-solid fa-toggle-on"></i>
              </div>
            </div>
            <p className="page-subtitle">
              The global crypto market cap is <strong className="mc-value">$3.98T</strong>, a{' '}
              <span className="pct pct-up">+1.1%</span> increase over the last day.
            </p>

            <div className="stats-cards-row">
              <div className="card">
                <div className="card-header">
                  <h3>$3,968,220,888,737</h3>
                  <p>
                    Market Cap <span className="pct pct-up">1.1%</span>
                  </p>
                </div>
                <div className="card-chart">
                  <i className="fa-solid fa-chart-line up-chart"></i>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h3>$108,367,774,311</h3>
                  <p>
                    24h Trading Volume <span className="pct pct-up">60.8%</span>
                  </p>
                </div>
                <div className="card-chart">
                  <i className="fa-solid fa-chart-line up-chart"></i>
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
                    <span className="trending-item">MYX Finance</span>
                    <span className="pct pct-up">+6.55%</span>
                  </li>
                  <li>
                    <span className="trending-item">OpenLedger</span>
                    <span className="pct pct-up">+0.48%</span>
                  </li>
                  <li>
                    <span className="trending-item">Notcoin</span>
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
                    <span className="trending-item">MYX Finance</span>
                    <span className="pct pct-up">+6.55%</span>
                  </li>
                  <li>
                    <span className="trending-item">Trusta AI</span>
                    <span className="pct pct-up">+0.273%</span>
                  </li>
                  <li>
                    <span className="trending-item">Codatta</span>
                    <span className="pct pct-up">+0.01321%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="coin-table">
          <div className="container">
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>1h</th>
                    <th>24h</th>
                    <th>7d</th>
                    <th>Market Cap</th>
                    <th>24h Volume</th>
                    <th>Circulating Supply</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="9" style={{textAlign: 'center', padding: '20px'}}>Loading...</td>
                    </tr>
                  ) : (
                    coins.map((coin, index) => (
                      <tr key={coin.id}>
                        <td>{coin.market_cap_rank}</td>
                        <td>
                          <div className="coin">
                            <img src={coin.image} alt={`${coin.name} logo`} width="32" height="32" />
                            <span>
                              {coin.name} <small>{coin.symbol.toUpperCase()}</small>
                            </span>
                          </div>
                        </td>
                        <td>${coin.current_price?.toLocaleString()}</td>
                        <td className={coin.price_change_percentage_1h_in_currency > 0 ? 'up pct' : 'down pct'}>
                          {coin.price_change_percentage_1h_in_currency?.toFixed(2)}%
                        </td>
                        <td className={coin.price_change_percentage_24h > 0 ? 'up pct' : 'down pct'}>
                          {coin.price_change_percentage_24h?.toFixed(2)}%
                        </td>
                        <td className={coin.price_change_percentage_7d_in_currency > 0 ? 'up pct' : 'down pct'}>
                          {coin.price_change_percentage_7d_in_currency?.toFixed(2)}%
                        </td>
                        <td>${coin.market_cap?.toLocaleString()}</td>
                        <td>${coin.total_volume?.toLocaleString()}</td>
                        <td>{coin.circulating_supply?.toLocaleString()} {coin.symbol.toUpperCase()}</td>
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
        <div className="container footer-row">
          <p className="footer-copy">© 2025 CoinGecko Clone | Built for practice</p>
        </div>
      </footer>
    </div>
  );
};


export default Homepage;
