import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>PlatziTrends</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Todos</NavLink>
        </li>
        <li>
          <NavLink to={"/clothes"}>Ropa</NavLink>
        </li>
        <li>
          <NavLink to={"/electronics"}>Electrodomésticos</NavLink>
        </li>
        <li>
          <NavLink to={"/furnitures"}>Muebles</NavLink>
        </li>
        <li>
          <NavLink to={"/toys"}>Juguetes</NavLink>
        </li>
        <li>
          <NavLink to={"/others"}>Otros</NavLink>
        </li>
      </ul>
      <ul>
        <li>correo@correo.com</li>
      </ul>
      <ul>
        <li>
          <NavLink to={"/my-orders"}>Mis Pedidos</NavLink>
        </li>
        <li>
          <NavLink to={"/my-account"}>Mis Cuenta</NavLink>
        </li>
        <li>
          <NavLink to={"/sing-in"}>Inicia Sesión</NavLink>
        </li>
      </ul>
    </nav>
  );
}
