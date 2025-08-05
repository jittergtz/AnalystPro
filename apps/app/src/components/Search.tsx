"use client"
import React, { useState, useRef, useEffect } from 'react'
import { Building2, TrendingUp, Loader2 } from 'lucide-react'
import { searchCompanies } from '@/actions/search-company-action'

interface Company {
  id: number
  name: string
  symbol: string
  sector?: string
  industry?: string
  country?: string
  currency?: string
  exchange?: string
  ipo?: string
  marketCapitalization?: number
  phone?: string
  shareOutstanding?: number
  weburl?: string
  logo?: string
  finnhubIndustry?: string
}

function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Debounced search function
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchTerm.length >= 2) {
        setIsLoading(true)
        setError(null)
        try {
          const companies = await searchCompanies(searchTerm)
          setFilteredCompanies(companies)
          setIsOpen(true)
        } catch (err) {
          setError('Failed to fetch companies')
          setFilteredCompanies([])
        } finally {
          setIsLoading(false)
        }
      } else {
        setFilteredCompanies([])
        setIsOpen(false)
      }
    }, 300) // 300ms debounce

    return () => clearTimeout(timeoutId)
  }, [searchTerm])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setSelectedCompany(null) // Clear selection when user types
  }

  const handleCompanySelect = (company: Company) => {
    setSelectedCompany(company)
    setSearchTerm(company.name)
    setIsOpen(false)
    console.log('Selected company:', company)
  }

  const handleInputFocus = () => {
    if (searchTerm.length >= 2) {
      setIsOpen(true)
    }
  }

  const clearSearch = () => {
    setSearchTerm('')
    setSelectedCompany(null)
    setIsOpen(false)
    setError(null)
    inputRef.current?.focus()
  }

  const getSectorColor = (sector?: string) => {
    if (!sector) return 'text-gray-400'
    
    const colors: Record<string, string> = {
      'Technology': 'text-blue-400',
      'E-commerce': 'text-green-400',
      'Automotive': 'text-red-400',
      'Entertainment': 'text-purple-400',
      'Financial Services': 'text-yellow-400',
      'Transportation': 'text-orange-400',
      'Travel': 'text-pink-400',
      'Cryptocurrency': 'text-amber-400',
      'Healthcare': 'text-emerald-400',
      'Energy': 'text-orange-500',
      'Consumer Goods': 'text-indigo-400',
      'Real Estate': 'text-teal-400',
      'Utilities': 'text-cyan-400',
      'Materials': 'text-lime-400',
      'Industrials': 'text-slate-400',
      'Communication Services': 'text-violet-400',
      'Consumer Discretionary': 'text-rose-400',
      'Consumer Staples': 'text-amber-500',
      'Financial': 'text-yellow-400',
      'Basic Materials': 'text-lime-400',
      'Industrial Goods': 'text-slate-400',
      'Services': 'text-purple-400',
      'Unknown': 'text-gray-400'
    }
    return colors[sector] || 'text-gray-400'
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="relative" ref={searchRef}>
        {/* Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {isLoading && (
              <Loader2 className="w-4 h-4 text-gray-400 animate-spin" />
            )}
          </div>
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            placeholder="Search companies or stocks..."
            className="w-full px-3 pr-4 py-2 bg-neutral-900 border border-neutral-700 rounded-full text-white placeholder-zinc-400"
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
                          {company.sector || 'Unknown'}
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

        {/* Loading State */}
        {isOpen && isLoading && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg z-50">
            <div className="px-4 py-6 text-center text-gray-400">
              <Loader2 className="w-6 h-6 mx-auto mb-2 animate-spin" />
              <p>Searching companies...</p>
              <p className="text-xs mt-1 text-gray-500">Fetching company details</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {isOpen && error && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg z-50">
            <div className="px-4 py-6 text-center text-gray-400">
              <Building2 className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-red-400">{error}</p>
              <p className="text-sm mt-1">Please try again later</p>
            </div>
          </div>
        )}

        {/* No Results */}
        {isOpen && searchTerm.length >= 2 && !isLoading && !error && filteredCompanies.length === 0 && (
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