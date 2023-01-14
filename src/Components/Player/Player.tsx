import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const Player = ({
  videoId,
  options,
  onEndVideo,
  onReady,
  className,
}: {
  videoId: string;
  options: YouTubeProps["opts"];
  onEndVideo: (e: any) => void;
  onReady: (e: any) => void;
  className?: string;
}) => {
  return (
    <YouTube
      className={className}
      videoId={videoId}
      opts={options}
      onEnd={onEndVideo}
      onReady={onReady}
    />
  );
};

export default Player;
