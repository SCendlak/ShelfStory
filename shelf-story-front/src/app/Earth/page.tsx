"use client"

import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Earth from "@/components/Earth";
import Moon from "@/components/Moon";
import Clouds from "@/components/Clouds";

export default function BasicThree(){
    const ambientLightIntensity=Math.PI / 2
    const spotLightIntensity=Math.PI * 2
    return (
        <main style={{background: 'red',height: '50rem',display: "flex", alignItems: 'center', justifyContent: 'center'}}>
            <Canvas style={{background: 'black'}}>
                <ambientLight intensity={ambientLightIntensity} />
                <pointLight position={[100, 23, 0]} decay={0} intensity={spotLightIntensity} />
                <Earth position={[0,0,0]}/>
                <Clouds />
                <Moon position={[0,2,1]}/>
                <OrbitControls />
            </Canvas>
        </main>
    )
}