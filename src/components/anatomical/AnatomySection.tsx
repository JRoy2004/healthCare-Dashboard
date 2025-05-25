import HealthStatusCard from "./HealthStatusCard";
import model from "../../assets/model.glb";
import { MoveRight } from "lucide-react";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";

const AnatomySection: React.FC = () => {
  const { nodes } = useGLTF(model);
  console.log(nodes);
  return (
    <div className="bg-white  relative overflow-visible">
      <div className="flex flex-col xs:flex-row gap-8 items-center justify-center">
        <div className="relative flex-3 w-screen xs:w-[75%] h-[400px] flex items-center justify-center bg-primary-ultralight rounded-2xl pb-4 -mb-8 overflow-visible">
          <Canvas camera={{ position: [0, 0, 5] }} className="w-full h-screen ">
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 5]} />
            <Suspense fallback={null}>
              <Model />
              <mesh position={[0.6, 1.2, 0.3]}>
                {/* Optional: tiny sphere to anchor the Html, can be invisible */}
                <sphereGeometry args={[0.01, 8, 8]} />
                <meshBasicMaterial opacity={0} />
                <Html
                  distanceFactor={10}
                  style={{ overflow: "visible", zIndex: 10 }}
                >
                  <div className="">
                    <div className="relative w-6 h-6 rounded-md bg-transparent corner-box corner-box2 right-6 bottom-4 " />
                    <div className="relative bottom-10 left-4 bg-primary-dark text-white px-2 py-2 rounded-lg text-[6px] shadow-md flex items-center gap-2 whitespace-nowrap">
                      ❤️ Healthy Heart
                    </div>
                  </div>
                </Html>
              </mesh>
              <mesh position={[-0.3, -1.3, 0.3]}>
                {/* Optional: tiny sphere to anchor the Html, can be invisible */}
                <sphereGeometry args={[0.01, 8, 8]} />
                <meshBasicMaterial opacity={0} />
                <Html
                  distanceFactor={10}
                  style={{ overflow: "visible", zIndex: 10 }}
                >
                  <div className="">
                    <div className="relative w-6 h-6 rounded-md bg-transparent corner-box corner-box2 right-6 bottom-4 " />
                    <div className="relative bottom-10 -left-[90px] z-2 bg-primary-medium text-primary-dark px-2 py-2 rounded-lg text-[6px] shadow-md flex items-center gap-2 whitespace-nowrap">
                      🦵🏼 Healthy Leg
                    </div>
                  </div>
                </Html>
              </mesh>
              <mesh position={[0.2, -1, 0.3]}>
                {/* Optional: tiny sphere to anchor the Html, can be invisible */}
                <sphereGeometry args={[0.01, 8, 8]} />
                <meshBasicMaterial opacity={0} />
                <Html distanceFactor={10}></Html>
              </mesh>
            </Suspense>
            <OrbitControls
              enableZoom={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
              minAzimuthAngle={-Math.PI / 5} // Limits horizontal rotation to left (-30 degrees)
              maxAzimuthAngle={Math.PI / 5} // Limits horizontal rotation to right (30 degrees)
            />
          </Canvas>
        </div>

        <div className="flex flex-1 w-[25%] flex-col gap-4 mt-6 xs:-mt-10  items-center">
          <HealthStatusCard
            id="lungs"
            name="Lungs"
            status="good"
            date="Date: 26 Oct 2021"
          />
          <HealthStatusCard
            id="teeth"
            name="Teeth"
            status="good"
            date="Date: 26 Oct 2021"
          />
          <HealthStatusCard
            id="bone"
            name="Bone"
            status="good"
            date="Date: 26 Oct 2021"
          />
        </div>
      </div>
      <p className="flex flex-row text-primary-dark text-xs mr-8 mt-4 ml-auto max-w-[70px] gap-2">
        Details
        <MoveRight strokeWidth={3} color="rgba(47,50,156,255)" size={15} />
      </p>
    </div>
  );
};

export default AnatomySection;

function Model() {
  const gltf = useGLTF(model);
  return <primitive object={gltf.scene} scale={[3.1, 3.1, 3.1]} />;
}

useGLTF.preload(model);
