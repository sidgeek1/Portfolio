import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const DARK = new THREE.Color("#26292c");
const MID = new THREE.Color("#5b6066");
const SIGNAL = new THREE.Color("#d4ff3a");

function Field({ n, mouse }) {
  const ref = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const color = useMemo(() => new THREE.Color(), []);
  const ray = useMemo(() => new THREE.Raycaster(), []);
  const plane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), []);
  const hit = useMemo(() => new THREE.Vector3(99, 0, 99), []);
  const focus = useRef(new THREE.Vector3(2, 0, 0));
  const gap = 0.46;

  useLayoutEffect(() => {
    for (let i = 0; i < n * n; i++) ref.current.setColorAt(i, DARK);
  }, [n]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const cam = state.camera;
    const dt = Math.min(delta, 0.1);
    const ease = 1 - Math.exp(-dt * 2.5);
    cam.position.x += (mouse.current.x * 1.6 - cam.position.x) * ease;
    cam.position.y += (7 + mouse.current.y * 0.8 - cam.position.y) * ease;
    cam.lookAt(0, 0.4, 0);

    if (mouse.current.active && t - mouse.current.t < 2.5) {
      ray.setFromCamera(mouse.current, cam);
      if (ray.ray.intersectPlane(plane, hit)) focus.current.lerp(hit, 1 - Math.exp(-dt * 8));
    } else {
      hit.set(Math.cos(t * 0.35) * 4, 0, Math.sin(t * 0.5) * 2.5);
      focus.current.lerp(hit, 1 - Math.exp(-dt * 2));
    }
    let i = 0;
    for (let x = 0; x < n; x++) {
      for (let z = 0; z < n; z++) {
        const wx = (x - n / 2) * gap;
        const wz = (z - n / 2) * gap;
        const d = Math.hypot(wx - focus.current.x, wz - focus.current.z);
        const bump = Math.max(0, 2.6 - d);
        const wave = Math.sin(wx * 0.55 + t * 0.7) + Math.cos(wz * 0.45 + t * 0.5);
        const h = 0.25 + (wave + 2) * 0.32 + bump * bump * 0.45;
        dummy.position.set(wx, h / 2, wz);
        dummy.scale.set(1, h, 1);
        dummy.updateMatrix();
        ref.current.setMatrixAt(i, dummy.matrix);
        const k = Math.min(1, bump / 2.2);
        color.copy(DARK).lerp(MID, Math.min(1, (wave + 2) / 4));
        if (k > 0) color.lerp(SIGNAL, k);
        ref.current.setColorAt(i, color);
        i++;
      }
    }
    ref.current.instanceMatrix.needsUpdate = true;
    ref.current.instanceColor.needsUpdate = true;
    ref.current.rotation.y = Math.sin(t * 0.08) * 0.12;
  });

  return (
    <instancedMesh ref={ref} args={[null, null, n * n]}>
      <boxGeometry args={[0.34, 1, 0.34]} />
      <meshStandardMaterial roughness={0.35} metalness={0.3} />
    </instancedMesh>
  );
}

function Dust({ count = 400 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      a[i * 3] = (Math.random() - 0.5) * 24;
      a[i * 3 + 1] = Math.random() * 8;
      a[i * 3 + 2] = (Math.random() - 0.5) * 24;
    }
    return a;
  }, [count]);
  useFrame((s) => { ref.current.rotation.y = s.clock.elapsedTime * 0.02; });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#edebe6" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export default function HeroScene() {
  const mouse = useRef({ x: 0, y: 0, active: false, t: -10 });
  const small = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const start = performance.now() / 1000;
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.current.active = true;
      mouse.current.t = performance.now() / 1000 - start;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <Canvas dpr={[1, 1.75]} camera={{ position: [0, 7, 10], fov: 42 }} gl={{ antialias: true }}>
      <color attach="background" args={["#08090a"]} />
      <fog attach="fog" args={["#08090a", 9, 22]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 4]} intensity={2} />
      <pointLight position={[-4, 3, 2]} intensity={18} color="#d4ff3a" distance={12} />
      <Field n={small ? 22 : 36} mouse={mouse} />
      <Dust count={small ? 200 : 450} />
    </Canvas>
  );
}
