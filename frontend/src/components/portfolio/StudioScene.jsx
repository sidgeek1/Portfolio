import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

const LOW = new THREE.Color("#2a2d30");
const HIGH = new THREE.Color("#8a8f94");
const SIGNAL = new THREE.Color("#d4ff3a");
const WHITE = new THREE.Color("#edebe6");

function Controls({ autoRotate }) {
  const { camera, gl } = useThree();
  const ref = useRef();
  useEffect(() => {
    if (camera.aspect < 1) camera.position.multiplyScalar(1.55);
    const c = new OrbitControls(camera, gl.domElement);
    c.enableDamping = true;
    c.enablePan = false;
    c.minDistance = 7;
    c.maxDistance = 24;
    c.maxPolarAngle = Math.PI / 2.15;
    c.autoRotateSpeed = 0.7;
    ref.current = c;
    return () => c.dispose();
  }, [camera, gl]);
  useFrame(() => {
    if (!ref.current) return;
    ref.current.autoRotate = autoRotate;
    ref.current.update();
  });
  return null;
}

function Bar({ x, z, norm, active, onSelect, id }) {
  const ref = useRef();
  const mat = useRef();
  const [hover, setHover] = useState(false);
  const target = 0.2 + norm * 4.2;
  useFrame(() => {
    const m = ref.current;
    m.scale.y += (target - m.scale.y) * 0.08;
    m.position.y = m.scale.y / 2;
    const c = active ? SIGNAL : hover ? WHITE : LOW.clone().lerp(HIGH, norm);
    mat.current.color.lerp(c, 0.15);
    mat.current.emissive.lerp(active ? SIGNAL : LOW.clone().multiplyScalar(0), 0.15);
  });
  return (
    <mesh
      ref={ref}
      position={[x, 0.1, z]}
      scale={[1, 0.2, 1]}
      onPointerOver={(e) => { e.stopPropagation(); setHover(true); document.body.style.cursor = "pointer"; }}
      onPointerOut={() => { setHover(false); document.body.style.cursor = ""; }}
      onClick={(e) => { e.stopPropagation(); onSelect(id); }}
    >
      <boxGeometry args={[0.62, 1, 0.62]} />
      <meshStandardMaterial ref={mat} color="#2a2d30" emissiveIntensity={0.35} roughness={0.3} metalness={0.25} />
    </mesh>
  );
}

export default function StudioScene({ data, selected, onSelect, autoRotate }) {
  const flat = data.values.flat();
  const max = Math.max(...flat);
  const rows = data.rows.length;
  const cols = data.cols.length;
  return (
    <Canvas dpr={[1, 1.75]} camera={{ position: [8, 7, 9], fov: 40 }}>
      <color attach="background" args={["#0b0c0d"]} />
      <fog attach="fog" args={["#0b0c0d", 14, 30]} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[6, 12, 6]} intensity={1.5} />
      <pointLight position={[-6, 5, -4]} intensity={20} color="#d4ff3a" distance={16} />
      <gridHelper args={[14, 14, "#2f3336", "#1a1c1e"]} position={[0, 0.001, 0]} />
      {data.values.map((row, r) =>
        row.map((v, c) => {
          const id = `${r}-${c}`;
          return (
            <Bar
              key={id}
              id={id}
              x={(c - (cols - 1) / 2) * 1.05}
              z={(r - (rows - 1) / 2) * 1.25}
              norm={v / max}
              active={selected === id}
              onSelect={onSelect}
            />
          );
        }),
      )}
      <Controls autoRotate={autoRotate} />
    </Canvas>
  );
}
