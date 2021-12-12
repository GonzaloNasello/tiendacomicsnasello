import CarWidget from "./CarWidget";

const NavBar = (props) => {
    return (
        <header>
            <h1 className="tituloPrincipal">Mega Tienda Comics</h1>
            <nav className="nav">
            <a href="#" className="link" id="link--inicio">Inicio</a>
            {props.secciones.map((secciones, indice) =>{
                return <a key={indice} href={secciones} className="link">{secciones}</a>
            }
            )}
            <CarWidget/>
            </nav>
        </header>
    )
}

export default NavBar;