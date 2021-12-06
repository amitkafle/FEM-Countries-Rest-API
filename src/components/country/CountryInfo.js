import Container from "../ui/Container"
import { useParams } from "react-router"
import { useState, useEffect } from "react"
import Loader from "react-loader-spinner"
import { Link } from "react-router-dom"
import axios from "axios"
import { uid } from "uid"

const CountryInfo = () => {

    const { name } = useParams();
    const [data, setData] = useState([]);
    const [cca3, setCca3] = useState([]);
    const [borders, setBorders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    document.title = `Country - ${name}`;

    useEffect(() => {
        const abortCont = new AbortController();

        const fetchCountry = async () => {
            try {
                setIsLoading(true);
                const countryInfo = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`, { signal: abortCont.signal })
                setData(...countryInfo.data);
                setBorders([]);
                if (countryInfo.data[0].borders !== undefined) {
                    setCca3([...countryInfo.data[0].borders]);
                }
            } catch (error) {
                if (error.name === 'Abort') {
                    console.log('Component unmount')
                }
                else {
                    console.error(error.message);
                }
            }
        }

        fetchCountry();

        return () => abortCont.abort();
    }, [name])


    useEffect(() => {

        const getBordersName = async () => {
            if (cca3.length > 0) {
                try {
                    setIsLoading(true);
                    cca3.map(async item => {
                        const borderInfo = await axios.get(`https://restcountries.com/v3.1/alpha/${item}`);
                        setBorders(prevBorders => {
                            return [...prevBorders, borderInfo.data[0].name.common]
                        });
                    })
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 300)

                } catch (error) {
                    if (error.name === 'Abort') {
                        console.log('Component unmount')
                    }
                    else {
                        console.error(error.message);
                    }
                }
            }
        }

        getBordersName();
    }, [cca3])

    useEffect(() => {
        if (data.length !== 0 && !(data.hasOwnProperty('borders'))) {
            setIsLoading(false);
        }
    }, [data]);

    return (
        <>
            <Container className='container__loader'>{isLoading && <Loader className='loader' type="TailSpin" height={100} width={100} color='var(--text)' />}</Container>
            <Container className='container_country_info'>
                {!isLoading && <>
                    <div className='image__wrapper'>
                        <img className='image__flag' src={data.flags.svg} alt={data.name.official} />
                    </div>
                    <div className='infos_country'>
                        <h2 className='infos_country__name'>{data.name.common}</h2>
                        <div className='infos_country__info'>
                            <div className='column_1'>
                                <p><strong>Native Name:</strong> {data.name.nativeName.eng === undefined ? data.name.nativeName[Object.keys(data.name.nativeName)[0]].official : data.name.nativeName.eng.official}</p>
                                <p><strong>Population:</strong> {data.population.toLocaleString()}</p>
                                <p><strong>Region:</strong> {data.region}</p>
                                <p><strong>Sub Region:</strong> {data.subregion}</p>
                                <p><strong>Capital:</strong> {data.capital.length === 1 ? data.capital[0] : data.capital.join(', ')}</p>
                            </div>
                            <div className='column_2'>
                                <p><strong>Top Level Domain:</strong> {data.tld}</p>
                                <p><strong>Currencies:</strong> {Object.keys(data.currencies).join(', ')}</p>
                                <p><strong>Languages:</strong> {Object.keys(data.languages).map(item => {
                                    return (
                                        data.languages[item]
                                    )
                                }).join(', ')}</p>
                            </div>


                        </div>

                        <div className='infos_country__borders borders'>
                            <strong>Border Countries:</strong>
                            {borders.length > 0 ?
                                <div className='borders__grid'>
                                    {borders.map(item => {
                                        return (
                                            <Link to={`/country/${item}`} key={uid(16)}>
                                                <div className='borders__country'>
                                                    {item}
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div> : <p>No Borders</p>}
                        </div>

                    </div>
                </>}
            </Container>
        </>
    )
}

export default CountryInfo
