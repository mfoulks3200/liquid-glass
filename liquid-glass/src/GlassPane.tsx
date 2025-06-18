"use client";

import { PropsWithChildren, useId, useState } from "react";
import style from "./GlassPane.module.css";
import { ChromaticAbberationFilter, SVGPaneWarpMap, SVGToStr } from "./SVGWarp";

interface GlassPaneProps {
    width: number;
    height: number;
    className?: string;
    edgeSize?: number;
    edgeInset?: number;
    bubbleDisplacement?: number;
    rippleDisplacement?: number;
    chromaticDistance?: number;
    overallBlur?: number;
    brightness?: number;
    contrast?: number;
    showOverlay?: boolean;
}

export const GlassPane = (
    nonDefaultProps: PropsWithChildren<GlassPaneProps>,
) => {
    const props: Required<Omit<GlassPaneProps, "className">> = {
        edgeSize: 20,
        edgeInset: 20,
        bubbleDisplacement: 85,
        rippleDisplacement: 20,
        chromaticDistance: 1,
        overallBlur: 2,
        contrast: 120,
        brightness: 90,
        showOverlay: false,
        ...nonDefaultProps,
    };

    const paneWarpMap = (
        <SVGPaneWarpMap
            width={props.width + 40}
            height={props.height + 40}
            edgeSize={props.edgeSize}
            edgeInset={props.edgeInset}
        />
    );
    const panelWarpFilterId = useId();

    return (
        <>
            <svg
                width={0}
                height={0}
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="2"
                style={{ display: "none" }}
            >
                <defs>
                    <filter
                        id={panelWarpFilterId}
                        width={props.width + 40}
                        height={props.height + 40}
                        x={-20}
                        y={-20}
                        filterUnits="userSpaceOnUse"
                    >
                        <feTurbulence
                            type="turbulence"
                            baseFrequency="0.001"
                            numOctaves="2"
                            result="fractal"
                            stitchTiles={"stitch"}
                        />
                        <feDisplacementMap
                            in2="turbulence"
                            in="SourceGraphic"
                            scale={props.rippleDisplacement}
                            result={"displaced"}
                        />
                        <feImage result="paneWarpMap" href={SVGToStr(paneWarpMap)} />
                        <feDisplacementMap
                            in2="paneWarpMap"
                            in="displaced"
                            scale={props.bubbleDisplacement}
                            result={"displaced"}
                            xChannelSelector={"R"}
                            yChannelSelector={"B"}
                        />
                        <ChromaticAbberationFilter distance={props.chromaticDistance} />
                        {props.showOverlay && (
                            <feImage result="paneWarpMap" href={SVGToStr(paneWarpMap)} />
                        )}
                    </filter>
                </defs>
            </svg>
            <div
                className={[style.glassPane, nonDefaultProps.className, "flex p-6 justify-center text-4xl font-bold text-black"].join(" ")}
                style={{
                    backdropFilter: `saturate(120%) contrast(${props.contrast}%) brightness(${props.brightness}%) blur(${props.overallBlur}px) url(#${panelWarpFilterId})`,
                    height: props.height,
                    width: props.width
                }}
            >
                {nonDefaultProps.children}
            </div>
        </>
    );
};
