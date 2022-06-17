import React, { useState } from "react";
import Spinner from "../Spinner";
import Table from "./Table";
import Modal from "./Modal";
import Error from "./Error";
import { gql, useQuery, useMutation } from "@apollo/client";

export const FAVOURITE_MOVIES = gql`
  query favouriteMoviesForTable {
    favouriteMoviesForTable {
      id
      name
      director
      releaseDate
      runtime
    }
  }
`;

const DELETE_FAVOURITE = gql`
  mutation ($id: ID!) {
    deleteFavourite(id: $id) {
      id
    }
  }
`;

function FavouriteMovies({ setRefreshCounter, refreshCounter }) {
  const { loading, error, data } = useQuery(FAVOURITE_MOVIES);
  const [deleteFavourite] = useMutation(DELETE_FAVOURITE, {
    refetchQueries: [{ query: FAVOURITE_MOVIES }, "favouriteMoviesForTable"],
  });
  //const favouriteMovies = data;
  //const [refreshCounter, setRefreshCounter] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClose = () => {
    setRefreshCounter(refreshCounter + 1);

    setIsModalOpen(false);
  };

  const onDelete = async (favouriteMovie) => {
    await deleteFavourite({
      variables: {
        id: favouriteMovie.id,
      },
    });
    onClose();
  };

  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;

  return (
    <React.Fragment>
      <button
        data-testid="add"
        className="btn add-movie"
        onClick={() => setIsModalOpen(true)}
      >
        Add movie
      </button>
      <Modal isOpen={isModalOpen} onClose={onClose} />
      <div className="favorite-movies">
        <Table
          showActionColumn={true}
          onAction={onDelete}
          actionLabel="X"
          movies={data.favouriteMoviesForTable}
        />
      </div>
    </React.Fragment>
  );
}

export default FavouriteMovies;
