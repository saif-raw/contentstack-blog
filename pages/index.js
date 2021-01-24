// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import cmsdata from '../Contentstack/CMSdata';
// import cmsdataid from '../Contentstack/CMSdataById';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Blogs from '../Components/Blog';


export default function Home(props) {
  
  // let data = props.card;
  // console.log(data)
  return (
    <div>
      <Header header={props.header} />
      <Blogs blogs={props.blogs} />
      <Footer footer={props.footer}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const header = await cmsdata("saif_header");
  const blogs = await cmsdata("saif_blogs");
  const footer = await cmsdata("saif_footer");
  return {
      props: { header: [...header], blogs: [...blogs] , footer: [...footer] },
  };
};