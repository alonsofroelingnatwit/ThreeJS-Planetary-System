import * as THREE from "three";
import index from "../../pages/index";

function moveCamera() {
  const t = index.body.getBoundingClientRect().top;
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
  index.body.onscroll = moveCamera;
  return (index.body.onscroll = moveCamera);
}

function Introduction() {
  return (
    <mesh>
      <textGeometry
        args={[
          "Hello World",
          {
            font: new THREE.FontLoader().parse(font),
            size: 0.5,
            height: 0.2,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5,
          },
        ]}
      />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
}

export default moveCamera;
