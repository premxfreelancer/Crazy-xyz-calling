document.addEventListener("DOMContentLoaded", function(event) {
  // Check if the browser supports getUserMedia
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Access the mobile camera
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        var video = document.getElementById("videoElement");
        // Set the video source to the stream from the camera
        video.srcObject = stream;
      })
      .catch(function(error) {
        console.error("Error accessing the camera: ", error);
      });
  } else {
    console.error("getUserMedia is not supported by this browser.");
  }
});
