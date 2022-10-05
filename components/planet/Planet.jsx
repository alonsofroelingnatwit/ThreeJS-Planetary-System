import { Sphere } from "three";

function Planet(props) {
  return (
    <mesh {...props} receiveShadow={true} castShadow={true}>
      <sphereBufferGeometry args={[10, 10, 10]} />
      <meshStandardMaterial color={"green"} />
    </mesh>
  );
}

export default Planet;
