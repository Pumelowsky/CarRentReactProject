import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { FaHeadset } from 'react-icons/fa';
import Accordion from 'react-bootstrap/Accordion';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Faq() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <Button variant="primary" onClick={handleShow} style={{
                position: 'fixed',
                bottom: '20px',
                right: '3vw',
                borderRadius: '50%',
                padding: '10px 15px'
            }}>
                <FaHeadset />
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end" scroll="true">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>FAQ</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Dlaczego właśnie nasza firma?</Accordion.Header>
                            <Accordion.Body>
                                Nasza wypożyczalnia samochodów wyróżnia się na rynku dzięki szerokiemu wyborowi nowoczesnych
                                i dobrze utrzymanych pojazdów, konkurencyjnym cenom oraz doskonałej obsłudze klienta.
                                Oferujemy elastyczne warunki wynajmu, a nasz zespół zawsze jest gotowy,
                                aby dostosować się do indywidualnych potrzeb każdego klienta. Dodatkowo,
                                zapewniamy szybki i bezproblemowy proces rezerwacji, co pozwala zaoszczędzić
                                czas i uniknąć stresu.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Jak wygląda proces wypożyczenia</Accordion.Header>
                            <Accordion.Body>
                                Proces wypożyczenia samochodu w naszej firmie jest prosty i szybki:

                                <p>1. Rezerwacja: Możesz zarezerwować samochód online, telefonicznie lub bezpośrednio w naszej siedzibie.</p>
                                <p>2. Weryfikacja dokumentów: Przy odbiorze samochodu prosimy o okazanie ważnego prawa jazdy i dowodu tożsamości.</p>
                                <p>3. Podpisanie umowy: Po weryfikacji dokumentów podpisujemy umowę najmu.</p>
                                <p>4. Odbiór samochodu: Po dopełnieniu formalności odbierasz samochód i cieszysz się podróżą.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Czy są jakieś kary za spóźnienie?</Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    Tak, w przypadku spóźnienia z zwrotem samochodu mogą być naliczane dodatkowe opłaty.
                                    Szczegółowe informacje dotyczące opłat za opóźnienia znajdują się w umowie najmu.
                                    Zalecamy zawsze informowanie nas o ewentualnym opóźnieniu, abyśmy mogli wspólnie
                                    znaleźć najlepsze rozwiązanie i uniknąć niepotrzebnych kosztów.
                                </p>
                               
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Czego potrzebuję by wynająć samochód?</Accordion.Header>
                            <Accordion.Body>
                                Aby wynająć samochód w naszej wypożyczalni, potrzebujesz:

                                <p>Ważnego prawa jazdy: Musisz mieć ważne prawo jazdy, a w niektórych przypadkach może być wymagane doświadczenie w prowadzeniu pojazdu przez określony czas.</p>
                                <p>Dowodu tożsamości: Może to być dowód osobisty lub paszport.</p>
                                <p>Karty kredytowej: Do zabezpieczenia depozytu i opłat związanych z wynajmem.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Kiedy pojawią się nowe samochody we flocie?</Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    Stale aktualizujemy naszą flotę, aby zapewnić naszym klientom dostęp do najnowszych modeli samochodów.
                                    Nowe pojazdy wprowadzamy zazwyczaj co kwartał, jednak dokładne terminy mogą się różnić w zależności
                                    od dostępności na rynku i specyfikacji dostaw. Zachęcamy do regularnego sprawdzania naszej strony internetowej
                                    lub kontaktu z naszą obsługą klienta, aby uzyskać najnowsze informacje na ten temat.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Faq;