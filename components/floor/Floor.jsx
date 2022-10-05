// import { useLoader } from "@react-three/fiber";
// import { TextureLoader } from "three";

function Floor(props) {
  //   const texture = useLoader(TextureLoader, "/components/floor/floor.jpg");
  return (
    <mesh {...props} receiveShadow={true}>
      <boxBufferGeometry args={[100, 0.1, 100]} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
}

export default Floor;
