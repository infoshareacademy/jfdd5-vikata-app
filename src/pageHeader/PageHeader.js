/**
 * Created by alanw on 22.01.2017.
 */
import React from 'react'
import {Grid, Row, Image, Carousel} from 'react-bootstrap'

const PageHeader = (props) => (
  <Grid fluid>
    <Carousel>
      <Carousel.Item>
        <div style={{overflowY: 'hidden', height: 400}}>
          <img width={'100%'} alt="900x500" src={process.env.PUBLIC_URL + 'img/img-header/head-banner.jpg'}/>
        </div>
        <Carousel.Caption>
          <h2>Baza unikalnych części</h2>
          <p>Szukasz rzadkiego elementu do swojego pojazdu? My pomożemy ci go znaleźć!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{overflowY: 'hidden', height: 400}}>
          <img width={'100%'} alt="900x500" src={process.env.PUBLIC_URL + 'img/img-header/head-banner.jpg'}/>
        </div>
        <Carousel.Caption>
          <h2>Sprzedaj swoje graty</h2>
          <p>To co jest już Tobie nie potrzebne dla innych pasjonatów może być skarbem. Załóż darmowe konto i dodawaj oferty!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{overflowY: 'hidden', height: 400}}>
          <img width={'100%'} alt="900x500" src={process.env.PUBLIC_URL + 'img/img-header/head-banner.jpg'}/>
        </div>
        <Carousel.Caption>
          <h3>Szukaj skarbów</h3>
          <p>Bezskutecznie poszukujesz czegoś do swojego pojazdu marnując tylko swój czas? Dodaj ogłoszenie na naszej stronie zwiększając swoją szansę na sukces.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Grid>
)

export default PageHeader