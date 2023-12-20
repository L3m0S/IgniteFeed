import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/L3m0S.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Caio Lemos S. Pereira</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time dateTime='2022-12-14 19:56:00' title="14 de dezembro ás 19:56h">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galera s2!</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p> 👉 <a href='#'>jane.design/doctorcare</a></p>
                <p><a href=''>#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}