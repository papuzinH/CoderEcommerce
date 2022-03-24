import 'bootstrap-icons/font/bootstrap-icons.css';

const CartWidget = (props) => {
    return (
        <div className='cart'>
            <i className="bi bi-cart"></i>
            <div className="number-notif">{props.number}</div>
        </div>
    )
}

export default CartWidget
