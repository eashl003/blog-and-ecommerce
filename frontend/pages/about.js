import { getAbout } from "../utils/api";



const About = ({about}) => {
    return (
      <div> {about.title}</div>
    )
}
  
export default About;

export async function getStaticProps() {
  const about = await getAbout()

  return {
    props: { about },
  };
}
  