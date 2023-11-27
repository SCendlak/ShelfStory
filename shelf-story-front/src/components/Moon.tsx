import {MeshProps, useFrame} from "@react-three/fiber";
import {useRef, useState} from "react";
import {Mesh} from "three";
import {useTexture} from "@react-three/drei";

export default function Moon(props: MeshProps){
    const ref = useRef<Mesh>(null!)
    const [clicked,click] = useState(false)

    const texture = useTexture("/moon.jpg")
    useFrame(({ clock },delta) => {
        const time = clock.getElapsedTime()
        const radius = 15
        ref.current.position.x = radius * Math.sin(time*0.04)
        ref.current.position.z = radius * Math.cos(time*0.04)
        ref.current.rotation.y += delta*0.04
    })
    return(
        <mesh
            {...props}
            scale={0.5}
            ref={ref}
            onClick={()=>{click(!clicked);console.log(ref.current)}}>
            <sphereGeometry />
            <meshStandardMaterial map={texture} />
        </mesh>

    )
}