import * as THREE from "three";

function addStar() {
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(400));
  const star = new THREE.Mesh(
    new THREE.SphereGeometry(0.25, 24, 24),
    new THREE.MeshStandardMaterial({ color: 0xffffff })
  );
  star.position.set(x, y, z);
  return star;
}

function Star(props) {
  const starArray = Array(1000)
    .fill()
    .map(() => addStar());

  return starArray.map((star) => {
    return (
      <mesh position={star.position}>
        <sphereGeometry args={[0.25, 24, 24]} />
        <meshStandardMaterial color={0xffffff} />
      </mesh>
    );
  });
}

export default Star;
