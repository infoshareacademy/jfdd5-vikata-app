/**
 * Created by alanw on 14.12.2016.
 */
import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import { connect } from 'react-redux'
import GoogleMap from 'google-map-react'
import ShopMarker from './ShopMarker/ShopMarker'

const mapStateToProps = state => ({
  shops: state.appData.shops
})

const ShopsView= (props) =>(
    <div>
      <div style={{height: 300, width: '100%', marginTop:'20px'}}>
        <GoogleMap  options={{ scrollwheel: false}}
          bootstrapURLKeys={{key: "AIzaSyBNloCLIiE_DmpryAJU16mwcr46EyQu2Fg" }}
          defaultCenter={{
            lat: 51.9592485,
            lng: 19.4559833
          }}
          defaultZoom={8}>
          {props.shops.map(
            shop=>(
              <ShopMarker lat={shop.location.lat}
                          lng={shop.location.lng}
                          text={shop.name}  />
            )
          )}

        </GoogleMap>
      </div>
      <h3>
        {/*{*/}
          {/*parts.filter(*/}
            {/*part => part.id===parseInt(props.params.partId)*/}
          {/*).map(*/}
            {/*part => part.name*/}
          {/*)*/}
        {/*} */}
        Lista hurtowni w których dostępny jest ten produkt:
      </h3>
        <ul>
          <ListGroup>

            {
              props.shops.filter(
                shop => shop.parts.find(
                  part => part.partId === parseInt(props.params.partId)
                ) !== undefined
              ).map(
                shop =>
                  <ListGroupItem key={shop.id}>
                    {shop.name} cena:
                    {shop.parts.filter(
                      part => part.partId === parseInt(props.params.partId)
                    ).map(
                      part => part.price
                    )}
                  </ListGroupItem>
              )
            }

          </ListGroup>

        </ul>
    </div>
)

export default connect(mapStateToProps)(ShopsView)