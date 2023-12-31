const particleConfig = {
  fpsLimit: 60,
  particles: {
    shape: {
      type: "circle",
    },
    size: {
      random: {
        enable: true,
        minimumValue: 0.5,
      },
      value: 1.4,
    },
    color: {
      value: "#f1f1f1",
    },
    number: {
      density: {
        enable: true,
        area: 1080,
      },
      limit: 0,
      value: 300,
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.5,
        speed: 1.6,
        sync: false,
      },
      random: {
        enable: true,
        minimumValue: 0.1,
      },
      value: 1,
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
      },
    },
  },
}

export default particleConfig;