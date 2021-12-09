import {
  Col,
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Button,
} from "reactstrap";
import CategoryWeightSection from "./components/categoryWeightSection";
import PriceSection  from "./components/priceSection";
import RatingSection  from "./components/ratingSection";
import cardImg from "../../../../assets/images/card-img.png";

const CardComponent = ({
  description,
  discount,
  photoUrl,
  price,
  rating,
  title,
  type,
  flavour,
}) => {
  return (
    <Col xl="12">
      <Card>
        <div className="flavour-wrapper">
          <CardImg src={cardImg} alt="Card image cap" top width="100%" />
          <Button className="change-flavour">{flavour}</Button>
        </div>
        <CardBody>
          <CardTitle tag="h5">{`${type}:${title}`}</CardTitle>
          <RatingSection photoUrl={photoUrl} type={type} rating={rating}/>
          <CardText>{description}</CardText>
          <PriceSection price={price} discount={discount}/>
        </CardBody>
        <CategoryWeightSection/>
      </Card>
    </Col>
  );
};

export default CardComponent;
