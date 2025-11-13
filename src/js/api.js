const baseURL = 'https://api.github.com';

/**
 * Busca dados de um usuário no GitHub.
 * Lança erro com propriedade `status` quando a resposta não for ok.
 */
export async function fetchGithubUser(username) {
  if (!username) throw new Error('Nome de usuário é obrigatório');

  const res = await fetch(`${baseURL}/users/${encodeURIComponent(username)}`);
  if (!res.ok) {
    const err = new Error(res.status === 404 ? 'Usuário não encontrado' : `Erro ${res.status}`);
    err.status = res.status;
    throw err;
  }

  return await res.json();
}

// exportações futuras: buscar repositórios, seguidores, etc.
