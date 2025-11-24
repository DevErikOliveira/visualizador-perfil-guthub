import { fetchGithubUser, fetchGithubRepos } from './api.js';
import { getElements, renderProfile, clearProfile, showAlert } from './ui.js';

const { btnSearch, inputSearch, profileResults } = getElements();

if (!btnSearch || !inputSearch || !profileResults) {
  console.error('Elementos do DOM não encontrados. Verifique se os IDs estão corretos.');
}

async function handleSearch() {
  const username = inputSearch.value.trim();
  if (!username) {
    showAlert('Por favor, digite um nome de usuário do GitHub.');
    return;
  }

  try {
    const userData = await fetchGithubUser(username);
    const userRepos = await fetchGithubRepos(username);
    console.log('Repositórios do usuário:', userRepos);
    renderProfile(profileResults, userData, userRepos);
  } catch (err) {
    console.error('Erro ao buscar o perfil do GitHub:', err);
    if (err && err.status === 404) showAlert('Usuário não encontrado. Verifique o nome e tente novamente.');
    else showAlert('Ocorreu um erro ao buscar o perfil do GitHub. Por favor, tente novamente mais tarde.');
    clearProfile(profileResults);
  }
}

btnSearch.addEventListener('click', handleSearch);

// permitir buscar ao pressionar Enter
inputSearch.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleSearch();
});

// exportar para testes manuais se necessário
export { handleSearch };
