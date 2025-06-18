"use client";

import { FunctionComponent, PropsWithChildren, ReactNode, useId } from "react";
import { renderToString } from "react-dom/server";

export const identitySvg =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij4KICA8ZGVmcz4KICAgIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgICAgIDwhW0NEQVRBWwogICAgICAucmVkLWdyYWRpZW50IHsKICAgICAgICBmaWxsOiB1cmwoI3JlZC1ncmFkaWVudCk7CiAgICAgIH0KCiAgICAgIC5ibHVlLWdyYWRpZW50IHsKICAgICAgICBmaWxsOiB1cmwoI2JsdWUtZ3JhZGllbnQpOwogICAgICAgIGZpbHRlcjogdXJsKCNibGVuZC1maWx0ZXIpOwogICAgICB9CgogICAgICAvKgogICAgICB1c3QgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXM6CiAgICAgIGZhbGxiYWNrIGZvciBvbGRlciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgIm1peC1ibGVuZC1tb2RlIiBpbiBDU1MuCiAgICAgICovCiAgICAgIC5yZWQtc3ltYm9sIHsKICAgICAgICBkaXNwbGF5OiBub25lOwogICAgICB9CgogICAgICBAc3VwcG9ydHMgKG1peC1ibGVuZC1tb2RlOiBzY3JlZW4pIHsKICAgICAgICAuYmx1ZS1ncmFkaWVudCB7CiAgICAgICAgICBmaWx0ZXI6IG5vbmU7CiAgICAgICAgICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuOwogICAgICAgIH0KCiAgICAgICAgLnJlZC1zeW1ib2wgewogICAgICAgICAgZGlzcGxheTogYmxvY2s7CiAgICAgICAgfQogICAgICB9CiAgICAgIF1dPgogICAgPC9zdHlsZT4KCiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InJlZC1ncmFkaWVudCIgeDE9IjAiIHgyPSIxIiB5MT0iMCIgeTI9IjAiIGNvbG9yLWludGVycG9sYXRpb249InNSR0IiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZGMDAwMCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkYwMDAwIiBzdG9wLW9wYWNpdHk9IjAiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJibHVlLWdyYWRpZW50IiB4MT0iMCIgeDI9IjAiIHkxPSIwIiB5Mj0iMSIgY29sb3ItaW50ZXJwb2xhdGlvbj0ic1JHQiIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDAwMEZGIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDAwRkYiIHN0b3Atb3BhY2l0eT0iMCIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CgogICAgPHJlY3QgaWQ9InJlZC1ncmFkaWVudC1yZWN0IiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgeD0iMCIgeT0iMCIgY2xhc3M9InJlZC1ncmFkaWVudCIgLz4KCiAgICA8ZmlsdGVyIGlkPSJibGVuZC1maWx0ZXIiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CiAgICAgIDxmZUltYWdlIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB4PSIwIiB5PSIwIiByZXN1bHQ9InJlZCIgaHJlZj0iI3JlZC1ncmFkaWVudC1yZWN0IiAvPgogICAgICA8ZmVCbGVuZCBpbj0icmVkIiBpbjI9IlNvdXJjZUdyYXBoaWMiIG1vZGU9InNjcmVlbiIgLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KCiAgPHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIHg9IjAiIHk9IjAiIGZpbGw9ImJsYWNrIiAvPgogIDx1c2UgaHJlZj0iI3JlZC1ncmFkaWVudC1yZWN0IiBjbGFzcz0icmVkLXN5bWJvbCIgLz4KICA8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgeD0iMCIgeT0iMCIgY2xhc3M9ImJsdWUtZ3JhZGllbnQiIC8+Cjwvc3ZnPg==";

interface SVGBaseMapProps {
  height: number;
  width: number;
}

interface SVGPaneWarpMapProps extends SVGBaseMapProps {
  additionalDefs?: ReactNode;
  edgeInset: number;
  edgeSize: number;
}

export const SVGPaneBaseWarpMap: FunctionComponent<
  PropsWithChildren<SVGPaneWarpMapProps>
> = (props) => {
  const redGradId = useId();
  const blueGradId = useId();
  const rightFalloffId = useId();
  const leftFalloffId = useId();

  const blendFilterId = useId();

  const doubleInset = props.edgeInset * 2;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      version="1.1"
      viewBox={`0 0 ${props.width} ${props.height}`}
    >
      <defs>
        <linearGradient
          id={redGradId}
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          colorInterpolation="sRGB"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor={`rgb(255,0,0)`} stopOpacity="1" />
          <stop
            offset={props.edgeSize + "%"}
            stopColor="rgb(255,0,0)"
            stopOpacity={0.9}
          />
          <stop
            offset={100 - props.edgeSize + "%"}
            stopColor="rgb(255,0,0)"
            stopOpacity={0.25}
          />
          <stop offset="100%" stopColor="rgb(255,0,0)" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={blueGradId}
          x1="0"
          x2="0"
          y1="0"
          y2="1"
          colorInterpolation="sRGB"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="rgb(0,0,255)" stopOpacity="1" />
          <stop
            offset={props.edgeSize + "%"}
            stopColor="rgb(0,0,255)"
            stopOpacity={0.9}
          />
          <stop
            offset={100 - props.edgeSize + "%"}
            stopColor="rgb(0,0,255)"
            stopOpacity={0.25}
          />
          <stop offset="100%" stopColor="rgb(0,0,255)" stopOpacity="0" />
        </linearGradient>

        <linearGradient
          id={rightFalloffId}
          x1="0"
          x2="1"
          y1="0"
          y2="1"
          colorInterpolation="sRGB"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="black" stopOpacity="1" />
          <stop
            offset={props.edgeSize + "%"}
            stopColor="black"
            stopOpacity={0}
          />
          <stop
            offset={100 - props.edgeSize + "%"}
            stopColor="black"
            stopOpacity={0}
          />
          <stop offset="100%" stopColor="rgb(127,127,127)" stopOpacity="1" />
        </linearGradient>
        <linearGradient
          id={leftFalloffId}
          x1="0"
          x2="1"
          y1="1"
          y2="0"
          colorInterpolation="sRGB"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="rgb(127,127,127)" stopOpacity="1" />
          <stop
            offset={props.edgeSize + "%"}
            stopColor="black"
            stopOpacity={0}
          />
          <stop
            offset={100 - props.edgeSize + "%"}
            stopColor="black"
            stopOpacity={0}
          />
          <stop offset="100%" stopColor="rgb(127,127,127)" stopOpacity="1" />
        </linearGradient>
        {props.additionalDefs ?? <></>}

        <filter
          id={blendFilterId}
          x="0"
          y="0"
          width={props.width}
          height={props.height}
        >
          <feBlend mode="lighten" in="BackgroundImage" in2="SourceGraphic" />
        </filter>
      </defs>

      <rect
        width={props.width}
        height={props.height}
        x="0"
        y="0"
        fill="rgb(0,127,0)"
        style={{ filter: `url(#${blendFilterId})` }}
      />
      <rect
        width={props.width - doubleInset}
        height={props.height - doubleInset}
        x={props.edgeInset}
        y={props.edgeInset}
        style={{ fill: `url(#${redGradId})`, mixBlendMode: "lighten" }}
      />
      <rect
        width={props.width - doubleInset}
        height={props.height - doubleInset}
        x={props.edgeInset}
        y={props.edgeInset}
        style={{ fill: `url(#${blueGradId})`, mixBlendMode: "lighten" }}
      />
      {/* <rect width={props.width - doubleInset} height={props.height - doubleInset} x={props.edgeInset} y={props.edgeInset} style={{ fill: `url(#${rightFalloffId})` }} />
    <rect width={props.width - doubleInset} height={props.height - doubleInset} x={props.edgeInset} y={props.edgeInset} style={{ fill: `url(#${leftFalloffId})` }} /> */}
      {props.children}
    </svg>
  );
};

export const SVGPaneWarpMap: FunctionComponent<
  PropsWithChildren<SVGPaneWarpMapProps>
> = (props) => {
  return (
    <SVGPaneBaseWarpMap
      width={props.width}
      height={props.height}
      edgeInset={props.edgeInset}
      edgeSize={props.edgeSize}
    ></SVGPaneBaseWarpMap>
  );
};

export const ChromaticAbberationFilter = ({
  distance,
}: {
  distance: number;
}) => {
  return (
    <>
      <feColorMatrix
        in="displaced"
        values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 "
        result="red"
      />
      <feOffset dx={distance} dy={distance} in="red" result="shiftedRed" />

      <feColorMatrix
        in="displaced"
        values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0 "
        result="green"
      />
      <feOffset dx={distance} dy={distance} in="green" result="shiftedGreen" />

      <feColorMatrix
        in="displaced"
        values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0 "
        result="blue"
      />
      <feOffset dx={-distance} dy={-distance} in="blue" result="shiftedBlue" />
      <feBlend
        in="shiftedRed"
        in2="shiftedGreen"
        result="comp1"
        mode="screen"
      />
      <feBlend in="shiftedBlue" in2="comp1" mode="screen" />
    </>
  );
};

export const SVGToStr = (svg: ReactNode) => {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(renderToString(svg))}`;
};
