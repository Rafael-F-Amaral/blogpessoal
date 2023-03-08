const nextConfig = {
  reactStrictMode: true,
}

/*
Este código desativa o fallback do módulo fs no client-side do Next.js
para evitar erros no uso do pacote @sendgrid/mail.
*/
<<<<<<< HEAD
 module.exports = {
 webpack: (config, { isServer }) => {
 if (!isServer) {
 config.resolve.fallback.fs = false;
 }

 return config;
 }
 };
=======
//module.exports = {
  //webpack: (config, { isServer }) => {
   // if (!isServer) {
  //    config.resolve.fallback.fs = false;
  //  }
//
 //   return config;
 // }
//};
>>>>>>> ff7b3d0f433cd2824c801c88dffa43e564f9bca0


