import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';

const ONE_MINUTE = 60 * 1000;
const ONE_SECOND = 1000;

const DEFAULT_OPTIONS = {
  enableHighAccuracy: false,
  timeout: 2 * ONE_SECOND,
  maximumAge: ONE_MINUTE,
  accuracy: {
    ios: 'best',
    android: 'high',
  },
  distanceFilter: 5,
};


export const getCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        throw new Error('Location permission not granted');
      }

      let location = await Location.getCurrentPositionAsync({});
      return location.coords;
    } catch (error) {
      console.error('Error getting current location:', error);
      throw error;
    }
  };

export const getPlaceNameFromCoordinates = async (latitude, longitude) => {
  try {
    let location = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    if (location.length === 0) {
      throw new Error('Location not found');
    }

    const { name } = location[0];
    return name;
  } catch (error) {
    console.error('Error converting coordinates to place name:', error);
    throw error;
  }
};

const LOCATION_TASK_NAME = 'location-update-task';

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    console.error('Location update task error:', error.message);
    return;
  }
  if (data) {
    const { locations } = data;
    // Process the updated location data as needed
    console.log('Received new locations:', locations);
  }
});

export const startLocationUpdates = async () => {
  try {
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.BestForNavigation,
      timeInterval: 60000, // Update every 60 seconds
      foregroundService: {
        notificationTitle: 'Location Updates',
        notificationBody: 'Tracking your location',
      },
    });
  } catch (error) {
    console.error('Error starting location updates:', error);
    throw error;
  }
};

