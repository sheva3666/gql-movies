import Spinner from "../Spinner";
import Table from "./Table";
import Error from "./Error";
import { gql, useQuery } from "@apollo/client";

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

function Movies() {
  const { loading, error, data } = useQuery(MOVIES);

  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;

  return (
    <div className="movies">
      <Table showActionColumn={false} movies={data.moviesForTable} />
    </div>
  );
}

export default Movies;
