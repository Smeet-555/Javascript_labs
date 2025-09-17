import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URLS } from '../services/coingeckoApi';
import "./research-insights.css";

const ResearchInsights = () => {
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
    <div className="research-insights-app">
      <div className="topbar" role="region">
        <div className="ri-container topbar_in">
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

      <header className="ri-header" role="banner">
        <div className="ri-container nav_in">
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

      <main className="ri-main-content">
        <section className="ri-hero">
          <div className="ri-container">
            <h1 className="ri-hero__title">Research Insights</h1>
            <p className="ri-hero__subtitle">In-depth analysis and market research reports on cryptocurrency trends</p>
          </div>
        </section>

        <section className="ri-toolbar">
          <div className="ri-container">
            <div className="ri-toolbar-row">
              <div className="ri-field">
                <label className="ri-field__label">Search Reports</label>
                <input type="text" className="ri-input" placeholder="Search research reports..." />
              </div>
              <div className="ri-field">
                <label className="ri-field__label">Report Type</label>
                <select className="ri-select">
                  <option>All Reports</option>
                  <option>Market Analysis</option>
                  <option>Technical Analysis</option>
                  <option>Fundamental Analysis</option>
                  <option>Trend Reports</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <section className="ri-table-section">
          <div className="ri-container">
            <div className="ri-table-wrap">
              <table className="ri-table">
                <thead>
                  <tr>
                    <th>Report Title</th>
                    <th>Type</th>
                    <th>Author</th>
                    <th>Pages</th>
                    <th>Published</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="5" style={{textAlign: 'center', padding: '20px'}}>Loading...</td>
                    </tr>
                  ) : (
                    categories.map((category, index) => (
                      <tr key={category.id}>
                        <td>{category.name} Market Research Report</td>
                        <td><span className={`ri-badge ri-badge--${index % 4 === 0 ? 'market' : index % 4 === 1 ? 'technical' : index % 4 === 2 ? 'fundamental' : 'trend'}`}>
                          {index % 4 === 0 ? 'Market Analysis' : index % 4 === 1 ? 'Technical' : index % 4 === 2 ? 'Fundamental' : 'Trend Report'}
                        </span></td>
                        <td>Research Team</td>
                        <td>{25 + index * 10}</td>
                        <td>Dec {15 - index}, 2024</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <p className="ri-note">Access professional-grade cryptocurrency research and market insights</p>
          </div>
        </section>
      </main>

      <footer className="ri-footer">
        <div className="ri-container">
          <div className="ri-footer-row">
            <p className="ri-copy">&copy; 2024 CoinGecko Clone. All rights reserved.</p>
            <nav className="ri-footnav">
              <ul className="ri-footnav__list">
                <li><Link to="#" className="ri-footnav__link">Privacy</Link></li>
                <li><Link to="#" className="ri-footnav__link">Terms</Link></li>
                <li><Link to="#" className="ri-footnav__link">Support</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResearchInsights;
