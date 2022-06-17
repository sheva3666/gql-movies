import { render, screen } from "@testing-library/react";
import FavoriteMovies from "./FavouriteMovies";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";

test("shows login on first load", async () => {
  render(<FavoriteMovies />);

  expect(table()).toBeInTheDocument();
  expect(btnAddMovies()).toBeInTheDocument();
});

test("open modal", async () => {
  render(<FavoriteMovies />);

  user.click(btnAddMovies());

  expect(modal()).toBeInTheDocument();
  expect(addToList()).toBeInTheDocument();
  expect(btnClose()).toBeDefined();
});

test("add movie to list", async () => {
  render(<FavoriteMovies />);

  user.click(addToList());

  expect(btnAddMovies()).toBeInTheDocument();
  expect(table()).toBeInTheDocument();
  expect(deleteMovie()).toBeDefined();
});

test("delete movie from list", async () => {
  render(<FavoriteMovies />);
  user.click(btnAddMovies());
  user.click(addToList());
  expect(deleteMovie()).toBeDefined();

  user.click(deleteMovie());

  expect(btnAddMovies()).toBeInTheDocument();
  expect(table()).toBeInTheDocument();
  expect(deleteMovie()).toBeNull();
});

function btnAddMovies() {
  return screen.getByTestId("add");
}

function table() {
  return screen.getByTestId("table");
}

function modal() {
  return screen.getByTestId("modal");
}

function addToList() {
  return screen.getByText("Add movie");
}

function btnClose() {
  return screen.getByTestId("btn-close");
}

function deleteMovie() {
  return screen.queryByTestId("delete");
}
