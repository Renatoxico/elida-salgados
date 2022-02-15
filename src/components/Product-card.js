import PropTypes from 'prop-types';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProductCard = ({productName, img, descr, price}) => {
  return (
    <div className="card product-card col-4 col-sm-6 rounded">
            <h5 className="card-title">{productName}</h5>
        <img src={img} alt="" className="card-img-top"/>
        <div className="card-body">
            <p className="card-text">{descr}</p>            
        </div>
        <div className="card-footer">
            <div className="container">
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </div>
        </div>
    </div>
    );
};


ProductCard.propTypes = {
    productName: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    descr: PropTypes.string.isRequired,
}
export default ProductCard;
