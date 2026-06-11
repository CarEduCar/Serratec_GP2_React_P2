import styles from './categoriasPage.module.css'
import { CategoriasCard } from '../../components/CategoriasCard'
import { Link } from 'react-router-dom'

export const Categorias = () => {



    return <div className={styles.categoriaspage}>

        <div className={styles.bannerCategorias}>
            <img src={'BannerCategorias.png'} alt="Mesa_Cheia_de_Comida"/>
        </div>

        <div className={styles.tituloCategorias}>
            <h1><strong> Categorias </strong></h1>
        </div>

        <section className={styles.listaCategorias}>
            
            <CategoriasCard 
                src='./carnes.png'
                alt='Picanha'
                nomeCategoria="Salgado"
                cor="#c15700"
            />
            
            <CategoriasCard src='./vegana.png'
            alt='Salada'
            nomeCategoria="Agridoce"
            cor="#0fd230"/>

            {/* <Link to="/doces" style={{ textDecoration: 'none' }}> */}
                <CategoriasCard 
                    src='./bolo.png'
                    alt='Bolo de Chocolate'
                    nomeCategoria="Doce"
                    cor="#33b5fb"
                />
            {/* </Link> */}
{/*   
            <CategoriasCard src='./macarraoCategorias.jpg'
            alt='Prato de macarrão'
            nomeCategoria="Massas"
            cor="#fec457"/>

            <CategoriasCard src='./sushi.png'
            alt='Sushis'
            nomeCategoria="Frutos do Mar"
            cor="#ff701e"/>

            <CategoriasCard src='./saudavel.png'
            alt='comidaSaudavel'
            nomeCategoria="Vegetariano"
            cor="#10a729"/>

            <CategoriasCard src='./coxadefrango.png'
            alt='Prato Com Frango'
            nomeCategoria="Carne de Frango"
            cor="#fa2e2e"/>

            <CategoriasCard src='./acompanhamento.png'
            alt='Prato de Acompanhamento'
            nomeCategoria="Acompanhamentos"
            cor="#fd96f3"/>

            <CategoriasCard src='./diversos.png'
            alt='Feijoada'
            nomeCategoria="Diversos"
            cor="#b77a59"/>

            <CategoriasCard src='./espetinhos.png'
            alt='Amedoins Doce'
            nomeCategoria="Entrada"
            cor="#ff5050"/> */}

        </section>
    </div>
}