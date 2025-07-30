import React from "react";
import {LatLngTuple} from "leaflet";
import {MapContainer, Marker, Polyline, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import {json} from "@/app/map/json";

export default function MapWithTrail() {

    const position: LatLngTuple = [54.065452, -2.144907]
    const zoom: number = 14

    const trail: LatLngTuple[] = json.gpx.trk.trkseg.trkpt.map((e) => [Number(e._lat), Number(e._lon)])

    return (
        <MapContainer center={position} zoom={zoom} className="flex-1">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polyline positions={trail}/>
        </MapContainer>
    )
}