import { initializeApp } from "firebase/app";
import { getFirestore} from '@firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDztA3v8MI0entiWAqx4mO8tTPRWGI2cwg",
    authDomain: "slack-clone-c6aaa.firebaseapp.com",
    projectId: "slack-clone-c6aaa",
    storageBucket: "slack-clone-c6aaa.appspot.com",
    messagingSenderId: "509461723221",
    appId: "1:509461723221:web:a0ee83f423fb91fae0fcdc",
    measurementId: "G-CTCFLWPE6G"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db;