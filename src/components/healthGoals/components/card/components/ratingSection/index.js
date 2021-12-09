import React from "react";
import starIcon from "../../../../../../assets/images/star.png";

const RatingSection = ({photoUrl, type, rating}) => {
return (<div className="rating">
<div className="rating-left">
  <img src={photoUrl} alt="PhotoUrl" /> <span>{type}</span>
</div>
<div className="rating-right">
  <span>{rating}</span> <img src={starIcon} alt="StarIcon" />
</div>
</div>)
}
export default RatingSection;