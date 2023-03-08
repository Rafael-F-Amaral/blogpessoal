const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    auth: {
      user: 'username',
      pass: 'password'
    },
    tls: {
      rejectUnauthorized: false
    },
    // Adicione essa opção para permitir CORS
    customHeaders: {
      Origin: 'http://localhost:3000' // Altere para o seu domínio
    }
  });
  