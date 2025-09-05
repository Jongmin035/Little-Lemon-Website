import LogoFooter from "./assets/Logofooter.png";

function Footer() {
    return (
        <>
            <img src={LogoFooter} alt="Little Lemon Logo Footer" />
            <>
                <h3>Doormat Navigation</h3>
                <p><a href="#Home">Home</a></p>
                <p><a href="#About">About</a></p>
                <p><a href="#Menu">Menu</a></p>
                <p><a href="#Reservations">Reservations</a></p>
                <p><a href="#Order">Order Online</a></p>
                <p><a href="#Login">Login</a></p>
            </>
            <>
                <h3>Contact</h3>
                <p><a href="#Address">Address</a></p>
                <p><a href="#Phone">phone number</a></p>
                <p><a href="#Email">email</a></p>
            </>
            <>
                <h3>Social Media Links</h3>
                <p><a href="#Address">Address</a></p>
                <p><a href="#Phone">phone number</a></p>
                <p><a href="#Email">email</a></p>
            </>
        </>
    );
}

export default Footer;