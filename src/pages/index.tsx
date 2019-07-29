import React from 'react';
import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import { message, Alert, Button } from 'antd'
export default function() {
  // message.info('log info')
  return (
    <div className={styles.normal}>
      <Alert message="Success Text" type="success" />
      <div className={styles.welcome} />
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({ id: 'index.start' })}
          </a>
        </li>
      </ul>
    </div>
  );
}
