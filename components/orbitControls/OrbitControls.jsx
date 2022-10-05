import { extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Home from "../../pages";

extend({ OrbitControls });

// function moveCamera() {
//   const t = Home.body.getBoundingClientRect().top;
//   camera.position.z = t * -0.01;
//   camera.position.x = t * -0.0002;
//   camera.position.y = t * -0.0002;
// }
// Home.body.onscroll = moveCamera;

function Controls(props) {
  const { camera, gl } = useThree();
  return (
    <orbitControls attach={"orbitControls"} args={[camera, gl.domElement]} />
  );
}

export default Controls;
