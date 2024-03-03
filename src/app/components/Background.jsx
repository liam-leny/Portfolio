import React, { useState, useEffect, useRef } from "react";
import styles from "./Background.module.css";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";

export default function Background({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          THREE,
          el: vantaRef.current,
          backgroundColor: 0x669966,
          color: 0xff6774,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 0.5,
        })
      );
      setIsLoading(false);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className={styles.background} ref={vantaRef}>
      {isLoading && (
        <div className={styles.loaderContainer}>
          <span className={styles.loader}></span>
        </div>
      )}
      {children}
    </div>
  );
}
