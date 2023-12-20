import styles from './SideBar.module.css';

import { PencilLine } from 'phosphor-react';

export function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className={styles.cover}
            />
            <div className={styles.profile}>
                <img src="https://github.com/L3m0S.png"
                    alt=""
                    className={styles.avatar}
                />

                <strong>Gabriel Lemos S. Pereira</strong>
                <span>Back-end Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}