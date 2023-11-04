export function getLocation(key) {
    if ("geolocation" in navigator) {
      // Geolocation is available
      navigator.geolocation.getCurrentPosition(
        function (position) {
          console.log("enetered");
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const SendLocation = async () => {
            const formBody = {
              latitude: latitude,
              longitude: longitude,
            };
            try {
              const res = await fetch("https://gifts-circle.herokuapp.com/api/sms/send", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formBody),
              });
              const result = await res.json();
              console.log(result);
            } catch (error) {
              console.log(error);
            }
          };
          SendLocation();
        },
        function (error) {
          // Handle errors, if any
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.error("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.error("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              console.error("The request to get user location timed out.");
              break;
            default:
              console.error("An unknown error occurred.");
              break;
          }
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
}
