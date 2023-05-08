const arrow = document.querySelector(".arrow");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;

      const refLat = 90;
      const refLng = 0;
      const y = Math.sin(userLng - refLng) * Math.cos(userLat);
      const x =
        Math.cos(refLat) * Math.sin(userLat) -
        Math.sin(refLat) * Math.cos(userLat) * Math.cos(userLng - refLng);
      const angle = (Math.atan2(y, x) * 180) / Math.PI;

      // Display angle
      arrow.style.transform = `rotate(${angle}deg)`;
    },
    function (error) {
      console.error(error);
    }
  );
} else {
  console.error("Geolocation is not supported by this browser.");
}
