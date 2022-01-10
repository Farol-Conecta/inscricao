import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar
        className="menu"
        bg="myMenu"
        variant="light"
        sticky="top"
        expand="xl"
      >
        <Navbar.Brand className="blocoLogo">
          <img
            id="logoMenu"
            src="/images/logo_menu.png"
            alt="logo"
            className="logo_palavras"
            width="127"
            height="100"
          />
          <img
            src="/images/logo_menu.png"
            alt="logo"
            className="logo_palavras2"
            width="127"
            height="100"
          />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="menuItem">
            <Nav.Link
              className="li"
              href="https://www.otelio.com.br/"
              data-item="HOME"
            >
              HOME
            </Nav.Link>
            <Nav.Link
              className="li"
              href="https://www.otelio.com.br/minha_vida/minha_vida.html"
              data-item="MINHA VIDA"
            >
              MINHA VIDA
            </Nav.Link>
            <Nav.Link
              className="li"
              href="https://www.otelio.com.br/palestras/palestras.html"
              data-item="PALESTRAS"
            >
              PALESTRAS
            </Nav.Link>
            <NavDropdown
              className="li"
              href="#"
              data-item="PROJETOS"
              title="PROJETOS"
            >
              <NavDropdown.Item
                className="li"
                href="https://www.oteliodrebes.com.br/doareviver"
              >
                Doar é Viver
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="li"
                href="https://www.oteliodrebes.com.br/festivalencantar"
              >
                Festival enCantar
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="li"
                href="https://www.oteliodrebes.com.br/premiofalaprofessor"
              >
                Fala, Professor!
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="li"
                href="https://www.oteliodrebes.com.br/lions/camisa10"
              >
                Camisa 10
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className=" li "
              href="https://www.oteliodrebes.com.br/fotosdasorte"
              data-item="GALERIA"
              title="GALERIA"
            >
              <NavDropdown.Item className="li">Fotos da Sorte</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="li"
                // href="https://www.oteliodrebes.com.br/festivalencantar"
              >
                Eventos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="li"
                // href="https://www.oteliodrebes.com.br/premiofalaprofessor"
              >
                Vídeos
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              className="li"
              href="https://www.oteliodrebes.com.br/minhasverdades"
              data-item="MINHAS VERDADES"
            >
              MINHAS VERDADES
            </Nav.Link>
            <Nav.Link
              className="li"
              // href="https://www.oteliodrebes.com.br/videos"
              data-item="VÍDEOS"
            >
              VÍDEOS
            </Nav.Link>
            <Nav.Link
              className="li"
              href="https://www.oteliodrebes.com.br/agenda"
              data-item="AGENDA"
            >
              AGENDA
            </Nav.Link>
            <Nav.Link
              className="li"
              href="https://www.oteliodrebes.com.br/contato"
              data-item="CONTATO"
            >
              CONTATO
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
