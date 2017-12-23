import PropTypes from 'prop-types';

import Layout from '../app/components/Layout';
import Content from '../app/components/Content';

const episode = props => (
  <Layout>
    <Content title={props.url.query.title}>
      <p>Lorem ipsum woo</p>
    </Content>
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
