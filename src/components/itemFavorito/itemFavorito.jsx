import { useState } from "react";
import { Link } from "react-router-dom";
import { useFavContext } from "../../context/FavContext/useFavContext";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

export default function ItemFavorito({ recipe }) {
  const { removerFavorito } = useFavContext();
  const [confirmando, setConfirmando] = useState(false);

  const confirmarRemocao = () => {
    removerFavorito(recipe);
    setConfirmando(false);
  };

  return (
    <>
      <div className="recipe-card">
        <Link to={`/receita/${recipe.id}`} className="recipe-card__link">
          <img
            src={recipe.link_imagem}
            alt={recipe.receita}
            className="recipe-card__img"
          />
        </Link>
        <div className="recipe-card__footer">
          <Link to={`/receita/${recipe.id}`} className="recipe-card__title">
            {recipe.receita}
          </Link>
          <button
            onClick={() => setConfirmando(true)}
            className="recipe-card__fav-btn"
            aria-label="Remover dos favoritos"
          >
            ★
          </button>
        </div>
      </div>

      <ConfirmModal
        aberto={confirmando}
        titulo="Remover favorito"
        mensagem={`Tem certeza que deseja remover "${recipe.receita}" dos favoritos?`}
        textoConfirmar="Sim"
        textoCancelar="Não"
        onConfirmar={confirmarRemocao}
        onCancelar={() => setConfirmando(false)}
      />
    </>
  );
}