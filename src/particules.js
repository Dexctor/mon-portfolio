const particles = {
  "fullScreen": {
      "enable": true,
      "zIndex": 1
  },
  "particles": {
      "number": {
          "value": 20,
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "color": {
          "value": "#FFFB08"
      },
      "shape": {
          "type": "circle"
      },
      "opacity": {
          "value": 1,
          "random": true,
          "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
          }
      },
      "size": {
          "value": 2,
          "random": true,
          "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
          }
      },
      "line_linked": {
          "enable": false,
          "distance": 500,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 2
      },
      "move": {
          "enable": true,
          "speed": 2,
          "direction": "top",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
          }
      }
  },
  "retina_detect": true,
  "background": {
      "color": "#111",
      "image": "",
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "cover"
  }
}

export default particles;