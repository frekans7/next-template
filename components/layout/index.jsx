import PropTypes from 'prop-types';

import styles from './index.module.css';

import Nav from '../nav';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Nav />
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;
