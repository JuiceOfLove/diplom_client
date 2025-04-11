import { Outlet } from 'react-router';
import { observer } from 'mobx-react-lite';

import styles from './Layout.module.css';

const Layout = () => {
    return (
        <div>
            <header className={styles.header}>
               <p>1</p>
            </header>
            <main className={styles.container}><Outlet/></main>
        </div>
    )
}

export default observer(Layout)