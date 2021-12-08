
import { Navbar, NavbarBrand, NavItem, NavLink, Nav, Container } from "reactstrap";
import menuIcon from "../../../../assets/images/js-logo.png"

function NavigationBar({changeType}) {
  const itemArray = ["tummy","eye", "skin", "sleep", "weight" ]
  return (
    <>
      <Navbar
        expand="md"
        light
      >
        <Container className="menu-container">
          <div>
            <NavbarBrand to="/" className="navbar-brand">
              <span className="bold-logo">Health</span> <span className="normal-logo">Goals</span>
            </NavbarBrand>
          </div>
            <div>
            <Nav className="me-auto" navbar>
              {itemArray.map((item)=>{
                return <>
                <NavItem onClick={()=>{changeType(item)}}>
                <NavLink to="/"><img src={menuIcon} alt="icon" /><span className="menu-name">{item}</span></NavLink>
              </NavItem>
                </>
              })}
            </Nav>  
            </div>  
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar;