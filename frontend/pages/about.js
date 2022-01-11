


const About = ({about}) => {
    return (
      <div>test about {about.title}</div>
    )
}
  
export default About;

export async function getStaticProps() {
  const aboutRes = await axios.get("http://localhost:1337/about");

  return {
    props: {
      about: aboutRes.data
    },
  };
}
  