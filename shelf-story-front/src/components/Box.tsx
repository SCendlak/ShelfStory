import {MeshProps, useFrame} from "@react-three/fiber";
import {useRef, useState} from "react";
import {Mesh} from "three";

export default function Box(props: MeshProps){
    const ref = useRef<Mesh>(null!)
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.x += delta))
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 3 : 1}
            onClick={() => {click(!clicked)}}
            onPointerOver={(event) => (event.stopPropagation(), hover(true))}
            onPointerOut={() => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'green' : 'orange'} />
        </mesh>
    )
}