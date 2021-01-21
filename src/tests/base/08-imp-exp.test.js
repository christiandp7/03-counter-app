import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from '../../data/heroes'

describe('Pruebas en funciones de Heroes', () => {
  test('Debe de retornar un Heroe por id', () => {
    const id = 1
    const heroe = getHeroeById(id)
    const heroeData = heroes.find(h => h.id === id)
    expect(heroe).toEqual(heroeData)
  })

  test('Debe de retornar undefined si heroe no existe', () => {
    const id = 10
    const heroe = getHeroeById(id)
    expect(heroe).toBe(undefined)
  })

  //Tarea

  test('debe retornar un arreglo con los heroes de DC', () => {
    const owner = 'DC'
    const DCHeroes = getHeroesByOwner(owner)
    const DCHeroesData = heroes.filter(h => h.owner === owner)
    expect(DCHeroes).toEqual(DCHeroesData)
  })

  test('debe retornar un arreglo con los heroes de Marvel y length=2', () => {
    const owner = 'Marvel'
    const MarvelHeroes = getHeroesByOwner(owner)
    expect(MarvelHeroes.length).toBe(2)
  })

})
