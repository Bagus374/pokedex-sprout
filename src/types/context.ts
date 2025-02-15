import type { PokemonCustom } from './pokemonList';
import type { Pokemon, Stat } from "./pokemon"
import type { Species } from "./species"

export type StoreProps = {
  state: StateProps
  dispatch: React.Dispatch<ActionProps>
}

export type ProviderProps = {
  children: React.ReactNode
}

export type StateProps = {
  pokemons: PokemonCustom[]
  pokemon: {
    about: About
    stats: Stat[]
  }
}

export type About = {
  flavorText: string
} & Pick<Species, 'egg_groups' | 'habitat'> 
  & Pick<Pokemon, 'weight' | 'height' | 'abilities'> 
  | null

export type ActionProps = 
  | {type: 'SET_POKEMONS', payload: PokemonCustom[]}
  | {type: 'SET_ABOUT', payload: About}
  | {type: 'SET_STATS', payload: Stat[]}
