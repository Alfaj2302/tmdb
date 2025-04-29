import React, { useEffect, useState } from 'react';
import { moviesList } from '../services/client.service';
import './MoviesList.css';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
}

interface TMDBConfiguration {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
  };
  change_keys: string[];
}

const MoviesList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const configurationString = localStorage.getItem('configurations');
  const configuration: TMDBConfiguration | null = configurationString
    ? JSON.parse(configurationString)
    : null;

   const imageBaseUrl = configuration!.images!.base_url!;
   const posterSizeUrl = configuration!.images!.poster_sizes![3]!;
   const imageUrlSize = imageBaseUrl + posterSizeUrl;

  useEffect(() => {

    const token = localStorage.getItem('authorizationToken');

    moviesList('/movie/now_playing?language=en-US&page=1', {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }).then((res) => {
      setMovies(res.data.results);
      setLoading(false);
    });
  }, []);

  return (
    <div className="movies-page">
      <main>
        <div className="movies-grid">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            movies.map((movie) => (
              <div className="movie-card" key={movie.id}>
                <img
                  src={`${imageUrlSize}${movie.poster_path}`}
                  alt={movie.title}
                  loading="lazy"
                />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <div className="movie-description">{movie.overview}</div>
                  <div className="movie-details">
                    <span className="rating">★ {movie.vote_average.toFixed(1)}</span>
                    <span className="year">
                      {new Date(movie.release_date).getFullYear()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="pagination">{/* Pagination buttons */}</div>
      </main>
      <footer>{/* Footer content */}</footer>
    </div>
  );
};

export default MoviesList;
