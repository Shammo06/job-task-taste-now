/* eslint-disable react/prop-types */
import './card.css'

const CardItem = ({ data }) => {
    return (
        <div className='card'>           
            <img src={data.image}alt="" />
            <h4>{data.name}</h4>
            <h6>{data.place}</h6>
            <h6>{data.price}</h6>
            <button>Add to cart</button>
        </div>
    );
};

export default CardItem;