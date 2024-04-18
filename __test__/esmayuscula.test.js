const isUpperCase = require('../utils/esmayuscula');

test("comprobar Madrid es mayusculas", () => {
    
    expect(isUpperCase('MADRID')).toBe(true);
})
