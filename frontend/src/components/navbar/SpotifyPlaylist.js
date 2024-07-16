import React from 'react';
import './spotifyplaylist.css';

const SpotifyPlaylist = () => {
  return (
    <div className="spotify-playlist">
      <iframe
          title="Spotify Playlist"
          src="https://open.spotify.com/embed/playlist/59z0fRhIKiNFJgiUnMMjdS?utm_source=generator"
          width="400"
          height="152"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ borderRadius: '12px' }}
        ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;