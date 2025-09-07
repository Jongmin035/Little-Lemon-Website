import LogoFooter from "./assets/Logofooter.png";

function Footer() {
    return (
        <>
            <img className="footerLogo" src={LogoFooter} alt="Little Lemon Logo Footer"/>
            <section className="doormat">
                <h3>Doormat Navigation</h3>
                <p><a href="#Home">Home</a></p>
                <p><a href="#About">About</a></p>
                <p><a href="#Menu">Menu</a></p>
                <p><a href="#Reservations">Reservations</a></p>
                <p><a href="#Order">Order Online</a></p>
                <p><a href="#Login">Login</a></p>
            </section>
            <section className="contact">
                <h3>Contact</h3>
                <p><a href="#Address">Address</a></p>
                <p><a href="#Phone">phone number</a></p>
                <p><a href="#Email">email</a></p>
            </section>
            <section className="social">
                <h3>Social Media Links</h3>
                <p><a href="#Address">Address</a></p>
                <p><a href="#Phone">phone number</a></p>
                <p><a href="#Email">email</a></p>
            </section>
        </>
    );
}

export default Footer;