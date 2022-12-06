import React from "react";
import ButtonLike from "./ButtonLike";

export default function Video(props) {
	return (
		<div className="video-container">
			<video
				className="vidBorder"
				src={props.srcProp}
				width="300"
				controls
			></video>
			<ButtonLike video={props.video} />
		</div>
	);
}
