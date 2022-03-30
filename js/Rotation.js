AFRAME.registerComponent("scuba-driver", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfAscend: { type: "number", default: 0 }
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      //get the position from the attributes
      this.data.speedOfRotation = this.el.getAttribute("rotation")
      this.data.speedOfAscend = this.el.getAttribute("position")

      var planeRotation = this.data.speedOfRotation;
      var planePosition = this.data.speedOfAscend;

      //control the aircraft with arrow keys
      if (e.key === "ArrowRight") {
        if (planeRotation.x < 10) {
          planeRotation.x += 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
      }
      if (e.key === "ArrowLeft") {
        if (planeRotation.x > -10) {
          planeRotation.x -= 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
      }
      if (e.key === "ArrowUp") {
        if (planeRotation.z < 20) {
          planeRotation.z += 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
        if (planePosition.y < 2) {
          planePosition.y += 0.01;
          this.el.setAttribute("position", planePosition);
        }
      }

      if (e.key === "ArrowDown") {
        if (planeRotation.z > -10) {
          planeRotation.z -= 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
        if (planePosition.y > -2) {
          planePosition.y -= 0.01;
          this.el.setAttribute("position", planePosition);
        }
      }
    });
  },
});