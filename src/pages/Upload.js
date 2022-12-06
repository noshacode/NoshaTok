import React, { useState } from "react";
import { uploadFile } from "../firebase/uploadFile";

function Upload() {
	const [file, setFile] = useState(null);
	const [progress, setProgress] = useState(0);
	const [isUploading, setIsUploading] = useState(false);

	function fileHandler(e) {
		let selectedFile = e.target.files[0];
		setFile(selectedFile);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (file) {
			setIsUploading(true);
			uploadFile(file, setProgress); //
		}
	}

	return (
		<div className="upload-box">
			<h1>Upload video</h1>
			<form onSubmit={handleSubmit}>
				<input
					className="input-upload"
					type="file"
					onChange={fileHandler}
					accept="video/mp4, video/mov"
					required
				></input>

				<div>
					{isUploading ? (
						<>
							<progress max={100} value={Math.round(progress)}></progress>
							{Math.round(progress)}%
						</>
					) : (
						<button className="upload" type="submit">
							Upload
						</button>
					)}
				</div>
			</form>
		</div>
	);
}

export default Upload;
