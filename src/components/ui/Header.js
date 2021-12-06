import Container from "./Container"
import { Link } from "react-router-dom"
import Theme from "./Theme"


const Header = () => {

    return (
        <header className='header'>
            <Container className={'header__container'}>
                <Link to='/FEM-Countries-Rest-API'>
                    <h1 className='header__title'>Where in the world?</h1>
                </Link>
                <Theme />
            </Container>
        </header>
    )
}

export default Header