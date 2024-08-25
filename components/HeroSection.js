// components/HeroSection.js
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroSection = () => {
  const videoRef = useRef();
  const canvasRef = useRef();
  const meshRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const video = videoRef.current;
    video.src = "/tree.mp4";
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.style.display = 'block';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.style.position = 'absolute';
    video.style.top = '0';
    video.style.left = '0';

    const mouse = { x: 0, y: 0 };

    const onMouseMove = (event) => {
      const rect = canvasRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 4 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 4 + 1;
    };

    canvasRef.current.addEventListener('mousemove', onMouseMove);

    video.addEventListener('loadeddata', () => {
      const videoTexture = new THREE.VideoTexture(video);

      const geometry = new THREE.PlaneGeometry(4, 2, 32, 32);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          videoTexture: { value: videoTexture },
          mouse: { value: new THREE.Vector2() },
        },
        vertexShader: `
          uniform float time;
          uniform vec2 mouse;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            vec3 pos = position;

            if (mouse.y > 0.9) {
              pos.z += sin(pos.x * 10.0 + time) * 0.1 * (1.0 - uv.y);
            } else if (mouse.y < -0.9) {
              pos.z += sin(pos.x * 10.0 + time) * 0.1 * uv.y;
            } else if (mouse.x > 0.9) {
              pos.z += sin(pos.y * 10.0 + time) * 0.1 * (1.0 - uv.x);
            } else if (mouse.x < -0.9) {
              pos.z += sin(pos.y * 10.0 + time) * 0.1 * uv.x;
            }

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform sampler2D videoTexture;
          varying vec2 vUv;
          void main() {
            gl_FragColor = texture2D(videoTexture, vUv);
          }
        `,
      });

      const cloth = new THREE.Mesh(geometry, material);
      meshRef.current = cloth;
      scene.add(cloth);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        material.uniforms.time.value += 0.05;
        material.uniforms.mouse.value = mouse;
        
        if (mouse.y > 0.9) {
          cloth.position.y = -0.1;
        } else if (mouse.y < -0.9) {
          cloth.position.y = 0.1;
        } else {
          cloth.position.y = 0;
        }

        renderer.render(scene, camera);
      };

      animate();
    });

    return () => {
      canvasRef.current.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <video ref={videoRef} />
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
    </div>
  );
};

export default HeroSection;
