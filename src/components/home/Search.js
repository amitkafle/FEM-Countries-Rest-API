import searchIcon from '../../assets/images/search.png'
const Search = ({ value, onSearch }) => {

    const onSearchHandler = (e) => {
        onSearch(e.target.value);
    }

    return (
        <div className='search'>

            <label htmlFor="search" className='search__label'><img src={searchIcon} alt="Search" /> </label>
            <input type="text" id='search' className='search__input' value={value} onChange={onSearchHandler} placeholder="Search for a country..." />
        </div>
    )
}

export default Search