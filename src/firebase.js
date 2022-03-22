import { initializeApp } from "firebase/app";
import { getFirestore} from '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyATYuLgNaHmlUf7HYCAgnW3YQSCyK8hbLs",
  authDomain: "slack-clone-f1b69.firebaseapp.com",
  projectId: "slack-clone-f1b69",
  storageBucket: "slack-clone-f1b69.appspot.com",
  messagingSenderId: "273845313267",
  appId: "1:273845313267:web:862850b926cdd31fa06186",
  measurementId: "G-940BPDYD9X"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db;