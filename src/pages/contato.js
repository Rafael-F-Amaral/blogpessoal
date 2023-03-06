import styles from '../pages/contato/contato.module.css';
import sgMail from '@sendgrid/mail';

const Contato = () => {

  const enviarEmail = (event) => {
    event.preventDefault();
    const nome = event.target.nome.value;
    const email = event.target.email.value;
    const mensagem = event.target.mensagem.value;

    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

    const msg = {
      to: 'seu-email@seu-dominio.com',
      from: email,
      subject: `Nova mensagem de ${nome}`,
      text: mensagem,
      html: `<p>${mensagem}</p>`
    };

    sgMail.send(msg)
      .then(() => {
        alert('Mensagem enviada com sucesso!');
      })
      .catch((error) => {
        console.error(error);
        alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
      });

    event.target.reset();
  };

  return (
    <div className={styles.contatoContainer}>
      <h2 className={styles.contatoTitle}>Entre em contato</h2>
      <form className={styles.contatoForm} onSubmit={enviarEmail}>
        <label className={styles.label} htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" />

        <label className={styles.label} htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label className={styles.label} htmlFor="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
