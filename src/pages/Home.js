import CountryLists from "../components/home/CountryLists"
const Home = () => {
    document.title = `FEM - Countries REST API`;

    return (
        <>
            <CountryLists />
        </>
    )
}

export default Home
