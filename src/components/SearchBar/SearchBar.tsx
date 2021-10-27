import { RiSearchLine } from 'react-icons/ri'

const SearchBar: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-3.5 left-2">
        <RiSearchLine fontSize={18} className="text-gray-400" />
      </div>
      <input
        type="text"
        className="w-full h-full pl-8 pr-4 border rounded shadow"
        placeholder="Search for apps & games"
      />
    </div>
  )
}

export default SearchBar
