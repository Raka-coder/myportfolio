'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

 function LenisScroll({ children }) {
  useEffect(() => {
    // Deteksi perangkat mobile
    const isMobile = window.innerWidth <= 768;

    const lenis = new Lenis({
      smooth: true,
      smoothTouch: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: isMobile ? 0.5 : 1, // Sesuaikan multiplier
      touchMultiplier: isMobile ? 1.2 : 1, // Kontrol sensitivitas sentuhan
      infinite: false,
      normalizeWheel: true, // Normalisasi scroll
      lerp: 0.1, // Kontrol kelembutan
    });

    // Tangani event scroll manual
    lenis.on('scroll', (e) => {
      console.log('Scroll event:', e);
    });

    // Simpan instance global
    window.lenis = lenis;

    // Fungsi animasi frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return <>{children}</>;
}

export default LenisScroll;