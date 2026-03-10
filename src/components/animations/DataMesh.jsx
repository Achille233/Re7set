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

        const createParticle = () => {
            const p = {
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
            };
            p.baseX = p.x;
            p.baseY = p.y;

            p.update = () => {
                p.baseX += p.vx;
                p.baseY += p.vy;

                if (p.baseX < 0) p.baseX = width;
                if (p.baseX > width) p.baseX = 0;
                if (p.baseY < 0) p.baseY = height;
                if (p.baseY > height) p.baseY = 0;

                const dxCenter = p.baseX - cx;
                const dyCenter = p.baseY - cy;
                const distCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
                const originalAngle = Math.atan2(dyCenter, dxCenter);
                const newAngle = originalAngle + angleOffset;

                let targetX = cx + Math.cos(newAngle) * distCenter;
                let targetY = cy + Math.sin(newAngle) * distCenter;

                const dxMouse = targetX - mouse.x;
                const dyMouse = targetY - mouse.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distMouse < mouseRadius) {
                    const forceDirectionX = dxMouse / distMouse;
                    const forceDirectionY = dyMouse / distMouse;
                    const force = (mouseRadius - distMouse) / mouseRadius;
                    targetX += forceDirectionX * force * 40;
                    targetY += forceDirectionY * force * 40;
                }

                p.x += (targetX - p.x) * 0.1;
                p.y += (targetY - p.y) * 0.1;
            };

            p.draw = () => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(9, 9, 11, 0.15)';
                ctx.fill();
            };

            return p;
        };

        for (let i = 0; i < particleCount; i++) {
            particles.push(createParticle());
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
