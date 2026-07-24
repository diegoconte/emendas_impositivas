// 1. Importando as conexões do nosso arquivo de configuração
import { auth, db } from "./firebase-config.js";

// 2. Importando as funções de login do Firebase
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 3. Importando as funções do banco de dados (Firestore)
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Pegando os elementos da nossa tela HTML...
const loginScreen = document.getElementById('login-screen');
const dashboardScreen = document.getElementById('dashboard-screen');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const btnLogin = document.getElementById('btn-login');
const btnLogout = document.getElementById('btn-logout');

// 1. Monitorar o estado: O Firebase fica "olhando" se alguém está logado ou não
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Se estiver logado: esconde a tela de login e mostra o painel
        loginScreen.classList.add('hidden');
        loginScreen.classList.remove('flex'); // Remove o flexbox do Tailwind para esconder direito
        dashboardScreen.classList.remove('hidden');
    } else {
        // Se NÃO estiver logado: mostra o login e esconde o painel
        loginScreen.classList.remove('hidden');
        loginScreen.classList.add('flex');
        dashboardScreen.classList.add('hidden');
    }
});

// 2. Quando clicar no botão "Entrar"
btnLogin.addEventListener('click', () => {
    const email = emailInput.value;
    const senha = senhaInput.value;

    if (!email || !senha) {
        alert("Por favor, preencha o e-mail e a senha!");
        return;
    }

    // Tenta fazer o login no Firebase
    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Limpa os campos depois de entrar
            emailInput.value = '';
            senhaInput.value = '';
        })
        .catch((error) => {
            // Se a senha estiver errada ou usuário não existir
            alert("Erro ao fazer login! Verifique suas credenciais.");
            console.error(error.message);
        });
});

// 3. Quando clicar no botão "Sair"
btnLogout.addEventListener('click', () => {
    signOut(auth).catch((error) => {
        alert("Erro ao tentar sair.");
    });
});
// --- LÓGICA DO FORMULÁRIO DE CADASTRO ---
const formEmenda = document.getElementById('form-emenda');

formEmenda.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que a página recarregue ao clicar em salvar

    // 1. Pegando os valores digitados
    const numProcesso = document.getElementById('num_processo').value;
    const numEmenda = document.getElementById('num_emenda').value;
    const autoria = document.getElementById('autoria').value;
    const beneficiario = document.getElementById('beneficiario').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const status = document.getElementById('status').value;
    const objeto = document.getElementById('objeto').value;

    try {
        // 2. Salvando no banco de dados (coleção "emendas")
        const docRef = await addDoc(collection(db, "emendas"), {
            numero_processo: numProcesso,
            numero_emenda: numEmenda,
            autoria: autoria,
            beneficiario: beneficiario,
            valor: valor,
            status: status,
            objeto: objeto,
            data_cadastro: new Date().toISOString() // Salva a data e hora atual
        });
        
        // 3. Avisa que deu certo e limpa a tela
        alert("Emenda cadastrada com sucesso!");
        formEmenda.reset(); 

    } catch (error) {
        console.error("Erro ao cadastrar: ", error);
        alert("Erro ao salvar a emenda. Detalhes no console.");
    }
});