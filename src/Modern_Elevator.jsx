import React, { useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import ElevatorCar from "./assets/Modern_Elevator.glb";

function Model(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF(ElevatorCar);
  const { actions } = useAnimations(animations, group);
  const [isOpen, setIsOpen] = useState(false);
  console.log({ animations });
  // Function to toggle door state
  const toggleDoor = () => {
    setIsOpen(!isOpen);
  };

  // Handle door animations using morph targets
  useEffect(() => {
    // Get all meshes that have morph targets for the door
    const doorMeshes = [
      nodes.mesh_2,
      nodes.mesh_3,
      nodes.mesh_9,
      nodes.mesh_10,
    ];

    // Set morph target influence based on door state
    doorMeshes.forEach((mesh) => {
      if (mesh && mesh.morphTargetInfluences) {
        mesh.morphTargetInfluences[0] = isOpen ? 1 : 0;
      }
    });
  }, [isOpen, nodes]);

  // Add click handler to the door meshes
  const handleDoorClick = (e) => {
    e.stopPropagation();
    toggleDoor();
  };

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cube_3">
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Object_7"
                  geometry={nodes.Object_7.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials["Material.004"]}
                />
                <mesh
                  name="Object_9"
                  geometry={nodes.Object_9.geometry}
                  material={materials["Material.009"]}
                />
                <mesh
                  name="Object_10"
                  geometry={nodes.Object_10.geometry}
                  material={materials["Material.010"]}
                />
                <mesh
                  name="Object_11"
                  geometry={nodes.Object_11.geometry}
                  material={materials["Material.011"]}
                />
              </group>
              <group
                name="Cube002_5"
                position={[0, 0, -0.017]}
                onClick={handleDoorClick}
              >
                <mesh
                  name="mesh_2"
                  geometry={nodes.mesh_2.geometry}
                  material={materials["Material.001"]}
                  morphTargetDictionary={nodes.mesh_2.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_2.morphTargetInfluences}
                />
              </group>
              <group
                name="Cube003_6"
                position={[0, 0, -0.017]}
                onClick={handleDoorClick}
              >
                <mesh
                  name="mesh_3"
                  geometry={nodes.mesh_3.geometry}
                  material={materials["Material.001"]}
                  morphTargetDictionary={nodes.mesh_3.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_3.morphTargetInfluences}
                />
              </group>
              <group name="Cube004_7">
                <mesh
                  name="Object_17"
                  geometry={nodes.Object_17.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Object_18"
                  geometry={nodes.Object_18.geometry}
                  material={materials["Material.002"]}
                />
              </group>
              <group
                name="Text_8"
                position={[-0.187, 0.939, 0.63]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_20"
                  geometry={nodes.Object_20.geometry}
                  material={materials["Material.003"]}
                />
              </group>
              <group
                name="Plane_9"
                position={[-0.187, 0.939, 0.63]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Object_22"
                  geometry={nodes.Object_22.geometry}
                  material={materials["Material.005"]}
                />
                <mesh
                  name="Object_23"
                  geometry={nodes.Object_23.geometry}
                  material={materials["Material.013"]}
                />
              </group>
              <group
                name="Plane001_10"
                position={[-0.87, 0.092, 0.63]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.432, 1, 1]}
              >
                <mesh
                  name="Object_25"
                  geometry={nodes.Object_25.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Object_26"
                  geometry={nodes.Object_26.geometry}
                  material={materials["Material.007"]}
                />
                <mesh
                  name="Object_27"
                  geometry={nodes.Object_27.geometry}
                  material={materials["Material.008"]}
                />
              </group>
              <group name="Cube005_11" position={[0, 0, -0.017]}>
                <mesh
                  name="Object_29"
                  geometry={nodes.Object_29.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Object_30"
                  geometry={nodes.Object_30.geometry}
                  material={materials["Material.008"]}
                />
              </group>
              <group
                name="Cube006_12"
                position={[0, 0, -0.057]}
                scale={[1.059, 1, 1]}
              >
                <mesh
                  name="mesh_9"
                  geometry={nodes.mesh_9.geometry}
                  material={materials["Material.001"]}
                  morphTargetDictionary={nodes.mesh_9.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_9.morphTargetInfluences}
                />
              </group>
              <group
                name="Cube007_13"
                position={[0, 0, -0.057]}
                scale={[1.059, 1, 1]}
              >
                <mesh
                  name="mesh_10"
                  geometry={nodes.mesh_10.geometry}
                  material={materials["Material.001"]}
                  morphTargetDictionary={nodes.mesh_10.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_10.morphTargetInfluences}
                />
              </group>
              <group name="Plane002_15" position={[0.374, -0.204, -0.028]}>
                <mesh
                  name="Object_40"
                  geometry={nodes.Object_40.geometry}
                  material={materials.Material}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(ElevatorCar);
export default Model;
