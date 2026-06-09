import styles from './categoriasPage.module.css'
import { CategoriasCard } from '../../components/CategoriasCard'

export const Categorias = () => {

    return <div className={styles.categoriaspage}>

        <div className={styles.bannerCategorias}>

        </div>

        <section className={styles.listaCategorias}>

            <div className={styles.container}>

                <CategoriasCard src='./assets/pratoMacarraoCategorias.webp'
                alt='Prato de macarrão'
                nomeCategoria="Massas"
                cor="#fec457"/>
            </div>

        </section>
        
    </div>
}