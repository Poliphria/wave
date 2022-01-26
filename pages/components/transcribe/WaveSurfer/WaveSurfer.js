import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import {
    Box,
} from "@chakra-ui/react"

const WaveSurferContainer = (props) => {
    // Wavesurfer will update all the time, so react will keep rendering    
    // a new DOM child node. Need to assign a ref to existing child node so 
    // new ones aren't made. 
    const waveFormRef = useRef()

    // options for wavesurfer
    const options = {
        container: waveFormRef.current,
        waveColor: "9A2D53",
        
    }

    // useEffect needed here to use third party APIs. 
    // see: https://reactjs.org/docs/hooks-effect.html
    useEffect(() => {
        if (waveFormRef.current) {
            const wavesurfer = WaveSurfer.create(options)
        }
        return () => wavesurfer.current.destroy()
    }, []) // TODO: Add state variables here related to wavesurfer

    return (
        <Box></Box>
    )
}

export default WaveSurferContainer