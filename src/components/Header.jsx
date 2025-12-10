import DropdownMenu from "./Menu";

export default function Header(){
    return(
      <div>  
        <header className="header">
                <h1>Digital Evolution S.A</h1>
                    <p>Desarrolladores Web / Profesionales Tecnológicos</p>
                    <DropdownMenu/>
        </header>
      </div>  
    )
}