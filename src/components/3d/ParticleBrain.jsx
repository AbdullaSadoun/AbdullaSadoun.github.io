import { useCallback, useEffect, useState } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"

function ParticleBrain() {
  const [opacity, setOpacity] = useState(0.7)
  
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine)
  }, [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // Calculate fade out over one screen height
      const fadeOutPoint = windowHeight * 0.2
      const fadeOutDistance = windowHeight * 0.8
      
      if (scrollPosition < fadeOutPoint) {
        setOpacity(0.7)
      } else if (scrollPosition < fadeOutDistance) {
        const factor = 1 - (scrollPosition - fadeOutPoint) / (fadeOutDistance - fadeOutPoint)
        setOpacity(0.7 * factor)
      } else {
        setOpacity(0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const options = {
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      color: {
        value: ["#ffffff", "#e6e6e6"],
      },
      number: {
        value: 80, // Fixed particle count
        density: {
          enable: true,
          area: 900,
        },
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: opacity,
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0,
          sync: false
        }
      },
      size: {
        value: { min: 1, max: 2 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: opacity * 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.2,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce", // Changed from destroy to bounce
          top: "bounce",
          bottom: "bounce",
        },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      life: {
        duration: {
          sync: false,
          value: 3
        },
        count: 1,
        delay: {
          random: {
            enable: true,
            minimumValue: 0.5
          },
          value: 1
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
          parallax: {
            enable: false,
          },
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: opacity * 0.5,
          },
        },
      },
    },
    detectRetina: true,
    fps_limit: 60,
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        transition: 'opacity 0.5s ease-out',
      }}
    />
  )
}

export default ParticleBrain