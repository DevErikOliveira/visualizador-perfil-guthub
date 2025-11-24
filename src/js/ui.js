/** Funções de UI/DOM para renderizar e limpar o cartão de perfil */
export function getElements() {
  return {
    btnSearch: document.getElementById('btn-search'),
    inputSearch: document.getElementById('input-search'),
    profileResults: document.getElementById('profile-results'),
  };
}

export function renderProfile(container, userData, userRepos) {
  const repositoriesHTML = userRepos && userRepos.length > 0 ? userRepos.map(repo => `
    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
        <div class="repo-card">
          <h3>${repo.name}</h3>
            <div class="repo-stats">
              <span> ⭐ Stars: ${repo.stargazers_count}</span>
              <span> 🍴 Forks: ${repo.forks_count}</span>
              <span> 👁️ Watchers: ${repo.watchers_count}</span>
              <span> 📝 Language: ${repo.language || 'Não informado'}</span>
            </div>
        </div>
      </a>
  `).join('') : '<p>Sem repositórios disponíveis.</p>';


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

    <div class="profile-repositories">
      <h2>Repositórios</h2>
        <div class="repositories">
          ${repositoriesHTML}
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
