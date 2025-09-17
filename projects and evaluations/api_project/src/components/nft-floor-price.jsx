import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URLS } from '../services/coingeckoApi';
import "./nft-floor-price.css";

const NFTFloorPrice = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URLS.NFT_COINS)
      .then(response => response.json())
      .then(data => {
        setNfts(data.slice(0, 5));
        setLoading(false);
      });
  }, []);

  return (
    <div className="nft-floor-price-app">
      <div className="topbar" role="region">
        <div className="nft-container topbar_in">
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

      <div className="nft-header">
        <div className="nft-container nav_in">
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
                  to="/crypto-exchanges"
                  className="navLink navLink--exchanges"
                  aria-haspopup="true"
                  aria-expanded="false"
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
                  className="navLink navLink--nft is-current"
                  aria-haspopup="true"
                  aria-current="page"
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
      </div>


      <div className="nft-hero">
        <div className="nft-container">
          <div className="page-header-row">
            <h1 className="page-title">Top NFT Collection Prices Ranked by Market Cap</h1>
            <div className="highlights">
              <span>Highlights</span>
              <i className="fa-solid fa-toggle-on"></i>
            </div>
          </div>
          <p className="page-subtitle">
            The global NFT market cap today is{" "}
            <strong className="mc-value">$5.9 Billion</strong>, a{" "}
            <span className="pct pct-up">+0.7%</span> change in the last 24 hours.
          </p>

          <div className="stats-cards-row">
            <div className="card">
              <div className="card-header">
                <h3>$5,898,820,455</h3>
                <p>
                  Market Cap <span className="pct pct-up">0.7%</span>
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>$8,077,742</h3>
                <p>
                  24h Trading Volume <span className="pct pct-up">60.8%</span>
                </p>
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
                  <span className="trending-item">rektguy</span>
                  <span className="pct pct-up">+0.53% ETH</span>
                </li>
                <li>
                  <span className="trending-item">Good Vibes Club</span>
                  <span className="pct pct-up">+0.33% ETH</span>
                </li>
                <li>
                  <span className="trending-item">Checks - VV Edition</span>
                  <span className="pct pct-up">+0.31% ETH</span>
                </li>
              </ul>
            </div>
            <div className="card trending-card">
              <div className="card-header">
                <h3>Top NFTs Dominance</h3>
                <a href="#">
                  View more <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
              <ul className="trending-list">
                <li>
                  <span className="trending-item">CryptoPunks</span>
                  <span>36%</span>
                </li>
                <li>
                  <span className="trending-item">Bored Ape Yacht Club</span>
                  <span>7%</span>
                </li>
                <li>
                  <span className="trending-item">Pudgy Penguins</span>
                  <span>6%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="nft-toolbar">
        <div className="nft-container">
          <div className="nft-toolbar-row">
            <span className="chip-icon-group">
              <i className="fa-solid fa-sliders"></i>
              <span className="chip active">Floor Price</span>
            </span>
            <span className="chip-icon-group">
              <i className="fa-solid fa-star"></i>
              <span className="chip">Watchlist</span>
            </span>
            <span className="chip-icon-group">
              <i className="fa-solid fa-chart-line"></i>
              <span className="chip">Global Chart</span>
            </span>
            <span className="chip-icon-group">
              <i className="fa-solid fa-coins"></i>
              <span className="chip">Related Coins</span>
            </span>
          </div>
        </div>
      </div>

      <div className="nft-main">
        <div className="nft-container">
          <div className="nft-table-wrap">
            <table className="nft-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>
                    <i className="far fa-star"></i>
                  </th>
                  <th>NFT</th>
                  <th></th>
                  <th>Floor Price</th>
                  <th>24h</th>
                  <th>7d</th>
                  <th>30d</th>
                  <th>Last 7 Days</th>
                  <th>Market Cap</th>
                  <th>24h Volume</th>
                  <th>24h Sales</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="12" style={{textAlign: 'center', padding: '20px'}}>Loading...</td>
                  </tr>
                ) : (
                  nfts.map((nft, index) => (
                    <tr key={nft.id}>
                      <td>{index + 1}</td>
                      <td>
                        <i className="far fa-star"></i>
                      </td>
                      <td className="nft-collection">
                        <img src={nft.image} alt={nft.name} width="32" height="32" />
                        <span>{nft.name}</span>
                      </td>
                      <td>
                        <button className="buy-btn">Buy</button>
                      </td>
                      <td className="nft-price">
                        {(nft.current_price / 3000).toFixed(2)} ETH
                        <br />
                        <small>${nft.current_price?.toLocaleString()}</small>
                      </td>
                      <td className={`nft-change pct ${nft.price_change_percentage_24h > 0 ? 'pct-up' : 'pct-down'}`}>
                        {nft.price_change_percentage_24h?.toFixed(1)}%
                      </td>
                      <td className="nft-change pct pct-up">+1.2%</td>
                      <td className="nft-change pct pct-down">-5.1%</td>
                      <td></td>
                      <td>
                        ${nft.market_cap?.toLocaleString()}
                        <br />
                        <small>{(nft.market_cap / 3000).toLocaleString()} ETH</small>
                      </td>
                      <td>
                        {(nft.total_volume / 3000).toFixed(2)} ETH
                        <br />
                        <small>${nft.total_volume?.toLocaleString()}</small>
                      </td>
                      <td>{Math.floor(Math.random() * 20) + 1}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <footer className="nft-footer">
        <div className="nft-container">
          <div className="nft-footer-row">
            <p className="nft-copy">&copy; 2025 CoinGecko Clone | NFT Floor Price Tracker</p>
            <nav className="nft-footnav">
              <ul className="nft-footnav__list">
                <li>
                  <Link to="/" className="nft-footnav__link">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#" className="nft-footnav__link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="nft-footnav__link">
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

export default NFTFloorPrice;
