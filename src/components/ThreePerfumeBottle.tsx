import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreePerfumeBottleProps {
  scrollProgress?: number;
  interactive?: boolean;
}

export const ThreePerfumeBottle: React.FC<ThreePerfumeBottleProps> = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Detect software WebGL per directives
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    // 2. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070709, 0.04);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 5.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 3. Studio Lighting Rig for Luxury Crystal & Gold Refraction
    const keyGoldLight = new THREE.DirectionalLight(0xE8B966, 3.2);
    keyGoldLight.position.set(4, 5, 4);
    scene.add(keyGoldLight);

    const rimLight = new THREE.DirectionalLight(0xFDF5E6, 2.0);
    rimLight.position.set(-4, 3, -3);
    scene.add(rimLight);

    const softFillLight = new THREE.DirectionalLight(0x7A6A50, 1.2);
    softFillLight.position.set(0, -3, 3);
    scene.add(softFillLight);

    const ambient = new THREE.AmbientLight(0x1F1A14, 1.5);
    scene.add(ambient);

    // 4. Composite Luxury Flacon Model (THREE.Group)
    const bottleMasterGroup = new THREE.Group();
    scene.add(bottleMasterGroup);

    // Dynamic Label Canvas Texture
    const createLabelTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 380;
      const ctx = canvas.getContext('2d');
      if (!ctx) return new THREE.Texture();

      // Matte dark gold parchment
      ctx.fillStyle = '#0F0E0D';
      ctx.fillRect(0, 0, 512, 380);

      // Gold border
      ctx.strokeStyle = '#C8A252';
      ctx.lineWidth = 6;
      ctx.strokeRect(16, 16, 480, 348);

      ctx.strokeStyle = '#8F6E26';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(26, 26, 460, 328);

      // Brand Typography
      ctx.fillStyle = '#E7C982';
      ctx.font = '700 36px "Cinzel", Georgia, serif';
      ctx.textAlign = 'center';
      ctx.fillText('RANPHERIS ARIMA', 256, 120);

      ctx.fillStyle = '#A89F91';
      ctx.font = '600 16px "Plus Jakarta Sans", sans-serif';
      ctx.letterSpacing = '4px';
      ctx.fillText('HAUTE PARFUMERIE', 256, 165);

      ctx.fillStyle = '#C8A252';
      ctx.font = '700 22px "Cinzel", serif';
      ctx.fillText('NOIR ABSOLU', 256, 230);

      ctx.fillStyle = '#6E675E';
      ctx.font = '500 13px sans-serif';
      ctx.fillText('EXTRAIT DE PARFUM · 100ML 3.4 FL.OZ', 256, 290);

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    };

    // Part A: Heavy Faceted Crystal Glass Outer Body
    const glassGeo = new THREE.BoxGeometry(1.6, 2.3, 0.95);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xFAFAFA,
      metalness: 0.05,
      roughness: 0.08,
      transmission: isSoftwareGl ? 0 : 0.9,
      transparent: true,
      opacity: isSoftwareGl ? 0.35 : 0.98,
      ior: 1.52,
      thickness: 1.2,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
    });
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    bottleMasterGroup.add(glassMesh);

    // Part B: Inner Amber Fragrance Liquid
    const liquidGeo = new THREE.BoxGeometry(1.36, 1.95, 0.74);
    const liquidMat = new THREE.MeshStandardMaterial({
      color: 0xC88220,
      metalness: 0.2,
      roughness: 0.15,
      transparent: true,
      opacity: 0.82,
    });
    const liquidMesh = new THREE.Mesh(liquidGeo, liquidMat);
    liquidMesh.position.y = -0.1;
    bottleMasterGroup.add(liquidMesh);

    // Part C: Front Gold Embossed Label Plate
    const labelGeo = new THREE.PlaneGeometry(1.05, 0.75);
    const labelTexture = createLabelTexture();
    const labelMat = new THREE.MeshStandardMaterial({
      map: labelTexture,
      metalness: 0.6,
      roughness: 0.3,
    });
    const labelMesh = new THREE.Mesh(labelGeo, labelMat);
    labelMesh.position.set(0, 0.05, 0.485);
    bottleMasterGroup.add(labelMesh);

    // Part D: Metallic Gold Atomizer Collar
    const collarGeo = new THREE.CylinderGeometry(0.32, 0.36, 0.35, 32);
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xC8A252,
      metalness: 0.95,
      roughness: 0.18,
    });
    const collarMesh = new THREE.Mesh(collarGeo, goldMat);
    collarMesh.position.y = 1.25;
    bottleMasterGroup.add(collarMesh);

    // Part E: Heavy Magnetic Octagonal Cap with Beveled Finial
    const capGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.65, 8);
    const capMat = new THREE.MeshStandardMaterial({
      color: 0x141210,
      metalness: 0.9,
      roughness: 0.2,
    });
    const capMesh = new THREE.Mesh(capGeo, capMat);
    capMesh.position.y = 1.7;
    bottleMasterGroup.add(capMesh);

    // Gold Inset Crown Ring on Cap
    const capRingGeo = new THREE.CylinderGeometry(0.43, 0.43, 0.08, 32);
    const capRing = new THREE.Mesh(capRingGeo, goldMat);
    capRing.position.y = 1.7;
    bottleMasterGroup.add(capRing);

    // Part F: Soft Contact Shadow Plane Grounding
    const shadowGeo = new THREE.PlaneGeometry(4.5, 4.5);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      const g = sCtx.createRadialGradient(128, 128, 10, 128, 128, 120);
      g.addColorStop(0, 'rgba(0, 0, 0, 0.85)');
      g.addColorStop(0.5, 'rgba(0, 0, 0, 0.4)');
      g.addColorStop(1, 'rgba(0, 0, 0, 0)');
      sCtx.fillStyle = g;
      sCtx.fillRect(0, 0, 256, 256);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -1.6;
    scene.add(shadowMesh);

    // 5. Floating Gold Particle Dust & Scent Atmosphere
    const particleCount = isSoftwareGl ? 35 : 120;
    const particleGeo = new THREE.BufferGeometry();
    const posArr = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArr[i] = (Math.random() - 0.5) * 8;
      posArr[i + 1] = (Math.random() - 0.5) * 6;
      posArr[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0xE8B966,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. Interactive Mouse & Scroll Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 7. Animation Loop with continuous 360-degree rotation & scroll transformation
    let frameId: number;
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // Scroll-driven progression
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollFraction = Math.min(1, Math.max(0, scrollY / (window.innerHeight * 2.2)));

      // Continuous 360 rotation + scroll influence
      const continuousBaseRot = elapsed * 0.45;
      bottleMasterGroup.rotation.y = continuousBaseRot + scrollFraction * 2.5 + mouse.x * 0.35;
      bottleMasterGroup.rotation.x = Math.sin(elapsed * 0.8) * 0.05 + (-mouse.y * 0.2) + scrollFraction * 0.15;
      bottleMasterGroup.rotation.z = Math.cos(elapsed * 0.6) * 0.03 + (mouse.x * 0.1);

      // Subtle organic floating levitation on Y
      bottleMasterGroup.position.y = Math.sin(elapsed * 1.2) * 0.12 - scrollFraction * 0.6;
      bottleMasterGroup.position.x = mouse.x * 0.2 + (scrollFraction > 0.2 ? Math.min(1.4, (scrollFraction - 0.2) * 2.2) : 0);

      // Scale responds subtly to scroll
      const scale = 1.0 - scrollFraction * 0.15;
      bottleMasterGroup.scale.set(scale, scale, scale);

      // Rotating key light around bottle for shifting caustics
      keyGoldLight.position.x = Math.sin(elapsed * 0.6) * 4;
      keyGoldLight.position.z = Math.cos(elapsed * 0.6) * 4;

      // Particle drift
      particles.rotation.y = elapsed * 0.03;
      particles.rotation.x = Math.sin(elapsed * 0.02) * 0.2;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    };

    tick();

    // Clean disposal
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      glassGeo.dispose();
      glassMat.dispose();
      liquidGeo.dispose();
      liquidMat.dispose();
      labelGeo.dispose();
      labelMat.dispose();
      collarGeo.dispose();
      capGeo.dispose();
      capRingGeo.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 h-full w-full pointer-events-none z-0 overflow-hidden"
    />
  );
};
