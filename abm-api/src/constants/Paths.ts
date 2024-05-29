/**
 * Express router paths go here.
 */


export default {
  Base: '/api',

  Paises: {
    Base: '/paises',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
    AgregarProvincia: '/:id/agregarProvincia',
  },
  Provincias: {
    Base: '/paises/:idA/',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:idB',
    AgregarMunicipio: '/provincias/:idB/agregarMunicipio',
  },
  Municipios: {
    Base: '/paises/:idA/provincias/:idB/',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:idC',
    AgregarMunicipio: '/provincias/:idB/agregarMunicipio'
  }
} as const;
