import React from "react";

const VideoCard = ({ info }) => {
  if (!info) {
    return <div>Loading...</div>;
  }
  console.log(info);

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="font-semibold py-2">{channelTitle}</li>
        <li className="font-semibold py-2">Views: {statistics.viewCount} </li>
      </ul>
    </div>
  );
};

export default VideoCard;
