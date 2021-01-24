import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import CMSdata from "../../Contentstack/CMSdata";
import CMSdataById from "../../Contentstack/CMSdataById";
import BlogProfile from "../../Components/BlogProfile";

export default function movieId(props) {
  return (
    <>
      <Header header={props.header} />
      <BlogProfile movies={props.movies} />
      <Footer footer={props.footer} />
    </>
  );
}

export const getStaticProps = async (context) => {
  const header = await CMSdata("saif_header");
  let movies = await CMSdataById(`${context.params.id}`);
  const footer = await CMSdata("saif_footer");

  return {
    props: { header: [...header], movies: { ...movies }, footer: [...footer] },
  };
};

export const getStaticPaths = async () => {
  let movies = await CMSdata("saif_blogs");
  let paths = movies[0].map((movie) => {
    return {
      params: {
        id: `${movie.uid}`,
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};
