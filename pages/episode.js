import PropTypes from 'prop-types';

import Layout from '../app/components/Layout/Layout';


const episode = props => (
  <Layout>
    <h1>{props.url.query.title}</h1>
    <p>Lorem ipsum woo</p>
  </Layout>
);

episode.propTypes = {
  url: PropTypes.shape({
    query: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  }),
};

episode.defaultProps = {
  url: {
    query: {
      title: '',
    },
  },
};

export default episode;
