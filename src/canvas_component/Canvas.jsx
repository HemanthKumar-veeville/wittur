import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  useTexture,
} from "@react-three/drei";
import ElevRoom from "../Elev_room";
import Room from "../components/Room/Room";
import "../App.css";
import ModernElevator from "../Modern_Elevator";

function CanvasContainer() {
  return (
    <div id="canvas-container">
      <Canvas shadows>
        {/* Adjust camera to see elevator better */}
        <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={65} />

        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          minDistance={6}
          maxDistance={15}
          target={[0, 1.5, 0]}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
        />

        {/* Lighting setup for better visibility */}
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[2, 6, 8]}
          intensity={0.8}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Environment preset="lobby" background={false} />

        {/* Room environment */}
        <Room />

        {/* Position elevator to fit perfectly in the back wall */}
        <group position={[0, 3.5, -3]} scale={[4.4, 4, 4]}>
          <ModernElevator />
        </group>
      </Canvas>
    </div>
  );
}

export default CanvasContainer;
