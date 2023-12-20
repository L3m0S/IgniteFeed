import styles from './Avatar.module.css'

export function Avatar(props: { src: string, hasBorder?: boolean }) {
    
    return (
        <img className={props?.hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={props.src} alt="" />
    )
}