import React, { useEffect, useRef, useState } from "react";
import Spinner from "../Spinner";
import Error from "./Error";
import Table from "./Table";
import { gql, useMutation, useQuery } from "@apollo/client";
import FAVOURITE_MOVIES from "./FavouriteMovies";
const MOVIES = gql`
  query {
    moviesForTable {
      id
      name
      director
      releaseDate
      runtime
    }
  }
`;

const ADD_FAVOURITE = gql`
  mutation addFavourite($movie: MovieInput!) {
    addFavourite(movie: $movie) {
      id
      name
    }
  }
`;

export default function Modal({ onClose, isOpen }) {
  const { loading, error, data } = useQuery(MOVIES);
  const [addMovieMutation] = useMutation(ADD_FAVOURITE, {
    refetchQueries: [
      {
        query: FAVOURITE_MOVIES,
      },
    ],
  });

  const modalWindowRef = useRef(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (modalWindowRef.current) {
      modalWindowRef.current.style.display = isOpen ? "block" : "none";
    }
  }, [isOpen, modalWindowRef]);

  const addMovie = async (movie) => {
    await addMovieMutation({
      variables: {
        movie: {
          id: movie.id,
          name: movie.name,
          director: movie.director,
          releaseDate: movie.releaseDate,
          runtime: movie.runtime,
        },
      },
    });
    onClose();
  };

  const onCancel = () => {
    setMessage("");
  };

  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;

  return (
    <div data-testid="modal" ref={modalWindowRef} className="modal">
      <div className="modal-content">
        {message.length > 0 ? (
          <div className="message">
            <h2 data-testid="message-text" className="message-text">
              {message}
            </h2>
            <button onClick={onCancel} className="btn">
              Cancel
            </button>
          </div>
        ) : (
          ""
        )}
        <Table
          showActionColumn={true}
          actionLabel="Add"
          onAction={addMovie}
          movies={data.moviesForTable}
        />
        <button data-testid="btn-close" className="btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
