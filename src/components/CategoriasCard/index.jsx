import styles from './styles.module.css'

export const CategoriasCard = ({src, alt, nomeCategoria, cor, children}) => {

    return <div className={styles.categoriasCard} style={{ '--bgCor': cor }}>

        <img src={src} alt={alt}>
            
        </img>

        <h1 className={styles.nomeCategoria}>
            {nomeCategoria}
        </h1>
        
        {children}
    </div>  
}