import Carousel from 'react-bootstrap/Carousel';

export const Aktualnosci = () => {
    return (
        <Carousel data-bs-theme="light" >
          <Carousel.Item interval={2000} >
              <img
                  className="d-block w-100"
                  src="/image/slider1.jpg"
                  alt="Image One"
              />
              <Carousel.Caption className="text-white">
                  <h3>Oferta sportowa</h3>
                  <p>Sprawdź nasze samochody w wersji sportowej</p>
              </Carousel.Caption>
          </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                  className="d-block w-100"
                  src="/image/slider2.jpg"
                  alt="Image Two"
              />
                <Carousel.Caption className="text-white">
                  <h3>Nowe we flocie</h3>
                  <p>Sprawdź nasze nowości</p>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel> 
  );
}

export default Aktualnosci;