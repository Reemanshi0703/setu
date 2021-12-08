import { Col, Card, CardImg, CardTitle, CardBody, CardText, Button, Input } from "reactstrap";
import starIcon from "../../../../assets/images/star.png";
import cardImg from "../../../../assets/images/card-img.png";

const CardComponent = ({ description , discount, photoUrl, price, rating, title, type, flavour}) => {
  return (
          <Col xl="12" className="my-5">
            <Card>
            <div className="flavour-wrapper">
              <CardImg src={cardImg} alt="Card image cap" top width="100%" />
              <Button className="change-flavour">
                {flavour}
              </Button>
            </div>
              <CardBody>
                <CardTitle tag="h5">
                {`${type}:${title}`}
                </CardTitle>
                <div className="skin-rating">
                  <div className="skin-rating-left">
                    <img src={photoUrl} alt="skin"  /> <span>{type}</span>
                  </div>
                  <div className="skin-rating-right">
                    <span>{rating}</span> <img src={starIcon} />
                  </div>
                </div>
                <CardText>
                  {description}
                </CardText>
                <div className="pricing">
                  <div className="pricing-left">
                    <span className="full-price">&#x20b9;{price-discount}</span> <span className="price-cut">&#x20b9;{price}</span>
                  </div>
                  <div className="pricing-right">
                    <span className="you-save">You Save:</span> <span className="red-price">&#x20b9;{`${discount} Rs (${Math.round(discount/price*100)})%`}</span>
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
  )
}

export default CardComponent;