import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div
      className="p-4 rounded-lg mb-6"
      style={{ backgroundColor: "#FFF0C5" }}
    >
      <div className="flex items-center border-b border-black pb-2">
        <FaSearch className="text-gray-600 mr-2" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search instructors, courses or topics..."
          className="bg-transparent focus:outline-none flex-1"
        />
      </div>
    </div>
  );
};

export default SearchFilter;
