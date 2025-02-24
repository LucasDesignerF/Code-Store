// Função para redirecionar para o login do Discord
document.getElementById('discord-login').addEventListener('click', () => {
  const clientId = '1336360272520286269';
  const redirectUri = 'https://api.ofc-rede.workers.dev/callback'; // URL do Cloudflare Worker
  const scope = 'identify';
  window.location.href = `https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scope}`;
});
// Suporte para links internos com rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});

  // Botão de logout
  const logoutButton = document.getElementById('logout-button');
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      document.cookie = 'user_id=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 UTC;';
      window.location.href = '/login.html';
    });
  }
});
