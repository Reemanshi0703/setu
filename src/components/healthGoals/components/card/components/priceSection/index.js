import React from 'react';
const PriceSection = ({price, discount}) => {
    return (
        <div className="pricing">
            <div className="pricing-left">
              <span className="full-price">&#x20b9;{price - discount}</span>{" "}
              <span className="price-cut">&#x20b9;{price}</span>
            </div>
            <div className="pricing-right">
              <span className="you-save">You Save:</span>{" "}
              <span className="red-price">
                &#x20b9;
                {`${discount} (${Math.round((discount / price) * 100)})%`}
              </span>
            </div>
          </div>
    )
}
export default PriceSection;