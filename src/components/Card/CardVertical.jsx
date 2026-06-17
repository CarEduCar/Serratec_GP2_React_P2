import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./CardVertical.module.css";
import api from "../../services/api";
import descubra from "../../assets/descubra.png";

function CardVertical({ imagem, titulo, tipoCategoria, nomeExibicao, receitaId }) {

  const [dadosReceita, setDadosReceita] = useState(null);

  useEffect(() => {
    // Só busca da API se não receber imagem/titulo manualmente e tiver um receitaId
    if (receitaId && (!imagem || !titulo)) {
      api.get(`/receitas/${receitaId}`)
        .then((res) => setDadosReceita(res.data))
        .catch((err) => console.log(err));
    }
  }, [receitaId]);

  const imgFinal    = imagem  || dadosReceita?.link_imagem || descubra;
  const tituloFinal = titulo  || dadosReceita?.receita     || "Carregando...";

  const destino = tipoCategoria
    ? { pathname: "/pages/listagem", state: { tipoCategoria, nomeExibicao: nomeExibicao || tituloFinal } }
    : { pathname: `/receita/${receitaId}` };

  return (
    <Link to={destino.pathname} state={destino.state} className={styles.link}>
      <div className={styles.card}>
        <img className={styles.img2} src={imgFinal} alt={tituloFinal} />
        <h2 className={styles.categoria}>{tituloFinal}</h2>
      </div>
    </Link>
  );
}

export default CardVertical;