import React, { useRef, useEffect, useState } from 'react';

const RocketGame = ({ isActive, onClose }) => {
  const [loadError, setLoadError] = useState(false);
  const mountRef = useRef(null);
  
  useEffect(() => {
    if (!isActive) return;
    
    let THREE;
    let OrbitControls;
    let cleanupFn = () => {};
    
    const initializeGame = async () => {
      try {
        // Dynamically import three.js
        THREE = await import('three');
        const OrbitControlsModule = await import('three/examples/jsm/controls/OrbitControls');
        OrbitControls = OrbitControlsModule.OrbitControls;
        
        // The rest of the game setup code
        // Now using imported THREE and OrbitControls
        const sceneRef = { current: null };
        const cameraRef = { current: null };
        const rendererRef = { current: null };
        const rocketRef = { current: null };
        const controlsRef = { current: null };
        const animationFrameRef = { current: null };
        const keysPressed = {
          current: {
            w: false,
            a: false,
            s: false,
            d: false,
            ArrowUp: false,
            ArrowDown: false,
            ArrowLeft: false,
            ArrowRight: false,
            ' ': false, // space
          }
        };
        
        const velocity = { current: { x: 0, y: 0, z: 0 } };
        const speed = 0.1;
        const rotationSpeed = 0.03;
        
        // Setup scene
        const scene = new THREE.Scene();
        sceneRef.current = scene;
        scene.background = new THREE.Color(0x000000);
        
        // Add stars
        addStarsToScene(scene, THREE);
        
        // Add lights
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(10, 10, 10);
        scene.add(directionalLight);
        
        // Create camera
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.z = 10;
        cameraRef.current = camera;
        
        // Create renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        rendererRef.current = renderer;
        
        // Add renderer to DOM
        if (mountRef.current) {
          mountRef.current.appendChild(renderer.domElement);
        }
        
        // Create rocket
        createRocket(scene, THREE);
        
        // Setup controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controlsRef.current = controls;
        
        // Handle window resize
        const handleResize = () => {
          const width = window.innerWidth;
          const height = window.innerHeight;
          
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          
          renderer.setSize(width, height);
        };
        
        window.addEventListener('resize', handleResize);
        
        // Handle keyboard input
        const handleKeyDown = (e) => {
          if (keysPressed.current.hasOwnProperty(e.key)) {
            keysPressed.current[e.key] = true;
            e.preventDefault();
          }
          
          // ESC key to close
          if (e.key === 'Escape') {
            onClose();
          }
        };
        
        const handleKeyUp = (e) => {
          if (keysPressed.current.hasOwnProperty(e.key)) {
            keysPressed.current[e.key] = false;
          }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        
        // Animation loop
        function animate() {
          if (!sceneRef.current || !rendererRef.current) return;
          
          const rocket = rocketRef.current;
          if (rocket) {
            // Apply movement based on keys pressed
            if (keysPressed.current.w || keysPressed.current.ArrowUp) {
              velocity.current.z -= speed;
            }
            if (keysPressed.current.s || keysPressed.current.ArrowDown) {
              velocity.current.z += speed;
            }
            if (keysPressed.current.a || keysPressed.current.ArrowLeft) {
              rocket.rotation.y += rotationSpeed;
            }
            if (keysPressed.current.d || keysPressed.current.ArrowRight) {
              rocket.rotation.y -= rotationSpeed;
            }
            if (keysPressed.current[' ']) { // Space to boost upwards
              velocity.current.y += speed;
            }
            
            // Apply velocity with direction
            const direction = new THREE.Vector3(0, 0, -1);
            direction.applyQuaternion(rocket.quaternion);
            
            rocket.position.x += direction.x * velocity.current.z;
            rocket.position.y += velocity.current.y;
            rocket.position.z += direction.z * velocity.current.z;
            
            // Apply drag
            velocity.current.x *= 0.95;
            velocity.current.y *= 0.95;
            velocity.current.z *= 0.95;
            
            // Update camera to follow rocket
            const offset = new THREE.Vector3(0, 2, 10);
            offset.applyQuaternion(rocket.quaternion);
            cameraRef.current.position.copy(rocket.position).add(offset);
            cameraRef.current.lookAt(rocket.position);
          }
          
          if (controlsRef.current) {
            controlsRef.current.update();
          }
          
          rendererRef.current.render(sceneRef.current, cameraRef.current);
          animationFrameRef.current = requestAnimationFrame(animate);
        }
        
        function createRocket(scene, THREE) {
          // Create a group to hold all rocket parts
          const rocketGroup = new THREE.Group();
          
          // Rocket body (cylinder)
          const bodyGeometry = new THREE.CylinderGeometry(0.5, 0.5, 4, 16);
          const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
          const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
          rocketGroup.add(body);
          
          // Rocket nose (cone)
          const noseGeometry = new THREE.ConeGeometry(0.5, 1, 16);
          const noseMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
          const nose = new THREE.Mesh(noseGeometry, noseMaterial);
          nose.position.y = 2.5;
          rocketGroup.add(nose);
          
          // Rocket fins
          const finGeometry = new THREE.BoxGeometry(0.1, 1, 1);
          const finMaterial = new THREE.MeshPhongMaterial({ color: 0xdddddd });
          
          // Add 3 fins around the base
          for (let i = 0; i < 3; i++) {
            const fin = new THREE.Mesh(finGeometry, finMaterial);
            fin.position.y = -1.5;
            fin.position.x = Math.sin((i * Math.PI * 2) / 3) * 0.8;
            fin.position.z = Math.cos((i * Math.PI * 2) / 3) * 0.8;
            fin.lookAt(fin.position.clone().multiplyScalar(2));
            rocketGroup.add(fin);
          }
          
          // Add rocket flames (cone)
          const flameGeometry = new THREE.ConeGeometry(0.3, 1.5, 16);
          const flameMaterial = new THREE.MeshBasicMaterial({ 
            color: 0xff9500,
            transparent: true,
            opacity: 0.8
          });
          const flame = new THREE.Mesh(flameGeometry, flameMaterial);
          flame.position.y = -2.5;
          flame.rotation.x = Math.PI; // Flip the cone
          rocketGroup.add(flame);
          
          scene.add(rocketGroup);
          rocketRef.current = rocketGroup;
        }
        
        function addStarsToScene(scene, THREE) {
          const starsGeometry = new THREE.BufferGeometry();
          const starsMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.1
          });
          
          const starsVertices = [];
          for (let i = 0; i < 5000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            starsVertices.push(x, y, z);
          }
          
          starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
          const stars = new THREE.Points(starsGeometry, starsMaterial);
          scene.add(stars);
        }
        
        // Start animation loop
        animationFrameRef.current = requestAnimationFrame(animate);
        
        // Setup cleanup function
        cleanupFn = () => {
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('keydown', handleKeyDown);
          window.removeEventListener('keyup', handleKeyUp);
          
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }
          
          if (mountRef.current && rendererRef.current) {
            mountRef.current.removeChild(rendererRef.current.domElement);
          }
        };
      } catch (error) {
        console.error('Failed to load Three.js:', error);
        setLoadError(true);
      }
    };
    
    initializeGame();
    
    return cleanupFn;
  }, [isActive, onClose]);
  
  if (!isActive) return null;
  
  if (loadError) {
    return (
      <div className="rocket-game-error" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1000,
        backgroundColor: 'rgba(0,0,0,0.9)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px'
      }}>
        <h2>Oops! Couldn't load the rocket game.</h2>
        <p>There was an issue loading the game resources.</p>
        <button 
          onClick={onClose}
          style={{
            padding: '10px 20px',
            backgroundColor: '#ff0000',
            border: 'none',
            borderRadius: '5px',
            color: 'white',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Close
        </button>
      </div>
    );
  }
  
  return (
    <div className="rocket-game">
      <div 
        ref={mountRef} 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1000
        }}
      />
      <div
        style={{
          position: 'fixed',
          bottom: 20,
          left: 20,
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          padding: 10,
          borderRadius: 5,
          zIndex: 1001
        }}
      >
        <h3>Rocket Game Controls</h3>
        <p>W/Up Arrow: Accelerate forward</p>
        <p>S/Down Arrow: Accelerate backward</p>
        <p>A/Left Arrow: Rotate left</p>
        <p>D/Right Arrow: Rotate right</p>
        <p>Space: Boost upward</p>
        <p>ESC: Close game</p>
      </div>
    </div>
  );
};

export default RocketGame;
