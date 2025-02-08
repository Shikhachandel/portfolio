import React from "react";
import { Link } from "react-router-dom";

function InstagramChat({ username }) {
  const handleChat = () => {
    window.open(`https://www.instagram.com/direct/t/${username}/`, "_blank");
  };

  const style = { textDecoration: "none", color: "var(--pallet-4)" };

  return (
    <Link style={style} onClick={handleChat} target="_blank">
      rain_pixie
    </Link>
  );
}

export default InstagramChat;
