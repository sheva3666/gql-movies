import React from "react";

function Table({ movies, showActionColumn, actionLabel, onAction }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Mouvie name</th>
          <th>Director</th>
          <th>Release date</th>
          <th>Runtime</th>
          {showActionColumn ? <th>Action</th> : null}
        </tr>
        {movies.map((movie) => {
          return (
            <tr key={movie.id}>
              <td>{movie.name}</td>
              <td>{movie.director}</td>
              <td>{movie.releaseDate}</td>
              <td>{movie.runtime} minutes</td>
              {showActionColumn ? (
                <td>
                  <button data-testid="delete" onClick={() => onAction(movie)}>
                    {actionLabel}
                  </button>
                </td>
              ) : null}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
