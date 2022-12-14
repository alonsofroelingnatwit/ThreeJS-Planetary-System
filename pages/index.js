import Head from "next/head";
import * as THREE from "three";
import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import OrbitControls from "../components/orbitControls/OrbitControls";
import Star from "../components/star/Star";
import Planet from "../components/planet/Planet";
import Introduction from "../components/introduction/Introduction";

export default function Home() {
  const cameraParams = {
    position: [0, 0, -10],
    fov: 75,
    near: 0.1,
    far: 1000,
  };

  const scene = new THREE.Scene();

  return (
    <div className={styles.scene}>
      <Head>
        <title>Nicolas Alonso Froeling</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Canvas
        Shadows={true}
        className={styles.canvas}
        camera={cameraParams}
        scene={scene}
      >
        <ambientLight color={"white"} intensity={0.5} />
        <OrbitControls />
        {/* <Floor position={[0, -1, 0]} /> */}
        <Star />
        {/* <Introduction position={[0, 0, 0]} /> */}
        <Planet position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}
