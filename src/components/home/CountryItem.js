import { Link } from "react-router-dom"
const CountryItem = ({ name, flags, region, capital, population }) => {

    return (
        <Link to={`/country/${name.common}`}>
            <section className='country__item'>
                <div className='country__flag_wrapper'>
                    <img className='country__flag_img' src={flags.svg} alt={`${name.common} flag`} loading='lazy' />
                </div>
                <div className='country__info'>
                    <h2 className='country__name'>{name.common}</h2>
                    <p><strong>Population: </strong>{population.toLocaleString()}</p>
                    <p><strong>Region: </strong>{region}</p>

                    {Array.isArray(capital) ? <p><strong>Capital: </strong>{capital[0]}</p> : <p><strong>Capital: </strong>{capital}</p>}
                </div>
            </section>
        </Link>

    )
}

export default CountryItem