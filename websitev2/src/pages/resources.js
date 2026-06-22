import Layout from '@theme/Layout';
import styles from './resources.module.css';

const repoCards = [
  {
    title: 'React Native for Windows',
    type: 'Github Repo',
    link: 'https://github.com/Microsoft/react-native-windows',
    img: 'https://raw.githubusercontent.com/microsoft/react-native-windows/main/.github/hero2.png',
    description: 'Official React Native for Windows framework for building native Windows applications with React.',
  },
  {
    title: 'React Native for macOS',
    type: 'Github Repo',
    link: 'https://github.com/Microsoft/react-native-macos',
    img: '/react-native-windows/img/homepage/native_and_js_mac_cropped.png',
    description: 'Official React Native for macOS framework for building native macOS applications with React.',
  },
  {
    title: 'Fluent UI React Native (FURN)',
    type: 'Github Repo',
    link: 'https://github.com/microsoft/fluentui-react-native',
    img: '/react-native-windows/img/homepage/fluentUI_image.png',
    description: 'FluentUI React Native is a JavaScript component library providing developers with controls that are in the Fluent Design System.',
  },
  {
    title: 'Dual Screen',
    type: 'Github Repo',
    link: 'https://github.com/microsoft/react-native-dualscreen',
    img: '/react-native-windows/img/homepage/duo.jpg',
    description: "Microsoft's offerings to streamline dual-screen cross-platform development using React Native. The modules in the repo are targeting Windows and Android.",
  },
  {
    title: 'React Native XAML',
    type: 'Github Repo',
    link: 'https://github.com/microsoft/react-native-xaml',
    img: '/react-native-windows/img/winui.png',
    description: 'React Native XAML enables apps to use any XAML and WinUI native platform control.',
  },
  {
    title: 'VS Code RN extension',
    type: 'Github Repo',
    link: 'https://github.com/Microsoft/vscode-react-native',
    img: '/react-native-windows/img/homepage/vs_code_logo.png',
    description: 'React Native extension for VS Code enables you to debug your code and quickly and run react-native commands from the command palette.',
  },
  {
    title: 'Hermes for Windows',
    type: 'Github Repo',
    link: 'https://github.com/microsoft/hermes-windows',
    img: '/react-native-windows/img/homepage/hermes_logo_small.png',
    description: "Microsoft's fork of facebook/Hermes that brings Windows support to the lightweight JS engine for React Native.",
  },
  {
    title: 'App Center SDK for React Native',
    type: 'Github Repo',
    link: 'https://github.com/microsoft/appcenter-sdk-react-native',
    img: '/react-native-windows/img/homepage/appcenter_logo.png',
    description: 'App Center allows you to get faster release cycles, higher-quality apps, and app insights to build what users want.',
  },
  {
    title: 'React Native Test App',
    type: 'Github Repo Sample',
    link: 'https://github.com/microsoft/react-native-test-app',
    img: 'https://raw.githubusercontent.com/microsoft/react-native-windows/main/.github/hero2.png',
    description: 'React Native Test App provides test apps for all platforms as a package.',
  },
  {
    title: 'React Native Gallery',
    type: 'Github Repo',
    link: 'https://github.com/microsoft/react-native-gallery',
    img: '/react-native-windows/img/rngallery.png',
    description: 'React Native Gallery showcases the different controls available in React Native for Windows and community modules.',
  },
];

function Sidebar({active}) {
  const items = [
    {label: 'Repos', href: '/react-native-windows/resources'},
    {label: 'News & Social', href: '/react-native-windows/resources-news-social'},
    {label: 'Videos', href: '/react-native-windows/resources-videos'},
    {label: 'Showcase', href: '/react-native-windows/resources-showcase'},
  ];
  return (
    <nav className={styles.sidebar}>
      <h3>Resources</h3>
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={item.label === active ? styles.sidebarActive : ''}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export {Sidebar};

export default function Resources() {
  return (
    <Layout title="Resources - Repos" description="React Native for Windows resources and repos">
      <div className={styles.resourcesLayout}>
        <Sidebar active="Repos" />
        <main className={styles.mainContent}>
          <h1>Repos</h1>
          <p>
            The following is a suite of offerings from Microsoft in the React Native space to help you target Desktop platforms as well as accelerate your development efficiency with React Native.
          </p>
          <div className={styles.cardGrid}>
            {repoCards.map((card) => (
              <a key={card.title} href={card.link} className={styles.repoCard}>
                <img src={card.img} alt={card.title} className={styles.repoCardImg} />
                <div className={styles.repoCardBody}>
                  <h3>{card.title}</h3>
                  <div className={styles.repoCardType}>{card.type}</div>
                  <p>{card.description}</p>
                </div>
              </a>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}
