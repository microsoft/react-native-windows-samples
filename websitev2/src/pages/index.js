import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const features = [
  {
    title: 'Written in JavaScript — rendered with native code',
    icon: '⚡',
    description:
      'React Native lets you build your app faster. Instead of recompiling, you can reload your app instantly. With hot reloading, you can even run new code while retaining your application state.',
  },
  {
    title: 'Native Windows Experience',
    icon: '🪟',
    description:
      'Take your apps across PC, Xbox, Surface Tablets, and dual-screens with our robust Windows extension to React Native. Build native Windows apps with JavaScript and React.',
  },
  {
    title: 'Built on Open Source',
    icon: '🌐',
    description:
      'React Native for Windows is fully open source. Head over to our GitHub to learn more, file issues, contribute, or ask questions.',
  },
];

function Feature({ title, icon, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="feature-card" style={{ height: '100%' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{icon}</div>
        <h3>{title}</h3>
        <p style={{ color: 'var(--subtle)' }}>{description}</p>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            Get Started
          </Link>
          <Link
            className={styles.secondaryLink}
            href="https://github.com/microsoft/react-native-windows">
            Learn More ›
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row" style={{ gap: '1.5rem 0' }}>
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
