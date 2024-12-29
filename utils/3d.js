export function init3DEffect() {
  window.addEventListener
      ? window.addEventListener("mousemove", showMouseXY, false)
      : window.attachEvent && window.attachEvent("onmousemove", showMouseXY);

  function text3d(x, y) {
      var colors3d = ["#cccccc", "#c9c9c9", "#bbbbbb", "#b9b9b9", "#aaaaaa", "#a9a9a9"];
      var styleStore = "";
      for (var i = 0; i < 6; i++) {
          styleStore += `${x * (i * 0.03)}px ${y * (i * 0.03)}px 0 ${colors3d[i]},`;
      }
      return styleStore.slice(0, -1); // Remove the trailing comma
  }

  function shadow3d(x, y) {
      var shadow = ["rgba(0,0,0,.1)", "rgba(0,0,0,.15)", "rgba(0,0,0,.2)", "rgba(0,0,0,.2)", "rgba(0,0,0,.25)", "rgba(0,0,0,.3)"];
      var styleStore = "";
      for (var i = 0; i < 6; i++) {
          styleStore += `${x * (i * 0.15)}px ${y * (i * 0.15)}px ${i * 4}px ${shadow[i]},`;
      }
      return styleStore.slice(0, -1); // Remove the trailing comma
  }

  function showMouseXY(event) {
      var target = document.querySelector(".three-d-text");
      if (!target) return; // Guard clause to ensure target exists

      var cX = -(window.innerWidth / 2 - event.clientX) / 15; // Adjust the divisor for smoother effect
      var cY = (window.innerHeight / 2 - event.clientY) / 15;

      target.style.textShadow = `${text3d(-cX, cY)}, ${shadow3d(-cX, cY)}`;
      target.style.transform = `rotateY(${cX}deg) rotateX(${cY}deg)`;
  }
}

  