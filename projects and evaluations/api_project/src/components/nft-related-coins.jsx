import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URLS } from '../services/coingeckoApi';
import "./nft-related-coins.css";

const NFTRelatedCoins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URLS.NFT_COINS)
      .then(response => response.json())
      .then(data => {
        setCoins(data.slice(0, 7));
        setLoading(false);
      });
  }, []);

  return (
    <div className="nft-related-coins-app">
      <div className="topbar" role="region">
        <div className="nrc-container topbar_in">
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

      <header className="nrc-header" role="banner">
        <div className="nrc-container nav_in">
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
                <Link to="#" className="navLink navLink--nft is-current" aria-haspopup="true" aria-current="page">
                  NFT <i className="fa-solid fa-caret-down" aria-hidden="true"></i>
                </Link>
                <div className="dropdown" role="menu">
                  <Link to="/nft-floor-price" className="dropdown__link dropdown-item">NFT Floor Price</Link>
                  <Link to="/nft-related-coins" className="dropdown__link dropdown-item">NFT Related Coins</Link>
                </div>
              </li>
              <li className="navItem navItem--dropdown dropd" tabIndex="0">
                <Link to="#" className="navLink navLink--learn" aria-haspopup="true" aria-expanded="false">
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

      <main className="nrc-main-content">
        <div className="nrc-hero">
          <div className="nrc-container">
            <h1 className="nrc-hero__title">NFT Related Coins</h1>
            <p className="nrc-hero__subtitle">Cryptocurrencies powering the NFT ecosystem</p>
          </div>
        </div>

        <div className="nrc-toolbar">
          <div className="nrc-container">
            <div className="nrc-toolbar-row">
              <div className="nrc-field">
                <label className="nrc-field__label">Search Coins</label>
                <input type="text" className="nrc-input" placeholder="Search NFT coins..." />
              </div>
              <div className="nrc-field">
                <label className="nrc-field__label">Category</label>
                <select className="nrc-select">
                  <option>All NFT Coins</option>
                  <option>Gaming</option>
                  <option>Metaverse</option>
                  <option>Art & Collectibles</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="nrc-table-section">
          <div className="nrc-container">
            <div className="nrc-table-wrap">
              <table className="nrc-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>24h Change</th>
                    <th>Market Cap</th>
                    <th>Volume (24h)</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="7" style={{textAlign: 'center', padding: '20px'}}>Loading...</td>
                    </tr>
                  ) : (
                    coins.map((coin, index) => (
                      <tr key={coin.id}>
                        <td>{index + 1}</td>
                        <td className="nrc-coin">
                          <img src={coin.image} alt={coin.symbol} width="32" height="32" />
                          <span>{coin.name} <small>{coin.symbol.toUpperCase()}</small></span>
                        </td>
                        <td className="nrc-price">${coin.current_price?.toFixed(4)}</td>
                        <td className={`nrc-change ${coin.price_change_percentage_24h > 0 ? 'nrc-positive' : 'nrc-negative'}`}>
                          {coin.price_change_percentage_24h?.toFixed(1)}%
                        </td>
                        <td>${(coin.market_cap / 1e9).toFixed(1)}B</td>
                        <td>${(coin.total_volume / 1e6).toFixed(1)}M</td>
                        <td><span className="nrc-badge nrc-badge--gaming">NFT</span></td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <footer className="nrc-footer">
        <div className="nrc-container">
          <div className="nrc-footer-row">
            <p className="nrc-copy">&copy; 2024 CoinGecko Clone | NFT Related Coins</p>
            <nav className="nrc-footnav">
              <ul className="nrc-footnav__list">
                <li><Link to="/" className="nrc-footnav__link">Home</Link></li>
                <li><Link to="#" className="nrc-footnav__link">About</Link></li>
                <li><Link to="#" className="nrc-footnav__link">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NFTRelatedCoins;
