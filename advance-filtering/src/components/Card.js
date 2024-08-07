import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from 'react-icons/bs';

function Card() {
    return <section className='card'>
        <img className='card-img' src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxcscnr9ykm3a8'
            alt='dress'
        />
        <div className="card-details">
            <h3 className='card-title'> Dress </h3>
            <section className='card-reviews'>
                <AiFillStar className='rating-star' />
                <AiFillStar className='rating-star' />
                <AiFillStar className='rating-star' />
                <AiFillStar className='rating-star' />
                <span className='total-reviews'>4</span>
            </section>
            <section className='card-price'>
                <div className='price'>
                    <del>$300</del> 200
                </div>
                <div className='bag'>
                    <BsFillBagHeartFill className='bag-icon' />
                </div>
            </section>
        </div>

    </section>
}
export default Card 