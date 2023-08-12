import { useState, useRef } from "react"

const ScreenSharing = () => {

    const [sharingStart, setSharingStart] = useState(false);
    const videoRef: any = useRef(null);
    const displaySurfaceRef: any = useRef(null);
    
    const handleSuccess = (stream: any) => {
        setSharingStart(true);

        const video = videoRef.current;
        video.srcObject = stream;

        console.log(videoRef.current.srcObject);
        

        stream.getVideoTracks()[0].addEventListener('ended', () => {
            console.error('The user has ended sharing the screen');
            setSharingStart(false);
        })
    }

    const handleError = (error: Error) => {
        console.error(`getDisplayMedia error: ${error.name}`, error);
    }

    // const errorMsg = (msg: string, error: Error) => {
    //     const errorElement = document.querySelector("#errorMsg");
    //     errorElement?.innerHTML += `<p>${msg}</p>`

    //     if (typeof error !== 'undefined') {
    //         console.error(error);
    //     }
    // }

    const handleClick = () => {
        const options: {video: any, audio: boolean } = { video: true, audio: true };
        const prefferedDisplaySurface = displaySurfaceRef.current;
        const displaySurface = prefferedDisplaySurface.options[prefferedDisplaySurface.selectedIndex].value;
        if (displaySurface !== 'default' ) {
            options.video = { displaySurface }
        }
        console.log(displaySurface);
        

        navigator.mediaDevices.getDisplayMedia(options)
        .then(handleSuccess, handleError);
    }

  return (
    <div className="w-screen h-screen">
        
        {/* Screen Surface */}
        <div 
        className="w-[700px] h-[450px] mx-auto bg-black mt-5">
            <video  
            ref={videoRef}
            className="w-full h-full"
            controls={false}
            autoPlay
            loop
            />
        </div>

        {/* Start Button */}
        <button 
        onClick={() => handleClick()}
        disabled={sharingStart === true}
        className="bg-red-600 px-2 py-1 text-white">
            Start
        </button>

        <select 
        ref={displaySurfaceRef}
        id="displaySurface">
            <option value="default" selected>Show default sharing options</option>
            <option value="browser">Prefer to share a browser tab</option>
            <option value="window">Prefer to share a window</option>
            <option value="monitor">Prefer to share an entire screen</option>
        </select>

    </div>
  )
}

export default ScreenSharing
