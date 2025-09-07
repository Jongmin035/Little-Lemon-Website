function Nav() {
    return (
        <ul>
            <li><a href='#Home'>Home</a></li>
            <li><a href='#About'>About</a></li>
            <li><a href='#Menu'>Menu</a></li>
            <li><a href='#Reservations'>Reservations</a></li>
            <li><a href='#Order'>
                <span className="order-online">
                    <span className="order-word">Order</span>
                    <span className="online-word">Online</span>
                </span>
            </a></li>
            <li><a href='#Login'>Login</a></li>
        </ul>
    );
}

export default Nav;