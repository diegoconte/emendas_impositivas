// Importando as funções do Firebase (Versão mais recente via CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// COLE AQUI AS CHAVES QUE VOCÊ COPIOU DO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyAdHnH9Q6c6GqE8mlhBxcNdcEB6n3G7QvU",
  authDomain: "emendas-b63d1.firebaseapp.com",
  projectId: "emendas-b63d1",
  storageBucket: "emendas-b63d1.firebasestorage.app",
  messagingSenderId: "819384266831",
  appId: "1:819384266831:web:d94187838a57bbe0f67a3a",
  measurementId: "G-YYGZRLDYQD"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Exportando o Banco de Dados e a Autenticação para usarmos nos outros arquivos
export const db = getFirestore(app);
export const auth = getAuth(app);