export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
  console.log('teste')
  return async (dispatch) => {
    console.log('teste')
    dispatch(requestAPI());
    const fetched = await fetch('https://aws.random.cat/meow');
    const json = await fetched.json();
    dispatch(getPicture(json))
  }

}
