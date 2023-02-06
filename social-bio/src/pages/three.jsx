
import { useRef } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

const Box = () => {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref}>
      
      <sphereGeometry/>
      <meshNormalMaterial color="rgba(255, 243, 170, 1)" />
    </mesh>
  );
};

function Three() {
  return (
    <div style={{  width: "359px",
    height: "347px",
    left: "144.00px",
    top: "90.00px"}}>
      <Canvas style={{ background: " rgba(65, 116, 77, 1)" }}>
      
       <Orbit />
        <Box />
      </Canvas>
    </div>
  );
}

const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
 
};

<Canvas style={{ background: "black" }} camera={{ position: [5, 5, 5] }}>
<Box />

</Canvas>



export default Three;