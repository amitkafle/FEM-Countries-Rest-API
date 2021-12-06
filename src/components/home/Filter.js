import caret from '../../assets/images/caret-down.png'


const Filter = ({ value, onFilter }) => {

    const onFilterHandler = (e) => {
        onFilter(e.target.value);
    }

    return (
        <div className='filter'>
            <label htmlFor="filter">Filter by region: </label>
            <select name="filter" id="filter" onChange={onFilterHandler} value={value}>
                <option value='' >All</option>
                <option value="asia">Asia</option>
                <option value="americas">Americas</option>
                <option value="oceania">Oceania</option>
                <option value="africa">Africa</option>
                <option value="europe">Europe</option>
            </select>
            <div className='filter__caret'><img src={caret} alt="dropdown" /></div>
        </div>
    )
}

export default Filter