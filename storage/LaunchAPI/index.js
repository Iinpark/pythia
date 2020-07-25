import axios from 'axios';

// Payed base URL:https://fdo.rocketlaunch.live/json/launches
export const API = axios.create({
  baseURL: 'https://fdo.rocketlaunch.live/json/launches/next/5',
  timeout: 1000,
  // Header for sending API key
  // Authorization: apiKey,
});

export const LaunchAPI = {
  fetchAll: async () => {
    data = await API.get()
      .then((data) => {
        return data.data;
      })
      .catch((err) => {
        alert('error', err);
      });
    return data;
  },
};
