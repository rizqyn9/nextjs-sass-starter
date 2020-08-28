/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a
            href="https://github.com/digitalgnome/nextjs-sass-starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            A Sass Next.js Starter Project
          </a>
        </h1>

        <p className={styles.description}>
          This Next.js starter template has support for Sass. Customizing this template is easy
          <span id="easy" role="img" aria-label="red exclaimation emoji">❗️</span>
        </p>
        <p className={styles.description}>
          Start with the
          {' '}
          <code className={styles.code}>pages/index.js</code>
          {', '}
          add new pages in the pages directory, and Next.js takes care of the routing.
          <br />
          Cool, huh?
          {' '}
          <span role="img" aria-label="smiling face with sunglasses">😎</span>
        </p>
        <p className={styles.description}>
          <span role="img" aria-label="thumbs up">👍</span>
          {' '}
          To use this starter run the following commands. The README of the
          {' '}
          <a
            href="https://github.com/digitalgnome/nextjs-sass-starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            repo
          </a>
          {' '}
          has more details.
        </p>
        <pre>
          <code className={styles.code}>
            yarn create next-app my-app -e https://github.com/digitalgnome/my-nextjs-starter
            <br />
            # or
            <br />
            npx creat-next-app my-app -e https://github.com/digitalgnome/my-nextjs-starter
          </code>
        </pre>

        <h2 className={styles.h2}>Next.js Resources</h2>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/digitalgnome/nextjs-sass-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Project Repo
          {' '}
          <img src="/DigitalGnome.png" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
