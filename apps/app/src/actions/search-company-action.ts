"use server"

import { env } from "@/env.mjs"

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

interface FinnhubSearchResponse {
  count: number
  result: Array<{
    count: number
    description: string
    displaySymbol: string
    symbol: string
    type: string
    primary: boolean
  }>
}

interface FinnhubCompanyProfile {
  country: string
  currency: string
  exchange: string
  ipo: string
  marketCapitalization: number
  name: string
  phone: string
  shareOutstanding: number
  ticker: string
  weburl: string
  logo: string
  finnhubIndustry: string
  sector: string
}

async function getCompanyProfile(symbol: string): Promise<FinnhubCompanyProfile | null> {
  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${encodeURIComponent(symbol)}&token=${env.FINNHUB_KEY}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      return null
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Error fetching profile for ${symbol}:`, error)
    return null
  }
}

export async function searchCompanies(query: string): Promise<Company[]> {
  if (!query || query.length < 2) {
    return []
  }

  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/search?q=${encodeURIComponent(query)}&token=${env.FINNHUB_KEY}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: FinnhubSearchResponse = await response.json()
    
    // Transform Finnhub data to match our interface
    const companies = data.result
      .sort((a, b) => {
        // Prioritize common stock
        if (a.type === 'Common Stock' && b.type !== 'Common Stock') return -1
        if (a.type !== 'Common Stock' && b.type === 'Common Stock') return 1

        // Prioritize US exchanges
        const isUS_A = a.symbol.includes('.') === false
        const isUS_B = b.symbol.includes('.') === false
        if (isUS_A && !isUS_B) return -1
        if (!isUS_A && isUS_B) return 1
        
        return 0
      })

    // Fetch additional details for each company
    const companiesWithDetails = await Promise.all(
      companies.slice(0, 8).map(async (item, index) => {
        const profile = await getCompanyProfile(item.symbol)
        
        return {
          id: index + 1,
          name: profile?.name || item.description || item.displaySymbol || 'Unknown Company',
          symbol: item.symbol || item.displaySymbol || 'N/A',
          sector: profile?.sector || profile?.finnhubIndustry || 'Unknown',
          industry: profile?.finnhubIndustry,
          country: profile?.country,
          currency: profile?.currency,
          exchange: profile?.exchange,
          ipo: profile?.ipo,
          marketCapitalization: profile?.marketCapitalization,
          phone: profile?.phone,
          shareOutstanding: profile?.shareOutstanding,
          weburl: profile?.weburl,
          logo: profile?.logo,
          finnhubIndustry: profile?.finnhubIndustry,
        }
      })
    )

    return companiesWithDetails
  } catch (error) {
    console.error('Error fetching companies from Finnhub:', error)
    return []
  }
} 