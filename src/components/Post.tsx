import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

interface IPostProps {
    author: IAuthor;
    publishedAt: Date;
    content: { type: string, content: string }[];
}

interface IAuthor {
    avatarUrl: string;
    name: string;
    role: string;
}

export function Post({ author, content, publishedAt }: IPostProps) {
    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt);

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} hasBorder />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time dateTime={publishedAt.toISOString()} title={publishedDateFormatted}>
                    {publishedDateFormatted}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe se feedBack</strong>

                <textarea placeholder='Deixe seu comentário!' />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}