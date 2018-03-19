import React from 'react';
import PropTypes from 'prop-types';

function SearchResult ({result, playVideo}){
  const { snippet } = result;
  const { videoId } = result.id;
  const { description, title } = snippet;
  const { height, width, url } = result.snippet.thumbnails.default;
  return (
    <li
      className="result-item"
      onClick={ event => {
        playVideo(videoId);
      }}
    >
      <img
        className="result-img"
        src={url}
        height={height}
        width={width}
      />
      <div className="result-description">
        <div>
          <strong>{title}</strong>
        </div>
        {description}
      </div>
    </li>
  );
};

SearchResult.propTypes = {
  result: PropTypes.shape({
    id: PropTypes.shape({
      videoId: PropTypes.string.isRequired
    }),
    snippet: PropTypes.shape({
      thumbnails: PropTypes.shape({
        default: PropTypes.shape({
          height: PropTypes.number.isRequired,
          width: PropTypes.number.isRequired,
          url: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  }),
  playVideo: PropTypes.func.isRequired
};

export default SearchResult;
