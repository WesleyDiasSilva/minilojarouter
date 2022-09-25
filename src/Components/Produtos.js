import React from 'react'
import styles from './Styles/Produtos.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Head from './Head'

function Produtos() {

  const [produtos, setProdutos] = React.useState(null)

   React.useEffect(() => {
   axios.get('https://ranekapi.origamid.dev/json/api/produto').then((response) => setProdutos(response.data))
  }, [])

  if(produtos === null) return null

  return (
    <section className={styles.produtos + ' animeLeft'}>
      <Head title='WD Store'/>
      {produtos.map((p) => (<Link to={`produto/${p.id}`} key={p.id}>
      <h1 className={styles.nome}>{p.nome}</h1>
      <img src={p.fotos[0].src} alt={p.title}></img>
    </Link>))}
    </section>
  )
}

export default Produtos
