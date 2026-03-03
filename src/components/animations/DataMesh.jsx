import React, { useEffect, useRef } from 'react';

export default function DataMesh() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const particles = [];
        const particleCount = 120;
        const maxDistance = 200;
        const mouseRadius = 180;

        const mouse = { x: -1000, y: -1000 };

        // Global rotation center
        const cx = width / 2;
        const cy = height / 2;
        let angleOffset = 0;

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                // Keep original positions to calculate slow rotation + mouse repulsion
                this.baseX = this.x;
                this.baseY = this.y;

                // Random subtle movement
                this.vx = (Math.random() - 0.5) * 0.2;
                this.vy = (Math.random() - 0.5) * 0.2;
            }

            update() {
                // Linear drift
                this.baseX += this.vx;
                this.baseY += this.vy;

                // Wrap around
                if (this.baseX < 0) this.baseX = width;
                if (this.baseX > width) this.baseX = 0;
                if (this.baseY < 0) this.baseY = height;
                if (this.baseY > height) this.baseY = 0;

                // Apply global slow rotation around center
                const dxCenter = this.baseX - cx;
                const dyCenter = this.baseY - cy;
                const distCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
                const originalAngle = Math.atan2(dyCenter, dxCenter);
                const newAngle = originalAngle + angleOffset;

                let targetX = cx + Math.cos(newAngle) * distCenter;
                let targetY = cy + Math.sin(newAngle) * distCenter;

                // Mouse repulsion
                const dxMouse = targetX - mouse.x;
                const dyMouse = targetY - mouse.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distMouse < mouseRadius) {
                    const forceDirectionX = dxMouse / distMouse;
                    const forceDirectionY = dyMouse / distMouse;
                    const force = (mouseRadius - distMouse) / mouseRadius;
                    // Subtler repulsion, max 40px push
                    targetX += forceDirectionX * force * 40;
                    targetY += forceDirectionY * force * 40;
                }

                // Smooth transition to target
                this.x += (targetX - this.x) * 0.1;
                this.y += (targetY - this.y) * 0.1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(9, 9, 11, 0.15)'; // Very subtle nodes
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const drawLines = () => {
            for (let i = 0; i < particleCount; i++) {
                for (let j = i + 1; j < particleCount; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        // Opacity scales with distance, max 6%
                        const opacity = (1 - dist / maxDistance) * 0.06;
                        ctx.strokeStyle = `rgba(9, 9, 11, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            angleOffset += 0.0002; // Very slow rotation

            for (let i = 0; i < particleCount; i++) {
                particles[i].update();
                particles[i].draw();
            }

            drawLines();

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none -z-10"
            aria-hidden="true"
        />
    );
}
