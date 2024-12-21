import axios from 'axios';
import GOOGLE_MAP_API from '../config'

// Replace 'YOUR_API_KEY' with your actual Google Maps API key
const apiKey = GOOGLE_MAP_API.GOOGLE_MAP_API;

// Define a function to make the GET request
export async function getDistanceMatrix(origin: string, destination: string): Promise<any> {
    const url = 'https://maps.googleapis.com/maps/api/distancematrix/json'; // Use the desired endpoint
  const params = {
    origins: origin,
    destinations: destination,
    key: apiKey,
  };

  try {
    const response = await axios.get(url, { params });
    if (response.status == 200) {
      return response.data;
    } else {
      console.error('Error:', response);
      throw new Error("Workers Problem");
    }
  } catch (error) {
    // Handle network errors or other exceptions
    console.error('Network error:', error.message);
    throw error;
  }
}


// getDistanceMatrix(origin, destination)
//   .then((data) => {
//     // Handle the data from the Distance Matrix API
//     console.log('Distance Matrix API response:', data);
//   })
//   .catch((error) => {
//     // Handle errors
//     console.error('Error fetching Distance Matrix API:', error.message);
//   });
