import React from 'react';
import { A } from '../elements';
import YeeHanChung from '../img/yee-han-chung.jpeg';
import styles from '../styles/author.module.css';

export function Author() {
  return (
    <div className={styles.person}>
      <img src={YeeHanChung} alt={'Yee Han CHUNG'} className={styles.img} />
      <div className={styles.intro}>
        <div className={styles.subtitle}>
          <h3 className={styles.name}>{'Yee Han CHUNG'}</h3>
          <p style={{marginBottom: '0.5rem'}}>
            My web development stuff is kept on{' '}
            <A
              href="https://yeehan.dev/"
              rel="noopener noreferrer"
              target="_blank">
              yeehan.dev
            </A>
            .
          </p>
          <A
            href="https://github.com/cyeehan"
            rel="noopener noreferrer"
            target="">
            GitHub
          </A>{' '}
          |{' '}
          <A
            href="https://www.linkedin.com/in/cyeehan/"
            rel="noopener noreferrer"
            target="">
            LinkedIn
          </A>
        </div>
      </div>
    </div>
  );
}
