import React from 'react'
import styles  from './Styles/Contato.module.css'
import foto from '../contato.jpg'
import Head from './Head'

function Contato() {
  return (
    <section className={styles.contato + ' animeLeft'}>
      <Head title='Contato' descricao='Entre em contato'/>
      <img src={foto} alt='Maquina de escrever'></img>
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>
          <ion-icon name="mail-sharp"></ion-icon>
            <span className={styles.texto}>wesley.dias.dev@gmail.com</span>
          </li>
          <li>
          <ion-icon name="logo-linkedin"></ion-icon>
            <span className={styles.texto}>https://www.linkedin.com/in/wesleydiasdev/</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contato
