import { useState } from 'react';
import styles from '../pages/contato/contato.module.css';


const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    db.collection('mensagens').add({
      nome,
      email,
      mensagem
    })
    .then(function(docRef) {
      console.log("Mensagem enviada com sucesso!");
      setNome('');
      setEmail('');
      setMensagem('');
    })
    .catch(function(error) {
      console.error("Erro ao enviar mensagem: ", error);
    });
  }

  return (
    <div className={styles.contatoContainer}>
      <h2 className={styles.contatoTitle}>Entre em contato</h2>
      <form className={styles.contatoForm} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="name">
          Nome:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />

        <label className={styles.label} htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label className={styles.label} htmlFor="message">
          Mensagem:
        </label>
        <textarea
          id="message"
          name="message"
          value={mensagem}
          onChange={(event) => setMensagem(event.target.value)}
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
