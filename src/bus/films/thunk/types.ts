// Fetch
export const FETCH_FILMS_ASYNC = 'FETCH_FILMS_ASYNC';
export type fetchFilmsActionAsync = {
    type: typeof FETCH_FILMS_ASYNC
}
export type FetchFilmsContract = () => fetchFilmsActionAsync
