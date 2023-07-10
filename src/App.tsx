import { useEffect } from "react";
import "./App.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function App() {
  let model: THREE.Group;
  useEffect(() => {
    const sizes = {
      width: innerWidth,
      height: innerHeight,
    };

    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    );
    camera.position.set(0, 0, 2);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    const gltfLoader = new GLTFLoader();

    gltfLoader.load("./models/shiba.gltf", (gltf) => {
      model = gltf.scene;
      model.scale.set(1.3, 1.3, 1.3);
      model.rotation.y = -Math.PI / 3;
      scene.add(model);
    });

    const tick = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };

    tick();
  }, []);
  return (
    <>
      <canvas id="canvas"></canvas>
      <div className="mainContent"></div>
    </>
  );
}

export default App;
