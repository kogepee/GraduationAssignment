import * as firebase from 'firebase'

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
      apiKey: "AIzaSyAT6UsJ_yMUKtwC5j_sNgxzp7Z4nLACf2w",
      authDomain: "graduation-8ffa0.firebaseapp.com",
      projectId: "graduation-8ffa0",
      storageBucket: "graduation-8ffa0.appspot.com",
      messagingSenderId: "446426227155",
      appId: "1:446426227155:web:349f2cbfc6c408561a0f26" 
}

firebase.initializeApp(firebaseConfig)

export default firebase