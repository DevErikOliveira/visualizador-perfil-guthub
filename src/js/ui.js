/** Funções de UI/DOM para renderizar e limpar o cartão de perfil */
export function getElements() {
  return {
    btnSearch: document.getElementById('btn-search'),
    inputSearch: document.getElementById('input-search'),
    profileResults: document.getElementById('profile-results'),
  };
}

export function renderProfile(container, userData) {
  if (!container) return;
  container.classList.remove('hide');
  container.innerHTML = `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar de ${userData.name || userData.login}" class="profile-avatar" />
      <div class="profile-info">
        <h2>${userData.name || userData.login}</h2>
        <p>${userData.bio || 'Sem biografia disponível 😥'}</p>
      </div>
    </div>

    <div class="profile-counters">
          <div class="followers">
            <h4>👥 Seguidores</h4>
            <span>${userData.followers}</span>
          </div>
          <div class="following">
            <h4>👥 Seguindo</h4>
            <span>${userData.following}</span>
          </div>
        </div>
  `;
}

export function clearProfile(container) {
  if (!container) return;
  container.innerHTML = '';
  container.classList.add('hide');
}

export function showAlert(message) {
  // Aqui usamos alert para simplicidade; pode ser substituído por um toast.
  alert(message);
}
