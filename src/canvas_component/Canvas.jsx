import React, { useRef, useState, useCallback } from "react";
import { Canvas, useThree } from "@react-three/fiber";
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
import ElevatorControls from "../components/ElevatorControls";

// Create a new component for handling screenshots
function ScreenshotHandler({ onScreenshot }) {
  const { gl, scene, camera } = useThree();

  React.useEffect(() => {
    if (onScreenshot) {
      onScreenshot({ gl, scene, camera });
    }
  }, [gl, scene, camera, onScreenshot]);

  return null;
}

function CanvasContainer() {
  const canvasRef = useRef(null);
  const toggleDoorRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [screenshotTools, setScreenshotTools] = useState(null);

  const handleDoorToggle = useCallback((toggleFn) => {
    toggleDoorRef.current = toggleFn;
  }, []);

  const handleOpenDoor = () => {
    if (toggleDoorRef.current && !isOpen) {
      toggleDoorRef.current();
      setIsOpen(true);
    }
  };

  const handleCloseDoor = () => {
    if (toggleDoorRef.current && isOpen) {
      toggleDoorRef.current();
      setIsOpen(false);
    }
  };

  const handleTakeSnapshot = () => {
    if (screenshotTools) {
      const { gl, scene, camera } = screenshotTools;

      // Render the scene
      gl.render(scene, camera);

      // Get the canvas and create download
      const canvas = gl.domElement;
      const link = document.createElement("a");

      link.href = canvas.toDataURL("image/png", 1.0);
      link.download = `elevator-snapshot-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleScreenshotTools = useCallback((tools) => {
    setScreenshotTools(tools);
  }, []);

  return (
    <div id="canvas-container" ref={canvasRef}>
      <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
        <ScreenshotHandler onScreenshot={handleScreenshotTools} />
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
          <ModernElevator onDoorToggle={handleDoorToggle} />
        </group>
      </Canvas>
      <ElevatorControls
        onOpenDoor={handleOpenDoor}
        onCloseDoor={handleCloseDoor}
        isDoorOpen={isOpen}
        onTakeSnapshot={handleTakeSnapshot}
      />
    </div>
  );
}

export default CanvasContainer;
