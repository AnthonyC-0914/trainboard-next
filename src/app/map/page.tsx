'use client'

import React, {useMemo} from "react";
import dynamic from "next/dynamic";
import MapWithLayers from "@/app/map/MapWithLayers";

export default function MapPage() {
    const MapWithTrail = useMemo(() => dynamic(
        () => import('./MapWithTrail'),
        { ssr: false }
    ), []);

    const MapBasic = useMemo(() => dynamic(
        () => import('./MapBasic'),
        { ssr: false }
    ), []);

    const MapWithMarker = useMemo(() => dynamic(
        () => import('./MapWithMarker'),
        { ssr: false }
    ), []);

    const MapWithLayers = useMemo(() => dynamic(
        () => import('./MapWithLayers'),
        { ssr: false }
    ), []);



    return (
        <div className="grid grid-cols-2 gap-10">
            <div className="w-[750px] h-[750px] relative flex">
                <MapBasic/>
            </div>
            <div className="w-[750px] h-[750px] relative flex">
                <MapWithMarker/>
            </div>
            <div className="w-[750px] h-[750px] relative flex">
                <MapWithTrail/>
            </div>
            <div className="w-[750px] h-[750px] relative flex">
                <MapWithLayers/>
            </div>
        </div>

    )
}
