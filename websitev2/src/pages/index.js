import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const features = [
  {
    title: 'Written in JavaScript — rendered with native code',
    description:
      'React Native lets you build your app faster. Instead of recompiling, you can reload your app instantly. With hot reloading, you can even run new code while retaining your application state.',
  },
  {
    title: 'Native Windows Experience',
    description:
      'Take your apps across PC, Xbox, Surface Tablets, and dual-screens with our robust Windows extension to React Native. Build native Windows apps with JavaScript and React.',
  },
  {
    title: 'Built on Open Source',
    description:
      'React Native for Windows is fully open source. Head over to our GitHub to learn more, file issues, contribute, or ask questions.',
  },
];


function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <a
        href="https://twitter.com/ReactNativeMSFT"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.twitterFollowBtn}>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        Follow @ReactNativeMSFT
      </a>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            Get Started With Windows
          </Link>
        </div>
      </div>
    </header>
  );
}

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <h2>About React Native Windows</h2>
        <p>
          <strong>React Native Windows brings React Native support for the{' '}
          <a href="https://developer.microsoft.com/windows/downloads/windows-sdk/">Windows SDK</a></strong>.
          With this, you can use JavaScript to build native Windows apps for{' '}
          <a href="https://docs.microsoft.com/windows/apps/get-started/?tabs=rnw">all devices supported by Windows 10 and higher</a>{' '}
          including PCs, tablets, 2-in-1s, Xbox, Mixed reality devices, etc.
        </p>
        <p className={styles.telemetryNote}>
          Some build-time tools will send telemetry to Microsoft by default. No telemetry is collected
          or transmitted in the final app. You can prevent the telemetry from being sent by using
          the <code>--no-telemetry</code> command line option.
        </p>
      </div>
    </section>
  );
}

function MacOSLink() {
  return (
    <section className={styles.macosSection}>
      <div className="container" style={{ textAlign: 'center' }}>
        <Link
          className={styles.macosButton}
          href="https://microsoft.github.io/react-native-macos">
          Interested in macOS? →
        </Link>
      </div>
    </section>
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
        <AboutSection />
        <MacOSLink />
      </main>
    </Layout>
  );
}
