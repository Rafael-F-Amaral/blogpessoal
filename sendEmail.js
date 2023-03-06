const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SG.piatJzH1SrayOqHxEmDgWw.Rhie3nbao2A6nzA8VgsnU0PQ47A - mOa3oeZf1bMZZTQ);
const fs = require('fs')

export function makeGetStaticProps(isBlue) {
  return () => {
    return { props: {
      fs: Object.keys(fs).join(' '),
      isBlue,
    } }
  }
}
const msg = {
    to: 'recipient@example.com',
    from: 'sender@example.com',
    subject: 'Exemplo de e-mail do SendGrid',
    text: 'Olá! Este é um exemplo de e-mail enviado com o SendGrid.',
    html: '<strong>Olá!</strong><p>Este é um exemplo de e-mail enviado com o SendGrid.</p>',
};

sgMail.send(msg)
    .then(() => console.log('E-mail enviado com sucesso!'))
    .catch(error => console.error(error.toString()));
