import {useState} from "react";
import {Container, Row, Col, InputGroup, FormControl, Button} from "react-bootstrap";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [initialSequence, setInitialSequence] = useState("");
    const [sequence, setSequence] = useState("123456789");

    const handleChange = (event) => {
        const re = /^[1-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            setInitialSequence(event.target.value);
        } else {
            toast.error("Please enter a number from 1 - 9.")
        }
    }

    const renderRearrange = (sequence) => {
        if (sequence.length !== 9) return;
        return sequence?.split("").map((num, index) => (
            <Col key={index} className="col-4 board font-monospace">{num}</Col>
        ));
    }

    const handleClick = () => {
        if (initialSequence.length === 0) {
            toast.error("Please enter a 9 digit sequence.")
        } else if (initialSequence.length !== 9) {
            toast.error("Input length must be 9 numbers.");
        } else {
            setSequence(initialSequence);
        }
    }


    return (
        <Container fluid>
            <Row>
                <h1 className="text-center mt-5 mb-5 font-monospace">Sequence Assessment</h1>
            </Row>

            <Row>
                <InputGroup className="mb-5">
                    <InputGroup.Text id="sequence">#</InputGroup.Text>
                    <FormControl
                        placeholder="Enter A 9-Digit Sequence"
                        aria-label="Enter A 9-Digit Sequence"
                        aria-describedby="sequence"
                        onChange={handleChange}
                        value={initialSequence}
                        maxLength={9}
                    />
                    <Button className="bg-dark" onClick={handleClick}>Rearrange</Button>
                </InputGroup>
            </Row>

            <Row className="hundred-vh">
                {renderRearrange(sequence)}
                <ToastContainer/>
            </Row>

        </Container>
    );
}

export default App;
