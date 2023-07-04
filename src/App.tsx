import { useEffect } from "react";
import "./App.css";
import * as THREE from "three";

function App() {
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

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

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
