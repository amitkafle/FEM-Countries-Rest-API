import Back from "../components/ui/Back"
import Container from "../components/ui/Container"
import CountryInfo from "../components/country/CountryInfo"

const Country = () => {
    return (
        <Container className='page_country_container' >
            <Back />
            <CountryInfo />
        </Container>
    )
}

export default Country
