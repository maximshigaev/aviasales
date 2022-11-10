// Reducers
import { rootReducer } from './init/rootReducer';

export type TCity = {
  name: string,
  country: string,
  id: number,
  code: string,
}

export type TState = ReturnType<typeof rootReducer>;
