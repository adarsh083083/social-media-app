// Importing the axios library for making HTTP requests
import axios from "axios";

// Function to send an HTTP request
export const sendRequest = (
  url,         // URL of the endpoint to send the request to
  method,      // HTTP method (GET, POST, PUT, DELETE, etc.)
  data = null, // Optional request payload data
  params = null, // Optional query parameters
  headers = {} // Optional request headers
) => {
  console.log("data",data)
  // Creating a configuration object to define the request details
  const config = {
    url,       // URL of the endpoint
    method,    // HTTP method
    data,      // Request payload data
    params ,    // Query parameters
    headers,   // Request headers
  };

  // Making the HTTP request using axios with the provided configuration
  return axios.request(config);
};








// import axios from "axios";
 