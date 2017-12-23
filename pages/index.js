import Link from 'next/link';
import PropTypes from 'prop-types';

import Layout from '../app/components/Layout';


const EpisodeLink = props => (
  <li>
    <Link as={`/episode/${props.id}`} href={`/episode?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const index = () => (
  <Layout>
    <h1>Well Technically</h1>
    <ul>
      <EpisodeLink id="episode1" title="Lorem Ipsum Episode Foo" />
      <EpisodeLink id="episode2" title="Lorem Ipsum Episode Bar" />
      <EpisodeLink id="episode3" title="Lorem Ipsum Episode Baz" />
    </ul>
  </Layout>
);

EpisodeLink.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default index;
