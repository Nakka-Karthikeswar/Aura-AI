import React, { useRef, useEffect } from 'react';

const QuantumField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let particles = [];

    // Theme Colors (Cyan and Purple)
    const colors = ['rgba(0, 210, 255, ', 'rgba(192, 132, 252, '];

    // Create Particles
    for(let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3, // Slower, smoother movement
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        colorBase: colors[Math.floor(Math.random() * colors.length)], // Randomly pick Cyan or Purple
        alpha: Math.random()
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls smoothly
        if(p.x < 0 || p.x > width) p.vx *= -1;
        if(p.y < 0 || p.y > height) p.vy *= -1;

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        // Dynamic Alpha for twinkling effect
        ctx.fillStyle = p.colorBase + '0.7)'; 
        ctx.fill();

        // Draw Lines (Entanglement visual)
        particles.forEach((p2, index2) => {
          if (index !== index2) {
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distance = Math.sqrt(dx*dx + dy*dy);

            // Connect if close enough
            if (distance < 120) {
              ctx.beginPath();
              // Calculate opacity based on distance (closer = brighter)
              const opacity = 1 - (distance / 120);
              ctx.strokeStyle = `rgba(100, 100, 255, ${opacity * 0.2})`; // Subtle violet connections
              ctx.lineWidth = 0.5;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set background to transparent so the CSS Gradient shows through
  return <canvas ref={canvasRef} style={{position: 'absolute', top:0, left:0, zIndex: 0, background: 'transparent'}} />;
};

export default QuantumField;