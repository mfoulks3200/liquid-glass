"use client";

import { useRef, useState } from "react";
import ReactPlayer from "react-player"

export const VideoBackground = () => {
    const [isReady, setReady] = useState(false);
    const player = useRef<ReactPlayer>(null);

    return <>
        <div
            className={"fixed top-0 left-0 right-0 bottom-0 min-w-full min-h-full aspect-video select-none pointer-events-none z-0"}
            style={{
                backgroundImage: "url('https://z8h06o6ier.ufs.sh/f/iw5UBfcnzDy0lQeyYZR5H10PTOos8NUJMgrxfv963BVi2GEk')",
                backgroundSize: "cover"
            }}
        >
            <div style={{ height: "100%", width: "100%", opacity: isReady ? "100%" : "0%", transition: "opacity 1s ease" }} suppressHydrationWarning>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=https://www.youtube.com/watch?v=LWGJA9i18Co'
                    controls={false}
                    muted={true}
                    ref={player}
                    config={{
                        youtube: {
                            playerVars: {
                                autoplay: 1,
                                loop: 1,
                                rel: 0,
                                start: 30
                            }
                        },
                    }}
                    width="100%"
                    height="100%"
                    onPlay={() => {
                        setReady(true);
                    }}
                    onEnded={() => {
                        setReady(false);
                    }}
                />
            </div>
        </div>
    </>

    // return <iframe
    //     src="https://www.youtube.com/embed/EColTNIbOko?autoplay=1&mute=1&controls=0&loop=1&playsinline=1&enablejsapi=1"
    //     className={"fixed top-0 left-0 right-0 bottom-0 min-w-full min-h-full aspect-video select-none pointer-events-none"}
    // ></iframe>
}