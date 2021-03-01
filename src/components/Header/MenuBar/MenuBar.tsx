import React from 'react';
import './MenuBar.scss';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from '../../../pages/Home/Home';
import About from '../../../pages/About/About';
import Hypnotherapy from '../../../pages/Services/Hypnotherapy';
import NeuroLinguisticProgramming from '../../../pages/Services/NeuroLinguisticProgramming';
import BodyLanguage from '../../../pages/Services/BodyLanguage';
import Reiki from '../../../pages/Services/Reiki';
import Coaching from '../../../pages/Services/Coaching';
import Appointments from '../../../pages/Services/Appointments';
import Contacts from '../../../pages/Contacts/Contacts';

function MenuBar() {
    return (
        <>
            <BrowserRouter>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand>Susana Bastos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link ><Link to="/about">Sobre</Link></Nav.Link>
                            <NavDropdown title="Serviços" id="collasible-nav-dropdown">
                                <NavDropdown.Item><Link to="/hypnotherapy">Hipnoterapia</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/neuro-linguistic-programming">PNL</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/body-language">Linguagem Corporal</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/reiki">Reiki</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/coaching">Coaching</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/appointments">Consultas</Link></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link><Link to="/contacts">Contactos</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="https://www.facebook.com/susanabastoshipnose" target="_blank">Facebook</Nav.Link>
                            <Nav.Link href="https://www.instagram.com/susanabastoshipnose/" target="_blank">Instagram</Nav.Link>
                            <Nav.Link href="https://www.youtube.com/channel/UC6cGkWwYcI3RhKg-yXzSwwA" target="_blank">Youtube</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
    
                <Switch>
                    <Route path="/contacts">
                        <Contacts />
                    </Route>
                    <Route path="/appointments">
                        <Appointments />
                    </Route>
                    <Route path="/coaching">
                        <Coaching />
                    </Route>
                    <Route path="/reiki">
                        <Reiki />
                    </Route>
                    <Route path="/body-language">
                        <BodyLanguage />
                    </Route>
                    <Route path="/neuro-linguistic-programming">
                        <NeuroLinguisticProgramming />
                    </Route>
                    <Route path="/hypnotherapy">
                        <Hypnotherapy />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default MenuBar