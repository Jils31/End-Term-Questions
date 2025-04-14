import React from 'react'
import { useState, useMemo } from 'react';

function Filtering() {
    const [searchterm, setSearchTerm] = useState("")
    const sampleItems = [
        "apple",
        "apricot",
        "banana",
        "blueberry",
        "blackberry",
        "cherry",
        "coconut",
        "cranberry",
        "date",
        "dragonfruit",
        "fig",
        "grape",
        "guava",
        "kiwi",
        "lemon",
        "lime",
        "mango",
        "melon",
        "orange",
        "olive"
      ];

      const filteredList = useMemo(() => sampleItems.filter(item => item.includes(searchterm)), [searchterm])
  return (
    <div>
      <input type="text" value={searchterm} onChange={(e) => setSearchTerm(e.target.value)} />
      <ul>
        {filteredList.map((item, index)=>(
            <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Filtering
