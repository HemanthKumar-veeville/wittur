import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  useTexture,
} from "@react-three/drei";
import ElevatorCar from "../ElevatorCar";
import "../App.css";

// Room component to match the reference image
function Room() {
  return (
    <group>
      {/* Floor with tile pattern */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          color="#d2c4b5" // Beige tile color from image
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {/* Walls with tile pattern and elevator opening */}
      <group>
        {/* Left Wall */}
        <mesh position={[-4, 4, 0]} receiveShadow>
          <boxGeometry args={[0.1, 8, 20]} />
          <meshStandardMaterial
            color="#e8e8e8"
            roughness={0.5}
            metalness={0.1}
          />
        </mesh>

        {/* Right Wall */}
        <mesh position={[4, 4, 0]} receiveShadow>
          <boxGeometry args={[0.1, 8, 20]} />
          <meshStandardMaterial
            color="#e8e8e8"
            roughness={0.5}
            metalness={0.1}
          />
        </mesh>

        {/* Back Wall with elevator opening */}
        <group position={[0, 4, -6]}>
          {/* Left section of back wall */}
          <mesh position={[-2.5, 0, 0]}>
            <boxGeometry args={[3, 8, 0.1]} />
            <meshStandardMaterial color="#e8e8e8" />
          </mesh>

          {/* Right section of back wall */}
          <mesh position={[2.5, 0, 0]}>
            <boxGeometry args={[3, 8, 0.1]} />
            <meshStandardMaterial color="#e8e8e8" />
          </mesh>

          {/* Top section of back wall */}
          <mesh position={[0, 2.5, 0]}>
            <boxGeometry args={[2, 3, 0.1]} />
            <meshStandardMaterial color="#e8e8e8" />
          </mesh>
        </group>

        {/* Wall Grid Lines - Horizontal */}
        {[...Array(8)].map((_, i) => (
          <group key={`h-${i}`}>
            <mesh position={[-4, i * 1, 0]}>
              <boxGeometry args={[0.11, 0.02, 20]} />
              <meshStandardMaterial color="#d0d0d0" />
            </mesh>
            <mesh position={[4, i * 1, 0]}>
              <boxGeometry args={[0.11, 0.02, 20]} />
              <meshStandardMaterial color="#d0d0d0" />
            </mesh>
          </group>
        ))}

        {/* Wall Grid Lines - Vertical */}
        {[...Array(10)].map((_, i) => (
          <group key={`v-${i}`}>
            <mesh position={[-4, 4, -10 + i * 2]}>
              <boxGeometry args={[0.11, 8, 0.02]} />
              <meshStandardMaterial color="#d0d0d0" />
            </mesh>
            <mesh position={[4, 4, -10 + i * 2]}>
              <boxGeometry args={[0.11, 8, 0.02]} />
              <meshStandardMaterial color="#d0d0d0" />
            </mesh>
          </group>
        ))}
      </group>

      {/* Ceiling */}
      <mesh position={[0, 8, 0]} receiveShadow>
        <boxGeometry args={[8, 0.1, 20]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Ceiling Lights */}
      {[-6, -2, 2, 6].map((z, i) => (
        <group key={`light-${i}`} position={[0, 7.9, z]}>
          <pointLight intensity={0.3} distance={4} color="#ffffff" />
          <mesh>
            <boxGeometry args={[0.6, 0.1, 0.6]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={0.5}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function CanvasContainer() {
  return (
    <div id="canvas-container">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 1.8, 7]} fov={40} />

        {/* Restrict camera movement to maintain front view */}
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          minDistance={6}
          maxDistance={12}
          target={[0, 1.8, 0]}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          // Add rotation restrictions
          minAzimuthAngle={-Math.PI / 4} // Limit left rotation to -45 degrees
          maxAzimuthAngle={Math.PI / 4} // Limit right rotation to 45 degrees
          enableZoom={true}
          enablePan={false} // Disable panning
          enableRotate={true}
        />

        {/* Lighting setup to match reference image */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[2, 6, 4]}
          intensity={0.7}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Environment preset="lobby" background={false} />

        {/* Add the room environment */}
        <Room />

        {/* Position elevator to fit the wall opening */}
        <ElevatorCar
          position={[0, 0, -6]} // Aligned with back wall
          rotation={[0, Math.PI, 0]}
          scale={[0.95, 1, 1]} // Adjusted to fit opening
          wallColor="#e8e8e8"
          floorColor="#1a1a1a"
          doorColor="#d4d4d4"
        />
      </Canvas>
    </div>
  );
}

export default CanvasContainer;
