import { getImagen } from "../../base/11-async-await"

// para hacer test a una funcion con async await no se usa done

describe('Pruebas con async y await y Fetch', () => {
  test('debe retornar el url de la imagen', async () => {
    const url = await getImagen()
    expect(url.includes('https://')).toBe('string')
  })

})
