import Layout from '@theme/Layout';
import {Sidebar} from './resources';
import styles from './resources.module.css';

const showcaseApps = [
  {
    header: 'Xbox app on Windows',
    category: '1st party',
    description: [
      'The Xbox app on Windows lets users explore the catalogue of games available through Xbox Game Pass, chat with friends, and more.',
      'Written in React Native, the Xbox app has a premium user experience including buttery smooth animations and video playback.',
    ],
    link: 'https://www.microsoft.com/store/productId/9MV0B5HZVK9Z',
    img: '/react-native-windows/img/XboxStoreApp.gif',
  },
  {
    header: 'Microsoft Store on Xbox',
    category: '1st party',
    description: [
      'The Microsoft Store app on Xbox consoles has been rewritten from the ground up to be faster, safer, and easier to use than ever before.',
      'The new Microsoft Store on Xbox is more than twice as fast as before, because it uses the native capabilities of the platform via React Native.',
    ],
    link: 'https://news.xbox.com/en-us/2020/08/03/new-microsoft-store-coming-to-xbox-insiders/',
    logo: '/react-native-windows/img/XBox.png',
  },
  {
    header: 'Microsoft Office',
    category: '1st party',
    description: [
      'Microsoft Office leverages React Native in several experiences across the suite of Office apps including Word, Excel, and PowerPoint.',
      'Some examples include the modern commenting experience, privacy dialog, and unity canvas. These experiences ship across both mobile and desktop, including on macOS and Windows.',
    ],
    link: 'http://office.com',
    logo: '/react-native-windows/img/Office.png',
  },
  {
    header: 'React Native Gallery',
    category: '1st party',
    description: [
      'The React Native Gallery app showcases the components and capabilities of React Native for Windows.',
      'You can find core components provided by the platform in addition to wrapped WinUI controls and common community modules.',
    ],
    logo: 'https://github.com/microsoft/react-native-gallery/blob/main/windows/rngallery.Package/Images/Square150x150Logo.scale-100.png?raw=true',
    link: 'https://www.microsoft.com/store/productId/9NPG0B292H4R',
  },
  {
    header: 'Power Apps',
    category: '1st party',
    description: [
      'Power Apps help you build professional-grade apps the easy way, and increase agility across your organization by enabling you to rapidly build low-code apps to modernize processes and solve tough challenges.',
    ],
    link: 'https://powerapps.microsoft.com/',
    logo: '/react-native-windows/img/PowerApps.png',
  },
  {
    header: 'Web Template Studio',
    category: '1st party',
    description: [
      'Microsoft Web Template Studio (aka WebTS) is a Visual Studio Code Extension that accelerates the creation of a new Web or React Native application using a wizard-based experience.',
    ],
    link: 'https://github.com/microsoft/WebTemplateStudio',
    logo: 'https://wasteamaccount.gallerycdn.vsassets.io/extensions/wasteamaccount/webtemplatestudio-dev-nightly/0.7.2117301/1624436773361/Microsoft.VisualStudio.Services.Icons.Default',
  },
  {
    header: 'Fluent UI React Native',
    category: '1st party',
    description: [
      'FluentUI React Native is a JavaScript component library that provides developers with controls that are part of the Fluent Design System. These controls are built on React Native and fully customizable.',
    ],
    link: 'https://github.com/microsoft/fluentui-react-native',
    logo: 'https://www.microsoft.com/design/fluent/assets/favicons/favicon-192.png',
  },
  {
    header: 'BabylonJS',
    category: '3rd party',
    description: [
      'Babylon.JS is a powerful, beautiful, simple, and open game and rendering engine packed into a friendly JS framework.',
      'Babylon React Native brings the power of Babylon to React Native apps on Android, iOS, and Windows.',
    ],
    link: 'https://github.com/babylonjs/babylonreactnative',
    logo: 'https://github.com/BabylonJS/Brand-Toolkit/blob/a4a72b1b87a3ffd68657fd5cb82da24691f291b8/babylon_logo/fullColor/babylon_logo_color.png?raw=true',
  },
  {
    header: 'Facebook Messenger (Desktop)',
    category: '3rd party',
    description: [
      'The React Native team is partnering deeply with Messenger Desktop to deliver on one of the top company initiatives, Remote Presence. Messenger Desktop is using React Native to bring a delightful native video calling experience to Windows and macOS.',
    ],
    link: 'https://twitter.com/reactnative/status/1286061933293010944?s=20',
    logo: '/react-native-windows/img/Messenger.png',
  },
  {
    header: 'Knomadix',
    category: '3rd party',
    description: [
      'Knomadix partnered with Microsoft to migrate the Knomadix Backpack app to the Microsoft Store using React Native for Windows – which will enable students to learn in an offline mode even when they\'re not connected to the internet.',
    ],
    link: 'https://www.knomadix.com/knomadix-releases-react-native-windows-version-of-knomadix-backpack/',
    logo: 'https://www.knomadix.com/wp-content/uploads/2015/05/Knomadix-Bug-transparent.png',
  },
  {
    header: 'Mashreq',
    category: '3rd party',
    description: [
      'Mashreq bank developed an application Universal Banker App with React Native to empower frontline employees working at branches to serve customers across a broad range of inquiries and journeys.',
      'The application helped them to increase the proximity with the customer, improving the customer experience and reducing the service time.',
    ],
    link: 'https://techcommunity.microsoft.com/t5/windows-dev-appconsult/how-mashreq-bank-is-using-react-native-for-windows-to-bring-new/ba-p/2421056',
    logo: 'https://www.mashreqbank.com/favicon.ico',
  },
];

function getCategoryColor(category) {
  if (category === '1st party') return 'green';
  return 'orange';
}

function ShowcaseApp({app}) {
  const descriptions = Array.isArray(app.description) ? app.description : [app.description];
  const isLogo = !!app.logo;
  const imgSrc = app.img || app.logo;

  return (
    <div className={styles.showcaseItem}>
      <div className={isLogo ? styles.showcaseLogo : styles.showcaseImg}>
        <img src={imgSrc} alt={app.header} />
      </div>
      <div className={styles.showcaseContent}>
        <h3>
          {app.header}
          {app.category && (
            <span
              className={styles.showcasePill}
              style={{background: getCategoryColor(app.category)}}
            >
              {app.category}
            </span>
          )}
        </h3>
        {descriptions.map((desc, i) => (
          <p key={i}>{desc}</p>
        ))}
        {app.link && <a href={app.link}>See more</a>}
      </div>
    </div>
  );
}

export default function ResourcesShowcase() {
  return (
    <Layout title="Resources - Showcase" description="Who's using React Native for Desktop">
      <div className={styles.resourcesLayout}>
        <Sidebar active="Showcase" />
        <main className={styles.mainContent}>
          <h1>Who's using React Native for Desktop</h1>
          <p>
            React Native for Desktop empowers developers to target a huge community of users beyond mobile.
            See how Microsoft uses React Native within strategically key experiences like Xbox, Office, and more.
            Then check out some key success stories from companies using React Native for Desktop to reach even more users.
          </p>
          {showcaseApps.map((app) => (
            <ShowcaseApp key={app.header} app={app} />
          ))}
        </main>
      </div>
    </Layout>
  );
}
