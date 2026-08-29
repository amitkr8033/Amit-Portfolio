import { useEffect, useRef, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

// Load and sort all 300 frame image URLs
const rawImages = import.meta.glob('./assets/Amit_images/*.jpg', {
  eager: true,
  import: 'default',
});

const frameUrls = Object.keys(rawImages)
  .sort((a, b) => {
    const numA = parseInt(a.match(/frame-(\d+)/)?.[1] || '0', 10);
    const numB = parseInt(b.match(/frame-(\d+)/)?.[1] || '0', 10);
    return numA - numB;
  })
  .map((key) => rawImages[key]);

const TOTAL_FRAMES = frameUrls.length;

function App() {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const animationFrameIdRef = useRef(null);

  // 1. Render specific frame to full-screen canvas
  const renderFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[index] || imagesRef.current[0];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    // Calculate aspect-ratio fit (cover mode: fills whole screen)
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = width / height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawHeight = height;
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // 2. Preload all images and render initial frame immediately
  useEffect(() => {
    const images = [];
    let firstLoaded = false;

    frameUrls.forEach((url, index) => {
      const img = new Image();
      img.src = url;

      img.onload = () => {
        // As soon as the first frame loads, render it immediately
        if (index === 0 && !firstLoaded) {
          firstLoaded = true;
          renderFrame(0);
        }
      };

      images[index] = img;
    });

    imagesRef.current = images;

    // In case frame 0 is already cached
    if (images[0] && images[0].complete && !firstLoaded) {
      firstLoaded = true;
      renderFrame(0);
    }
  }, [renderFrame]);

  // 3. Scroll tracking & Smooth animation loop (Lerp)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      renderFrame(Math.round(currentFrameRef.current));
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track scroll position over whole page
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(Math.max(scrollTop / maxScroll, 0), 1) : 0;

      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 60FPS / 120FPS smooth frame interpolation loop
    let lastRenderedIndex = -1;
    const loop = () => {
      // Easing / smoothing factor (0.15 = buttery smooth responsive tracking)
      const diff = targetFrameRef.current - currentFrameRef.current;
      currentFrameRef.current += diff * 0.15;

      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(currentFrameRef.current))
      );

      if (frameIndex !== lastRenderedIndex) {
        renderFrame(frameIndex);
        lastRenderedIndex = frameIndex;
      }

      animationFrameIdRef.current = requestAnimationFrame(loop);
    };

    animationFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [renderFrame]);

  return (
    <div className="relative w-full bg-black text-white min-h-screen">
      {/* Floating Glassmorphic Navbar */}
      <Navbar />

      {/* Floating Sticky WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Full-screen Fixed Canvas Background */}
      <div className="fixed inset-0 w-full h-full flex items-center justify-center pointer-events-none bg-black">
        <canvas
          ref={canvasRef}
          className="w-full h-full block object-cover"
          style={{ width: '100vw', height: '100vh' }}
        />
      </div>

      {/* Content Sections Layer */}
      <div className="relative z-10 flex flex-col gap-24 pb-12">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;