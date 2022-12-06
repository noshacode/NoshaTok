import React from "react";
import ButtonLike from "./ButtonLike";

export default function Video({ video }) {
	return (
		<div className="video-container">
			<video className="vidBorder" src={video.url} width="300" controls></video>
			<ButtonLike video={video} />
		</div>
	);
}
