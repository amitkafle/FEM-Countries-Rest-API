import Container from "../ui/Container";
import CountryItem from "./CountryItem";
import Search from './Search';
import Filter from './Filter';
import { uid } from 'uid';
import useFetch from "../../context/useFetch";
import Loader from "react-loader-spinner";
import { useEffect, useState } from "react";

const CountryLists = () => {

    const baseUrl = 'https://restcountries.com/v3.1/';
    const [endPoint, setEndPoint] = useState('all');

    const [searchQuery, setSearchQuery] = useState('');
    const [filterQuery, setFilterQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const { data, error } = useFetch(baseUrl, endPoint, searchQuery, filterQuery, '');


    useEffect(() => {
        if (data.length > 0) {
            setIsLoading(false)
        }
        if (error === 'Request failed with status code 404') {
            setIsLoading(false)
        }
    }, [data, error])

    useEffect(() => {
        if (searchQuery !== '') {
            setEndPoint('name/')
        }
        else
            setEndPoint('all')
        setIsLoading(true)
    }, [searchQuery])

    useEffect(() => {
        if (filterQuery !== '')
            setEndPoint('region/')
        else
            setEndPoint('all')
        setIsLoading(true)
    }, [filterQuery])

    return (
        <>
            <Container className="search__filter">
                <Search value={searchQuery} onSearch={setSearchQuery} />
                <Filter value={filterQuery} onFilter={setFilterQuery} />
            </Container>
            <Container className='container__loader'>{isLoading && <Loader className='loader' type="TailSpin" height={100} width={100} color='var(--text)' />}</Container>
            <Container className="country country__container">
                {(data.length > 0) && data.map(item => {
                    return (<CountryItem {...item} key={uid(25)} />)
                })}
                {(error !== '' && !isLoading) && <p>No Data Found...!</p>}
            </Container>
        </>

    )
}

export default CountryLists
