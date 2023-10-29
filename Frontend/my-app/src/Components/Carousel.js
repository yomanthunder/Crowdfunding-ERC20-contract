import Carousel from "react-bootstrap/Carousel";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function DarkVariantExample() {
  return (
    <div style={{ marginTop: "3.5rem" }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/crowd1.webp"
            alt="First slide"
            width={"700"}
            height={"700"}
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/crowd2.jpg"
            alt="Second slide"
            width={"700"}
            height={"700"}
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/crowd.jpg"
            alt="Third slide"
            width={"700"}
            height={"700"}
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;
