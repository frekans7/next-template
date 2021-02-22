import Link from 'next/link';

import styles from './index.module.css';

import PAGES from '../../constants';
import ToggleTheme from '../toggleTheme';

function Nav() {
  return (
    <div className={styles.navigation}>
      <nav>
        {Object.keys(PAGES).map((key) => {
          const PAGE = PAGES[key];
          return (
            <Link href={PAGE.path} key={`link-${key}`}>
              <a> {PAGE.name} </a>
            </Link>
          );
        })}
      </nav>
      <ToggleTheme />
    </div>
  );
}
export default Nav;
