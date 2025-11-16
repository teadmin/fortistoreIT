'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cerca FortiGate, FortiSwitch, FortiAP..."
        className="w-full px-4 py-2 pr-12 border-2 border-gray-300 rounded-lg focus:border-fortinet-red focus:outline-none"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-fortinet-red"
      >
        <FiSearch size={20} />
      </button>
    </form>
  )
}

export default SearchBar
