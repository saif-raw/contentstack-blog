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
      <Header header={props.header} />
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const header = await cmsdata("saif_header");
  const blogs = await cmsdata("saif_blogs");
  const footer = await cmsdata("saif_footer");
  return {
      props: { header: [...header], blogs: { ...blogs[0] }, footer: [...footer] },
  };
};
