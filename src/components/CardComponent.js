import { Col, Container, Row, Card, CardImg, CardTitle, CardBody, CardText, Button, FormGroup, Label, Input } from "reactstrap";
import skinIcon from "../assets/images/skin.png";
import starIcon from "../assets/images/star.png"

function CardComponent({ description , discount, id, photoUrl, price, rating, title}) {
  console.log("props=", { description , discount, id, photoUrl, price, rating, title})
  return (
    <>
      {/* <Container>
        <Row className="mt-5"> */}
          <Col xl="12">
            <Card>
            <div className="flavour-wrapper">
              <CardImg src="https://picsum.photos/256/186" alt="Card image cap" top width="100%" />
              <Button className="change-flavour">
              {title}
              </Button>
            </div>
              <CardBody>
                <CardTitle tag="h5">
                  {title}
                </CardTitle>
                <div className="skin-rating">
                  <div className="skin-rating-left">
                    <img src={skinIcon} alt="skin"  /> <span>{title}</span>
                  </div>
                  <div className="skin-rating-right">
                    <span>{rating}<img src={starIcon} /></span>
                  </div>
                </div>
                <CardText>
                  {description}
                </CardText>
                <div className="pricing">
                  <div className="pricing-left">
                    <span className="full-price">&#x20b9;{price}</span> <span className="price-cut">&#x20b9;{discount}</span>
                  </div>
                  <div className="pricing-right">
                    <span className="you-save">You Save:</span> <span className="red-price">&#x20b9;200(25%)</span>
                  </div>
                </div>
              </CardBody>
              <CardBody className="bottom-cart">
                <div className="bottom-cart-left">
                  <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                  >
                    <option>
                      120 gms
                    </option>
                    <option>
                      130 gms
                    </option>
                    <option>
                      140 gms
                    </option>
                    <option>
                      150 gms
                    </option>
                  </Input>
                  </div>
                <div className="bottom-cart-right">
                <Button className="add-btn">
                  Add
                </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
    </>
  )
}

export default CardComponent;