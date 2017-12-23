import PropTypes from 'prop-types';

const Content = props => (
  <div className="container">
    <h1>{props.title}</h1>
    {props.children}
  </div>
);

Content.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Content;
