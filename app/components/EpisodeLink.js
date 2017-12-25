import Link from 'next/link';
import PropTypes from 'prop-types';

const EpisodeLink = props => (
  <li>
    <div className="rule" />

    <Link as={`/episode/${props.id}`} href={`/episode?title=${props.title}`}>
      <h1><a>{props.title}</a></h1>
    </Link>

    <p>{props.text}</p>

    <Link as={`/episode/${props.id}`} href={`/episode?title=${props.title}`}>
      <a>Read more...</a>
    </Link>

    <style jsx="true">
      {`
        li {
          display: inline-block;
          margin-top: 56px;
        }

        .rule {
          width: 70px;
          border-top: 1px solid black;
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
