const USERNAME = "juniore1";
const PASSWORD = "juniorBG23";

// Vérifier si déjà connecté
if (localStorage.getItem("connected") === "true") {
  showApp();
}

// Connexion
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (user === USERNAME && pass === PASSWORD) {
    localStorage.setItem("connected", "true");
    showApp();
  } else {
    error.textContent = "Identifiants incorrects";
  }
}

// Afficher l'espace privé
function showApp() {
  document.getElementById("login-box").style.display = "none";
  document.getElementById("app").classList.remove("hidden");

  // Charger données sauvegardées
  const savedData = localStorage.getItem("privateData");
  if (savedData) {
    document.getElementById("data").value = savedData;
  }
}

// Sauvegarder les données
function saveData() {
  const text = document.getElementById("data").value;
  localStorage.setItem("privateData", text);
  document.getElementById("status").textContent = "Données enregistrées ✔";
}

// Déconnexion
function logout() {
  localStorage.removeItem("connected");
  location.reload();
}
