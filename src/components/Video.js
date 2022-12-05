import React from "react";

export default function Video(prop) {
	return (
		<div>
			<video src={prop.srcProp} width="300" controls></video>
		</div>
	);
}
