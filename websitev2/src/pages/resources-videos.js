import Layout from '@theme/Layout';
import {Sidebar} from './resources';
import styles from './resources.module.css';

const videoUrls = [
  {yt: 'Ar1RbykL_As', title: 'Chain React 2024: Shiven Mian & Nikolai Aristo - React Native for Desktop in Microsoft Word'},
  {yt: 'IGaQL0WRqWI', title: 'Chain React 2024: Chiara Mooney - How To Make a React Native Windows App With a macOS Machine'},
  {yt: 'PYMMxfttOug', title: 'React Native EU 2023: Tommy Nguyen & Lorenzo Sciandra - Raising the Bar'},
  {yt: 'ChDQZpWQbwk', title: 'Chain React 2023: Christoph Purrer - From Electron to React Native'},
  {yt: '1vMic8ixfVI', title: "Chain React 2023: Lorenzo Sciandra - The work that you don't see"},
  {yt: 'kMJNEFHj8b8', title: 'Chain React 2023: Chiara Mooney & Shiven Mian - Building for Microsoft'},
  {yt: 'uSr9KXu707s', title: 'React Native Radio Ep267: React Native Windows with Chiara Mooney'},
  {yt: 'r7yKet5dga4', title: 'React Native EU 2021: Khalef Hosany - Unlocking the next generation of desktop app with React Native'},
  {yt: 'gWOrCedNR9M', title: 'React Native EU 2020: Steven Moyes - Building For Desktops And Dual Screens'},
  {yt: 'QMFbrHZnvvw', title: 'MS Build SK119 React Native: Build cross platform apps that target Windows, Mac, and more!'},
  {yt: 'x6-5e3Lifyw', title: 'App Development Community Standup: React Native for Windows update'},
  {yt: 'DAEnPV78rQc', title: "RNEU 2021: Lorenzo Sciandra & Tommy Nguyen - Improve all the repos – exploring Microsoft's DevExp"},
  {yt: 'IUMWFExtDSg', title: 'React Native EU 2019: Micah Lewis & EJ Layne - React Native @ Microsoft'},
];

export default function ResourcesVideos() {
  return (
    <Layout title="Resources - Videos" description="React Native for Windows video resources">
      <div className={styles.resourcesLayout}>
        <Sidebar active="Videos" />
        <main className={styles.mainContent}>
          <h1>Videos</h1>
          <div className={styles.videosGrid}>
            {videoUrls.map((video) => (
              <div key={video.yt} className={styles.videoEmbed}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.yt}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}
