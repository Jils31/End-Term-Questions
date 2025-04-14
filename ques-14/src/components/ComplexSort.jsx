import React, { useMemo, useState } from "react";

function ComplexSort({ data }) {
  const [filter, setFilter] = useState("");

  const sortedData = useMemo(() => {
    const filteredItems = data.filter(item =>
      item.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredItems.sort();
  }, [data, filter]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <ul>
        {sortedData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* If any other things are present here which re-renders then the sort function is not the one which renders each time , it only re-renders
      if any dependency changes */}
    </div>
  );
}

export default ComplexSort;
