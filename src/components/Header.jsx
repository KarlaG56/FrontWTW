import "../assets/style/Header.css";

function Header() {
    return (
        <header className="Header-controler">
            <div className="div-container-title">
                <div className="Logo">
                    <img src="/img/logoWTW.png" />
                </div>
                <a className="div-title">Watering the World</a>
            </div>
        </header>
    )
}
export default Header;