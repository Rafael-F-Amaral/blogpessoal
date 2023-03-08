const nextConfig = {
  reactStrictMode: true,
}

/*
Este código desativa o fallback do módulo fs no client-side do Next.js
para evitar erros no uso do pacote @sendgrid/mail.
*/
 module.exports = {
 webpack: (config, { isServer }) => {
 if (!isServer) {
 config.resolve.fallback.fs = false;
 }

 return config;
 }
 };


