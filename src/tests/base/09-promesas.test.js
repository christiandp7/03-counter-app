import { getHeroeByIdAsync } from '../../base/09-promesas'
import heroes from '../../data/heroes'

describe('Pruebas con promesas', () => {
  test('debe retornar un Heroe Ascyn', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then(heroe => {
      expect(heroe).toBe(heroes[0])
      done()
    })
  })

  test('debe retornar un error si el Heroe por id no existe', () => {
    const id = 10
    getHeroeByIdAsync(id).catch(error => {
      expect(error).toBe('No se pudo encontrar el héroe')
      done()
    })
  })


})
