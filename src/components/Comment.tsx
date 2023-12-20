import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar src='https://github.com/L3m0S.png'/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Lemos</strong>
                            <time dateTime='2022-12-14 19:56:00' title="14 de dezembro ás 19:56h">Publicado há 1h</time>
                        </div>

                        <button title="Deletar comentário!">
                            <Trash size={20} />
                        </button>

                    </header>

                    <p>
                        Muito bom Gabriel!
                    </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
};