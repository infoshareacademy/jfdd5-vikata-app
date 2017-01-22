/**
 * Created by alanw on 22.01.2017.
 */
import React from 'react'
import  LoginButton  from '../LoginPanelView/LoginButton'
import {Nav,Navbar, NavItem, Carousel} from 'react-bootstrap'

const PageHeader = (props) => (
  <div>
    <Navbar inverse fluid style={{borderRadius:0,marginBottom:0}}>
      <Navbar.Header>
        <Navbar.Brand >
          <a href="#">Find My Part</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#" disabled>Załóż konto</NavItem>
          <NavItem eventKey={2} href="#" ><LoginButton/></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Carousel>
      <Carousel.Item>
        <div style={{overflowY: 'hidden', height: 400}}>
          <img width={'100%'} alt="photo1" src={process.env.PUBLIC_URL + 'img/img-header/karuzela1.jpg'}/>
        </div>
        <Carousel.Caption>
          <h1>Baza unikalnych części</h1>
          <p>Szukasz rzadkiego elementu do swojego pojazdu? My pomożemy ci go znaleźć!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{overflowY: 'hidden', height: 400}}>
          <img width={'100%'} alt="photo2" src={process.env.PUBLIC_URL + 'img/img-header/karuzela2.jpg'}/>
        </div>
        <Carousel.Caption>
          <h1>Sprzedaj swoje graty</h1>
          <p>To co jest już Tobie nie potrzebne dla innych pasjonatów może być skarbem. Załóż darmowe konto i dodawaj oferty!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{overflowY: 'hidden', height: 400}}>
          <img width={'100%'} alt="photo3" src={process.env.PUBLIC_URL + 'img/img-header/karuzela3.jpg'}/>
        </div>
        <Carousel.Caption>
          <h1>Szukaj skarbów</h1>
          <p>Bezskutecznie poszukujesz czegoś do swojego pojazdu marnując tylko swój czas? Dodaj ogłoszenie na naszej stronie zwiększając swoją szansę na sukces.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
)

export default PageHeader