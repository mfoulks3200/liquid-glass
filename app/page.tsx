"use client";

import style from "./page.module.css";
import { VideoBackground } from "./_components/VideoBackground";
import { GlassPane } from "@/liquid-glass/src/GlassPane";
import { Dog, Sparkles, Youtube } from "lucide-react";
import { useState } from "react";
import { SVGPaneWarpMap } from "@/liquid-glass/src/SVGWarp";
import { DesktopNag } from "./_components/DesktopNag";
import dynamic from "next/dynamic";

export default function Home() {
  const [edgeSize, setEdgesize] = useState(20);
  const [edgeInset, setEdgeInset] = useState(20);
  const [bubbleDisplacement, setBubbleDisplacement] = useState(85);
  const [rippleDisplacement, setRippleDisplacement] = useState(20);
  const [chromaticDistance, setChromaticDistance] = useState(1);
  const [overallBlur, setOverallBlur] = useState(2);
  const [showOverlay, setShowOverlay] = useState(0);

  const paneWarpMap = (
    <SVGPaneWarpMap
      width={240}
      height={240}
      edgeSize={edgeSize}
      edgeInset={edgeInset}
    />
  );

  return (
    <>
      <VideoBackground />
      <div
        className={
          "fixed top-0 left-0 right-0 bottom-0 w-full h-full z-10 flex flex-col items-center justify-center gap-16"
        }
      >
        <GlassPane
          width={200}
          height={200}
          edgeSize={edgeSize}
          edgeInset={edgeInset}
          bubbleDisplacement={bubbleDisplacement}
          rippleDisplacement={rippleDisplacement}
          chromaticDistance={chromaticDistance}
          overallBlur={overallBlur}
          showOverlay={showOverlay == 1}
        >
          <Sparkles className={"text-white opacity-85 mt-3"} size={128} />
        </GlassPane>
        <GlassPane
          width={800}
          height={250}
          edgeSize={edgeSize}
          edgeInset={edgeInset}
          bubbleDisplacement={bubbleDisplacement}
          rippleDisplacement={rippleDisplacement}
          chromaticDistance={chromaticDistance}
          overallBlur={40}
          brightness={60}
          contrast={100}
          showOverlay={showOverlay == 1}
          className="p-8 text-base text-white flex items-center justify-center"
        >
          <div className="flex flex-col gap-2 basis-full">
            <DebugSlider
              name="Edge Size"
              max={50}
              value={edgeSize}
              onValueChange={(i) => setEdgesize(i)}
            />
            <DebugSlider
              name="Edge Inset"
              max={50}
              value={edgeInset}
              onValueChange={(i) => setEdgeInset(i)}
            />
            <DebugSlider
              name="Displacement"
              max={100}
              value={bubbleDisplacement}
              onValueChange={(i) => setBubbleDisplacement(i)}
            />
            <DebugSlider
              name="Ripples"
              max={100}
              value={rippleDisplacement}
              onValueChange={(i) => setRippleDisplacement(i)}
            />
            <DebugSlider
              name="Chromatic Distance"
              max={100}
              value={chromaticDistance}
              onValueChange={(i) => setChromaticDistance(i)}
            />
            <DebugSlider
              name="Overall Blur"
              max={100}
              value={overallBlur}
              onValueChange={(i) => setOverallBlur(i)}
            />
            {/* <DebugSlider name="Show Overlay" max={1} value={showOverlay} onValueChange={(i) => setShowOverlay(i)} /> */}
          </div>
          {/* <div className="max-w-56 max-h-56 scale-50">
            {paneWarpMap}
          </div> */}
        </GlassPane>
      </div>
      <div className="z-20 fixed bottom-0 right-0 p-4 flex gap-2">
        <Youtube />
        <span>
          <a href="https://www.youtube.com/watch?v=LWGJA9i18Co" target="_blank">
            Upside Down & Inside Out
          </a>{" "}
          by{" "}
          <a
            href="https://www.youtube.com/channel/UC194cPvPaGJjhJBEGwG6vxg"
            target="_blank"
          >
            OK Go
          </a>
        </span>
      </div>
      <div className="z-20 fixed bottom-0 left-0 p-4 flex gap-2">
        <Dog />
        <span>
          Liquid Glass in Pure CSS Demo by{" "}
          <a href="https://www.linkedin.com/in/mfoulks/" target="_blank">
            Atlas Foulks
          </a>
        </span>
      </div>
      {/* <DesktopNag /> */}
    </>
  );
}

interface DebugSliderProps {
  max: number;
  value: number;
  suffix?: string;
  onValueChange: (i: number) => void;
  name: string;
}

const DebugSlider = (props: DebugSliderProps) => {
  return (
    <div className="flex gap-2 font-normal">
      <div className="basis-64">{props.name}</div>
      <input
        type="range"
        min="0"
        max={props.max}
        value={props.value}
        onChange={(e) => props.onValueChange(parseInt(e.target.value))}
        className="basis-full"
      ></input>
      <div className="basis-8">{props.value + (props.suffix ?? "")}</div>
    </div>
  );
};
