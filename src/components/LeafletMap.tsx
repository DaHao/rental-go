// @flow
import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet'; 

const defaultLatLng: LatLngTuple = [48.865572, 2.283523];
const zoom:number = 8;

const LeafletMap:React.FC = () => {
   return (
     <Map>

     </Map>
   )
}
export default LeafletMap;
/*
type State = {
  lat: number,
  lng: number,
  zoom: number,
};


export default class HouseMap extends Component<{}, State> {
  const position = [this.state.lat, this.state.lng];
  return (
    <Map center={position} zoom={this.state.zoom}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </Map>
  );
};
 */
