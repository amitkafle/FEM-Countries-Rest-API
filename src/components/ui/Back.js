import Container from "./Container";
import { useHistory } from "react-router";

const Back = () => {

    const history = useHistory();

    const onBackHandler = () => {
        history.go(-1);
    }

    return (
        <Container className='container__back__button'>
            <button onClick={onBackHandler} className='back__button'>&#129144;  Back</button>
        </Container>

    )
}

export default Back
