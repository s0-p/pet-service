import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import config from "../../firebase.json";

export const app = initializeApp(config);

const auth = getAuth(app);

export const signin = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

// const uploadImage = async (uri) => {
  // const blob = await new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest();
  //     xhr.onload = function() {
  //         resolve(xhr.response);
  //     };
  //     xhr.onerror = function (e) {
  //         reject(new TypeError('Network request failed'));
  //     };
  //     xhr.responseType = 'blob';
  //     xhr.open('GET', uri, true);
  //     xhr.send(null);
  // });

  // const user = auth.currentUser;
  // const ref = getStorage().ref(`/profile/${user.uid}/photo.png`);
  // const snapshot = await snapshot.ref.getDownloadURL();

  // blob.close();
  // return await snapshot.ref.getDownloadURL();
//////////////////////////////////////////////////////////  
//   if (uri.startsWith("https")) {
//     return uri;
//   }

//   const response = await fetch(uri);
//   const blob = await response.blob();

//   const { uid } = auth.currentUser;
//   const storage = getStorage(app);
//   const storageRef = ref(storage, `/profile/${uid}/photo.png`);
//   await uploadBytes(storageRef, blob, {
//     contentType: "image/png",
//   });

//   return await getDownloadURL(storageRef);
// };

export const signup = async ({ name, email, password, photoUrl }) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  //   const storageUrl = photoUrl.startsWith('https')
  //     ? photoUrl
  //     : await uploadImage(photoUrl);
  //     await user.updateProfile({
  //         displayName: name,
  //         photoUrl: storageUrl,
  //     });
//   const photoURL = await uploadImage(photoUrl);
  await updateProfile(auth.currentUser, { displayName: name});  //, photoURL 
  return user;
};

export const getCurrentUser = () => {
  const { uid, displayName, email, photoURL } = auth.currentUser;
  return { uid, name: displayName, email, photoUrl: photoURL };
};

// export const updateUserInfo = async photo => {
//   const photoUrl = await uploadImage(photo);
//   await updateProfile(auth.currentUser, { photoUrl });
//   return photoUrl;
// };

export const signout = async () => {
  await signOut(auth);
  return {};
};

// const db = getFirestore(app);

// export const createChannel = async ({ title, description }) => {
//   const channelCollection = collection(db, 'channels');
//   const newChannelRef = doc(channelCollection);
//   const id = newChannelRef.id;
//   const newChannel = {
//     id,
//     title,
//     description,
//     createdAt: Date.now(),
//   };
//   await setDoc(newChannelRef, newChannel);
//   return id;
// };

// export const createMessage = async ({ channelId, message }) => {
//   const docRef = doc(db, `channels/${channelId}/messages`, message._id);
//   await setDoc(docRef, { ...message, createdAt: Date.now() });
// };
