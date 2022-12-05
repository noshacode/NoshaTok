import { db, timeStamp } from "./config";

export const getFavoriteData = async () => {
	const videoItems = await db
		.collection("favorites")
		.orderBy("createdAt", "desc")
		.get();
	const data = videoItems.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	return data;
};

export const saveToFavorites = async (video) => {
	await db
		.collection("favorites")
		.doc(video.id)
		.set({
			...video,
			createdAt: timeStamp(),
		});
};

export const deleteVideoFromFavorites = async (video) => {
	await db.collection("favorites").doc(video.id).delete();
};
