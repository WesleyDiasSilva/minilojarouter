import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";
import styles from "./Styles/Produto.module.css";

function Produto() {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();
  console.log(id);

  React.useEffect(() => {
    async function reqProduto(url) {
      try {
        setLoading(true);
        const res = await axios.get(url);
        setProduto(res.data);
        console.log(res.data);
      } catch (erro) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }
    reqProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;

  return (
    <section className={styles.produto + " animeLeft"}>
      <Head
        title={produto.nome}
        descricao={`Essa é a página do produto ${produto.nome}`}
      />
      <div>
        {produto.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo}></img>
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
}

export default Produto;
