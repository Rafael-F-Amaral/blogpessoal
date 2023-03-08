import { FormEvent, useState } from 'react';
import styles from '../pages/contato/contato.module.css';

const Contato = () => {
  return (
    <div className={styles.contatoContainer}>
      <h2 className={styles.contatoTitle}>Entre em contato</h2>
      <form className={styles.contatoForm}>
        <label className={styles.label} htmlFor="name">
          Nome:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          
        />

        <label className={styles.label} htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
        />

        <label className={styles.label} htmlFor="message">
          Mensagem:
        </label>
        <textarea
          id="message"
          name="message"
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
