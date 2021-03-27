import React from 'react';
import { Movies } from '../../mock-data/movies';
import { MovieCard } from './movie-card';

export const MoviesList = () => {
    return Movies.map((movie) => (
        <MovieCard
            key={movie.id}
            title={movie.title}
            genre={movie.genre}
            url={movie.url}
            releaseDate={movie.releaseDate}
        />
    ));
};
