import React, { useEffect, useState, useContext, useReducer } from "react";
import {
  openSocketInstance,
  deleteVideo,
  registerSocketMessages,
  handleAddingVideo,
  API_KEY,
} from "./Utils/APIUtils";
import List from "./Components/List/List";
import ActionBar from "./Components/ActionBar/ActionBar";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import Player from "./Components/Player/Player";
import { YouTubeProps } from "react-youtube";
import "./App.scss";

function App() {
  const [videoId, setVideoId] = useState("");
  const initialState = useContext(AppContext);
  const [state, dispatch] = useReducer(AppReducer, initialState, undefined);

  const openSocket = async () => {
    const socket = await openSocketInstance();
    registerSocketMessages(socket, (message: { playlist: [] }) => {
      dispatch({
        type: "SET_VIDEO_LIST",
        payload: { videoList: message.playlist },
      });
    });
  };

  useEffect(() => {
    openSocket();
  }, []);

  const removeVideo = async (videoId: string) => {
    await deleteVideo({ id: videoId });
    dispatch({ type: "REMOVE_VIDEO", payload: { videoIndex: 0 } });
  };

  const onEndVideo = async (e: any) => {
    const { videoData } = e.target.playerInfo;
    const { video_id } = videoData;

    await removeVideo(video_id);
  };
  const playerOptions: YouTubeProps["opts"] = {
    height: "500",
    width: "800",
    playerVars: {
      autoplay: 1,
      origin: "http://localhost:3000",
    },
  };

  const onReady = (e: any) => {
    e.target.playVideo();
  };
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      <div className="app-list-player">
        <div className="app-action-list">
          <ActionBar
            value={videoId}
            onChange={(e) => setVideoId((e.target as HTMLInputElement).value)}
            onSubmit={() => handleAddingVideo(videoId, API_KEY, setVideoId)}
            placeholder="Enter Video Id"
            onKeyDown={(e) => {
              if ((e.key as string) === "Enter") {
                handleAddingVideo(videoId, API_KEY, setVideoId);
              }
            }}
          />
          <List listData={state.videoList} />
        </div>
        <div className="app-player">
          {state.videoList.length ? (
            <Player
              onEndVideo={onEndVideo}
              options={playerOptions}
              videoId={state.videoList[0].id}
              onReady={onReady}
              className="youtube-player"
            />
          ) : null}
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
