import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        fullScreen: false,

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 120,
              links: {
                opacity: 0.6,
              },
            },
          },
        },

        particles: {
          number: { value: 80 },
          color: { value: "#ef4444" },
          opacity: { value: 0.7 },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 1,
          },
          links: {
            enable: true,
            opacity: 0.3,
            distance: 130,
          },
        },
      }}
    />
  );
}
