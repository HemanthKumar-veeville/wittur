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

// Camera positions for different views
const VIEW_CONFIGS = {
  isometric: {
    position: [8, 8, 8],
    target: [0, 1.5, 0],
    fov: 65,
    controls: {
      minDistance: 6,
      maxDistance: 15,
      minPolarAngle: Math.PI / 4,
      maxPolarAngle: Math.PI / 2,
      minAzimuthAngle: -Math.PI / 4,
      maxAzimuthAngle: Math.PI / 4,
    },
  },
  front: {
    position: [0, 1.5, 12],
    target: [0, 1.5, 0],
    fov: 55,
    controls: {
      minDistance: 8,
      maxDistance: 15,
      minPolarAngle: Math.PI / 2,
      maxPolarAngle: Math.PI / 2,
      minAzimuthAngle: 0,
      maxAzimuthAngle: 0,
    },
  },
  inside: {
    position: [0, 1.5, 12],
    target: [0, 1.5, 0],
    fov: 55,
    controls: {
      minDistance: 5,
      maxDistance: 15,
      minPolarAngle: Math.PI / 2, // Set to PI/2 to prevent seeing above horizontal
      maxPolarAngle: Math.PI / 2, // Set to PI/2 to prevent seeing below horizontal
      minAzimuthAngle: -Math.PI / 6, // More restricted left rotation
      maxAzimuthAngle: Math.PI / 6, // More restricted right rotation
    },
  },
  scene: {
    position: [0, 1.5, 12],
    target: [0, 1.5, 0],
    fov: 65,
    controls: {
      minDistance: 5,
      maxDistance: 15,
      minPolarAngle: Math.PI / 2, // Set to PI/2 to prevent seeing above horizontal
      maxPolarAngle: Math.PI / 2, // Set to PI/2 to prevent seeing below horizontal
      minAzimuthAngle: -Math.PI / 6, // More restricted left rotation
      maxAzimuthAngle: Math.PI / 6, // More restricted right rotation
    },
  },
};

// Camera Controller component
function CameraController({ view, controls }) {
  const { camera } = useThree();
  const controlsRef = useRef();

  React.useEffect(() => {
    const config = VIEW_CONFIGS[view];
    if (config) {
      // Update camera position and target
      camera.position.set(...config.position);
      camera.fov = config.fov;
      camera.updateProjectionMatrix();

      // Update controls
      if (controlsRef.current) {
        controlsRef.current.target.set(...config.target);
        Object.assign(controlsRef.current, config.controls);
      }
    }
  }, [view, camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      dampingFactor={0.05}
      enableZoom={true}
      enablePan={false}
      enableRotate={true}
    />
  );
}

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
  const [currentView, setCurrentView] = useState("isometric");

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

  const handleViewChange = (viewType) => {
    setCurrentView(viewType);
  };

  return (
    <div id="canvas-container" ref={canvasRef}>
      <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
        <ScreenshotHandler onScreenshot={handleScreenshotTools} />

        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <CameraController view={currentView} />

        {/* Lighting setup */}
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

        {/* Position elevator */}
        <group position={[0, 3.5, -3]} scale={[4.4, 4, 4]}>
          <ModernElevator
            onDoorToggle={handleDoorToggle}
            currentView={currentView}
          />
        </group>
      </Canvas>

      <ElevatorControls
        onOpenDoor={handleOpenDoor}
        onCloseDoor={handleCloseDoor}
        isDoorOpen={isOpen}
        onTakeSnapshot={handleTakeSnapshot}
        onViewChange={handleViewChange}
      />
    </div>
  );
}

export default CanvasContainer;
