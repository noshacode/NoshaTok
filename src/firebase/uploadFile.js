import { db, storage, timeStamp } from "./config";

export const uploadFile = (file, updateProgress) => {
	// create file reference with name in storage
	const storageRef = storage.ref(file.name);

	// create database collection ref
	const collectionRef = db.collection("videos");

	// Start upload task
	const uploadTask = storageRef.put(file);

	uploadTask.on(
		"state_changed",
		(snap) => {
			let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
			updateProgress(percentage);
		},
		(err) => {
			console.error("error happened", err);
		},
		async () => {
			//give me file url from storage
			const url = await storageRef.getDownloadURL();
			const newVideo = {
				url: url,
				createdAt: timeStamp(),
			};

			collectionRef.add(newVideo);
		}
	);
};
