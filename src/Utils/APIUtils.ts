import axios from "axios";
import openSocket from "socket.io-client";

const requestHostName = "http://localhost:3001";

export const API_KEY = "AIzaSyBbHinWJI0F0fn3Bw8y9KjDhvaUyovutz4";

export const getPlaylist = () => {
  return axios
    .get(`${requestHostName}/playlist`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const handleAddingVideo = (
  videoId: string,
  API_KEY: string,
  resetVideoId?: (videoId: string) => void
) => {
  fetchVideoSnippet(videoId, API_KEY)
    .then((res) => res.json())
    .then((res) => {
      if (resetVideoId) {
        resetVideoId("");
      }
      return addVideo({ ...res, id: videoId });
    })
    .then((res) => res)
    .catch((e) => console.log(e));
};

export const fetchVideoSnippet = (videoId: string, API_KEY: string) => {
  return fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoId}&key=${API_KEY}`
  );
};

export const addVideo = (body: any) => {
  return axios.post(`${requestHostName}/playlist`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteVideo = (body: any) => {
  return axios.delete(`${requestHostName}/playlist`, {
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
  });
};

export const registerSocketMessages = (socket: any, handler: any) => {
  socket.on("updatedPlaylist", (message: any) => {
    handler(message);
  });
};

export const openSocketInstance = () => {
  return openSocket(`${requestHostName}/`);
};
