import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import Model from "../Model";
import "../App.css";

function CanvasContainer() {
  return (
    <div id="canvas-container">
      <Canvas>
        {/* Add camera with good default position */}
        <PerspectiveCamera makeDefault position={[5, 5, 5]} />

        {/* Add orbit controls to rotate/zoom the model */}
        <OrbitControls enableDamping dampingFactor={0.05} />

        {/* Add ambient and directional lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Add environment lighting for better material rendering */}
        <Environment preset="warehouse" />

        <Model wallColor="#e0e0e0" floorColor="#2c2c2c" doorColor="#4a4a4a" />
      </Canvas>
    </div>
  );
}

export default CanvasContainer;
