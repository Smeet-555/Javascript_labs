import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/homepage'
import CryptoExchanges from './components/crypto-exchanges'
import DecentralizedExchanges from './components/decentralized-exchanges'
import Categories from './components/categories'
import MarketCap from './components/market-cap'
import NFTFloorPrice from './components/nft-floor-price'
import NFTRelatedCoins from './components/nft-related-coins'
import LearnCrypto from './components/learn-crypto'
import ResearchInsights from './components/research-insights'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/market-cap" element={<MarketCap />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/crypto-exchanges" element={<CryptoExchanges />} />
          <Route path="/decentralized-exchanges" element={<DecentralizedExchanges />} />
          <Route path="/nft-floor-price" element={<NFTFloorPrice />} />
          <Route path="/nft-related-coins" element={<NFTRelatedCoins />} />
          <Route path="/learn-crypto" element={<LearnCrypto />} />
          <Route path="/research-insights" element={<ResearchInsights />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
