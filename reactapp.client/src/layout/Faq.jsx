import { Button } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';
import Swal from "sweetalert2";

function Faq() {

    const handleShow = () => {
        event.preventDefault();
        Swal.fire({
            title: "+48 123 456 789",
            text: "Masz pytanie? Zadzwoń",
            icon: "question"
        });
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow} style={{
                position: 'fixed',
                bottom: '20px',
                right: '3vw',
                borderRadius: '50%',
                padding: '10px 15px'
            }}>
                <FaQuestionCircle />
            </Button>
        </>
    );
}

export default Faq;