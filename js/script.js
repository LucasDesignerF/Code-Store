document.getElementById('discord-login').addEventListener('click', () => {
  const clientId = '1336360272520286269';
  const redirectUri = 'https://api.ofc-rede.workers.dev/callback'; // URL do Cloudflare Worker
  const scope = 'identify';
  window.location.href = `https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scope}`;
});
