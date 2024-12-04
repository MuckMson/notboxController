import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

// Ваши настройки Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCQAzXLY96Xe_QnaXSc3H5g9V8PHasaK1o",
  authDomain: "partypack-44fe2.firebaseapp.com",
  databaseURL: "https://partypack-44fe2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "partypack-44fe2",
  storageBucket: "partypack-44fe2.firebasestorage.app",
  messagingSenderId: "982185265845",
  appId: "1:982185265845:web:858a6ee2f3dd5b361fccfc",
  measurementId: "G-7P7Q3RGS1P"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Пример записи данных
set(ref(database, 'example/test'), {
  name: 'Firebase Example'
}).then(() => {
  console.log('Данные успешно записаны!');
}).catch((error) => {
  console.error('Ошибка при записи данных:', error);
});