import Head from 'next/head'
import styles from '../styles/Home.module.css'
import cmsdata from '../Contentstack/CMSdata';
// import cmsdataid from '../Contentstack/CMSdataById';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Home(props) {
  
  // let data = props.card;
  // console.log(data)
  return (
    <div className={styles.container}>
      <Header />
      <Footer />
    </div>
  )
}
