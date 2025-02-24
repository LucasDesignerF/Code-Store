document.getElementById('discord-login').addEventListener('click', () => {
    const clientId = 'SEU_CLIENT_ID_DISCORD';
    const redirectUri = 'https://seu-worker-url.workers.dev/callback'; // URL do Cloudflare Worker
    const scope = 'identify';
    window.location.href = `https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scope}`;
  });