"use client"
import React, { useState, useRef, useEffect } from 'react'
import { Building2, TrendingUp } from 'lucide-react'

// Mock company data
const mockCompanies = [
  { id: 1, name: "NVIDIA Corporation", symbol: "NVDA", sector: "Technology" },
  { id: 2, name: "Apple Inc.", symbol: "AAPL", sector: "Technology" },
  { id: 3, name: "Microsoft Corporation", symbol: "MSFT", sector: "Technology" },
  { id: 4, name: "Amazon.com Inc.", symbol: "AMZN", sector: "E-commerce" },
  { id: 5, name: "Tesla Inc.", symbol: "TSLA", sector: "Automotive" },
  { id: 6, name: "Alphabet Inc.", symbol: "GOOGL", sector: "Technology" },
  { id: 7, name: "Meta Platforms Inc.", symbol: "META", sector: "Technology" },
  { id: 8, name: "Netflix Inc.", symbol: "NFLX", sector: "Entertainment" },
  { id: 9, name: "Advanced Micro Devices", symbol: "AMD", sector: "Technology" },
  { id: 10, name: "Intel Corporation", symbol: "INTC", sector: "Technology" },
  { id: 11, name: "Salesforce Inc.", symbol: "CRM", sector: "Technology" },
  { id: 12, name: "Adobe Inc.", symbol: "ADBE", sector: "Technology" },
  { id: 13, name: "PayPal Holdings", symbol: "PYPL", sector: "Financial Services" },
  { id: 14, name: "Zoom Video Communications", symbol: "ZM", sector: "Technology" },
  { id: 15, name: "Shopify Inc.", symbol: "SHOP", sector: "E-commerce" },
  { id: 16, name: "Square Inc.", symbol: "SQ", sector: "Financial Services" },
  { id: 17, name: "Twitter Inc.", symbol: "TWTR", sector: "Technology" },
  { id: 18, name: "Uber Technologies", symbol: "UBER", sector: "Transportation" },
  { id: 19, name: "Airbnb Inc.", symbol: "ABNB", sector: "Travel" },
  { id: 20, name: "Coinbase Global", symbol: "COIN", sector: "Cryptocurrency" }
]

function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [filteredCompanies, setFilteredCompanies] = useState([])
  const searchRef = useRef(null)
  const inputRef = useRef(null)

  // Filter companies based on search term
  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = mockCompanies.filter(company => 
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredCompanies(filtered.slice(0, 8)) // Limit to 8 suggestions
      setIsOpen(true)
    } else {
      setFilteredCompanies([])
      setIsOpen(false)
    }
  }, [searchTerm])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
    setSelectedCompany(null) // Clear selection when user types
  }

  const handleCompanySelect = (company) => {
    setSelectedCompany(company)
    setSearchTerm(company.name)
    setIsOpen(false)
    console.log('Selected company:', company)
  }

  const handleInputFocus = () => {
    if (searchTerm.length > 0) {
      setIsOpen(true)
    }
  }

  const clearSearch = () => {
    setSearchTerm('')
    setSelectedCompany(null)
    setIsOpen(false)
    inputRef.current?.focus()
  }

  const getSectorColor = (sector) => {
    const colors = {
      'Technology': 'text-blue-400',
      'E-commerce': 'text-green-400',
      'Automotive': 'text-red-400',
      'Entertainment': 'text-purple-400',
      'Financial Services': 'text-yellow-400',
      'Transportation': 'text-orange-400',
      'Travel': 'text-pink-400',
      'Cryptocurrency': 'text-amber-400'
    }
    return colors[sector] || 'text-gray-400'
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="relative" ref={searchRef}>
        {/* Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          
          </div>
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            placeholder="Search companies or stocks..."
            className="w-full px-3 pr-4 py-2 bg-neutral-900 border border-neutral-700 rounded-full text-white placeholder-zinc-400 "
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
            >
              ×
            </button>
          )}
        </div>

        {/* Selected Company Display */}
        {/* {selectedCompany && (
          <div className="mt-3 p-3 bg-blue-900/20  rounded-lg">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-zinc-400" />
              <span className="text-white font-medium">{selectedCompany.name}</span>
              <span className="text-zinc-400 font-mono text-sm">({selectedCompany.symbol})</span>
            </div>
            <p className={`text-sm mt-1 ${getSectorColor(selectedCompany.sector)}`}>
              {selectedCompany.sector}
            </p>
          </div>
        )} */}

        {/* Dropdown Suggestions */}
        {isOpen && filteredCompanies.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-neutral-900 border border-neutral-700 rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto">
            <div className="py-2">
              {filteredCompanies.map((company) => (
                <button
                  key={company.id}
                  onClick={() => handleCompanySelect(company)}
                  className="w-full px-4 py-3 text-left hover:bg-neutral-800 transition-colors border-b border-neutral-800 last:border-b-0"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Building2 className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="text-white font-medium text-sm">
                          {company.name}
                        </div>
                        <div className={`text-xs ${getSectorColor(company.sector)}`}>
                          {company.sector}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-3 h-3 text-zinc-100" />
                      <span className="text-zinc-400 font-mono text-sm">
                        {company.symbol}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {isOpen && searchTerm.length > 0 && filteredCompanies.length === 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg z-50">
            <div className="px-4 py-6 text-center text-gray-400">
              <Building2 className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>No companies found matching "{searchTerm}"</p>
              <p className="text-sm mt-1">Try searching by company name or stock symbol</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Search