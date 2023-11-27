import {MeshProps, useFrame} from "@react-three/fiber";
import {useRef, useState} from "react";
import {useTexture} from "@react-three/drei";
import {Mesh} from "three";
export default function Earth(props: MeshProps) {
    const ref = useRef<Mesh>(null!)
    const [clicked,click]=useState(false)
    const texture = useTexture("/earth.jpg")
    useFrame((state, delta) => ref.current.rotation.y += delta)
    return(
        <mesh
            {...props}
            ref={ref}
            scale={ 2 }
            onClick={() => {click(!clicked);}}>
            <sphereGeometry/>
            <meshStandardMaterial map={texture}/>
        </mesh>
    )
}