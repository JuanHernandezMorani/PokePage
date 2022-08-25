export const getTypes = () => async (dispatch) => {
  const response = await fetch("http://192.168.100.6:3001/types");
  const data = await response.json();
  dispatch({
    type: "GET_TYPE",
    payload: data,
  });
};

export const getPokemons = () => async (dispatch) => {
  const response = await fetch(`http://192.168.100.6:3001/pokemons`);
  const data = await response.json();
  dispatch({
    type: "GET_POKEMONS",
    payload: data,
  });
};

export const getByName = (name) => async (dispatch) => {
  const response = await fetch(
    `http://192.168.100.6:3001/pokemons?name=${name}`
  );
  const data = await response.json();
  dispatch({
    type: "GET_NAME",
    payload: data,
  });
};

export const filters = (num) => async (dispatch) => {
  const response = await fetch(
    `http://192.168.100.6:3001/pokemons?by=${num}`
  );
  const data = await response.json();
  dispatch({
    type: "FILTER",
    payload: data,
  });
};

export const type = (type) => (dispatch) => {
  dispatch({
    type: "BY_TYPE",
    payload: type,
  });
};

export const order = (order) => (dispatch) => {
  dispatch({
    type: "ORDER",
    payload: order,
  });
};

export const add = (pokemon) => (dispatch) => {
  dispatch({
    type: "ADD",
    payload: pokemon,
  });
};