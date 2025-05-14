import React from "react";
import Image from "next/image";
// import videoStyle from './Loading.module.scss'

const Loading = ({ styles }) => {
  return (
    <div className={styles.videowrapper}>
      <video
        src="https://cdnl.iconscout.com/lottie/premium/thumb/currency-symbol-animated-icon-download-in-lottie-json-gif-static-svg-file-formats--cash-coin-sign-pack-finance-icons-5073218.mp4"
        className="w-full"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default Loading;
