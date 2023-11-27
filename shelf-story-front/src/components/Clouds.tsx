import {MeshProps, useFrame} from "@react-three/fiber";
import {useRef, useState} from "react";
import {Mesh} from "three";
import {useTexture} from "@react-three/drei";
export default function Earth(props: MeshProps) {
    const ref = useRef<Mesh>(null!)
    const [clicked,click]=useState(false)
    const texture = useTexture("/clouds.jpg")
    useFrame((state, delta) => {
        ref.current.rotation.y += delta*1.5
        ref.current.rotation.z += delta*0.01
    })
    return(
        <mesh
            {...props}
            ref={ref}
            scale={ clicked ? 2.1 : 1 }
            onClick={() => {click(!clicked);}}>
            <sphereGeometry/>
            <meshStandardMaterial map={texture} alphaMap={texture} transparent={true} />
        </mesh>
    )
}