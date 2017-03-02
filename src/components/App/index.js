import React from 'react';
import styles from './App.scss';

function App({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default App;
