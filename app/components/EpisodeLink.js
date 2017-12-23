import Link from 'next/link';
import PropTypes from 'prop-types';

const EpisodeLink = props => (
  <li>
    <Link as={`/episode/${props.id}`} href={`/episode?title=${props.title}`}>
      <h1><a>{props.title}</a></h1>
    </Link>

    <p>{props.text}</p>

    <style jsx="true">
      {`
        li {
          margin-top: 56px;
          border-left: 1px solid black;
          padding: 0 28px;
        }
      `}
    </style>
  </li>
);

EpisodeLink.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default EpisodeLink;
