import Layout from '../app/components/Layout';
// import EpisodeLink from '../app/components/EpisodeLink';


const indexHeaderStyles = {
  container: {
    display: 'inline-block',
    width: '100%',
    textAlign: 'center',
    height: '80vh',
    minHeight: '420px',
    backgroundColor: '#000',
    color: '#fff',
  },
  h1: {
    fontSize: '70px',
    fontWeight: '300',
  },
  p: {
    fontSize: '21px',
    fontWeight: '400',
  },
  imgContainer: {
    maxWidth: '50%',
    maxHeight: '50%',
    objectFit: 'contain',
  },
};

const indexStyles = {
  div: {
    fontSize: '21px',
  },
};

const index = () => (
  <Layout>

    <div style={indexHeaderStyles.container}>
      <i><h1 style={indexHeaderStyles.h1}>Well, Technically</h1></i>
      <img style={indexHeaderStyles.imgContainer} src="/static/blob-woman.png" alt="Doodle of a woman" />
    </div>

    <div style={indexStyles.div} className="container">
      <p>
        <i>Well Technically</i> is an upcoming podcast by and about female-identified programmers. We are boosting female voices and changing the discourse around women who code. If you would like to be interviewed, <a href="https://docs.google.com/forms/d/e/1FAIpQLSdj-k97RE8JsghvLs3r-zAR96cggVlYSYI5QVxmGQMF5fhcTQ/viewform?usp=sf_link">we would love to hear from you!</a>
      </p>

      <p>
        If you are interested in becoming a sponsor, click <a href="mailto:welltechnicallypodcast@gmail.com?Subject=Sponsor" target="_top">here</a>.
      </p>

      {/* <ul>
        <EpisodeLink
          id="episode1"
          title="Lorem Ipsum Episode Foo"
          text="Lorem ipsum dolor amet cred 8-bit la croix, readymade bushwick pug church-key. Whatever pitchfork salvia, hella direct trade iPhone echo park chia palo santo typewriter neutra. Bicycle rights shaman bespoke, VHS organic church-key sriracha thundercats ennui knausgaard. Lumbersexual yr farm-to-table, tumblr direct trade taiyaki whatever. Etsy listicle 3 wolf moon tousled kitsch raw denim ethical knausgaard locavore post-ironic gluten-free four dollar toast."
        />
        <EpisodeLink
          id="episode2"
          title="Lorem Ipsum Episode Bar"
          text="Lorem ipsum dolor amet cred 8-bit la croix, readymade bushwick pug church-key. Whatever pitchfork salvia, hella direct trade iPhone echo park chia palo santo typewriter neutra. Bicycle rights shaman bespoke, VHS organic church-key sriracha thundercats ennui knausgaard. Lumbersexual yr farm-to-table, tumblr direct trade taiyaki whatever. Etsy listicle 3 wolf moon tousled kitsch raw denim ethical knausgaard locavore post-ironic gluten-free four dollar toast."
        />
        <EpisodeLink
          id="episode3"
          title="Lorem Ipsum Episode Baz"
          text="Lorem ipsum dolor amet cred 8-bit la croix, readymade bushwick pug church-key. Whatever pitchfork salvia, hella direct trade iPhone echo park chia palo santo typewriter neutra. Bicycle rights shaman bespoke, VHS organic church-key sriracha thundercats ennui knausgaard. Lumbersexual yr farm-to-table, tumblr direct trade taiyaki whatever. Etsy listicle 3 wolf moon tousled kitsch raw denim ethical knausgaard locavore post-ironic gluten-free four dollar toast."
        />
      </ul> */}
    </div>

  </Layout>
);

export default index;
