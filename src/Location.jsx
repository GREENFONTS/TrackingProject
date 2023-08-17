/* global google */

import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const Location = () => {
  const [data, setData] = useState([
    {
      id: "55e43d24-b10a-417f-9cca-b891fd6335e0",
      latitude: "12.005333",
      longitude: "7.393462",
      sender: "+2348132030908",
      created_at: "2023-08-16T22:58:23.936Z",
    },
  ]);
  const [currentLocation, setCurrentLocation] = useState(data[0]);
  const center = {
    lat: parseFloat(currentLocation.latitude),
    lng: parseFloat(currentLocation.longitude),
  };

  const GetLocation = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/sms");
      const result = await res.json();
      if (result) {
        setData([...result, ...data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(import.meta.env.VITE_GOOGLE_API_KEY);

  return (
    <Box bg="gray.200" p="5" h="100vh" width="100%">
      <Flex m="5" justifyContent="space-between" alignItems="center">
        <Text
          fontFamily="cursive"
          fontSize={{ base: "12px", sm: "15px", lg: "20px" }}
        >
          Hello, Welcome back 👋🏻
        </Text>

        <Button onClick={() => GetLocation()} bgColor="white">
          Get Locations
        </Button>
      </Flex>

      <Flex
        h="70vh"
        width="90%"
        m="20px auto"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Flex h="60vh" width="80%" m="auto">
          <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={13}
            >
              {data.map(({ id, latitude, longitude }) => {
                return (
                  <>
                    <Marker
                      key={id}
                      position={{
                        latitude: parseFloat(latitude),
                        longitude: parseFloat(longitude),
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -100%)",
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        border: "2px solid red",
                      }}
                    >
                      <span style={{ fontSize: "18px", color: "red" }}>
                        {data.indexOf(currentLocation) + 1}
                      </span>
                    </div>
                  </>
                );
              })}
            </GoogleMap>
          </LoadScript>
        </Flex>
        {/* )} */}

        <Flex mt="5" justifyContent="space-between" gap="20px">
          {data.length > 0 ? (
            data.map((ele, index) => {
              return (
                <Flex key={index}>
                  <Button onClick={() => setCurrentLocation(ele)}>{`Location ${
                    index + 1
                  }`}</Button>
                </Flex>
              );
            })
          ) : (
            <Text>No location detail available</Text>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Location;
