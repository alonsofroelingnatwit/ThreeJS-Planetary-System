function Box(props) {
  return (
    <mesh {...props} receiveShadow={true} castShadow={true}>
      <boxBufferGeometry />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
}

export default Box;
