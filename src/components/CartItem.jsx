export default function CartItem({item}) {


    return (
        <div className="cartItem">
            <i className="ri-delete-bin-line"></i>
            <img className="cartItem-image" src={item.url}/>
            <p className="cartItem-price">$5.00</p>
        </div>
    )
}