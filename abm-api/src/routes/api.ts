import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import Pais from '@src/models/Pais';
import Provincia from '@src/models/Provincia';
import PaisRoutes from './PaisRoutes';
import ProvinciaRoutes from './ProvinciaRoutes';
import Municipio from '@src/models/Municipio';
import MunicipioRoutes from './MunicipioRoutes';

// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();


// ** Add paisRouter ** //

const paisRouter = Router();

// Get all users
paisRouter.get(
  Paths.Paises.Get,
  PaisRoutes.getAll,
);

// Add one user
paisRouter.post(
  Paths.Paises.Add,
  validate(['pais', Pais.isPais]),
  PaisRoutes.add,
);

// Update one user
paisRouter.put(
  Paths.Paises.Update,
  validate(['pais', Pais.isPais]),
  PaisRoutes.update,
);

// Delete one user
paisRouter.delete(
  Paths.Paises.Delete,
  validate(['id', 'number', 'params']),
  PaisRoutes.delete,
);

// Add paisRouter
apiRouter.use(Paths.Paises.Base, paisRouter);



// PROVINCIA  FUNCTIONS


const provinciaRouter = Router({mergeParams: true});

// Get all users
provinciaRouter.get(
  Paths.Provincias.Get,
  validate(['idA', 'number', 'params']),
  ProvinciaRoutes.getAll,
);

// Add one user
provinciaRouter.post(
  Paths.Provincias.Add,
  validate(['provincia', Provincia.isProvincia]),
  ProvinciaRoutes.add,
);

// Update one user
provinciaRouter.put(
  Paths.Provincias.Update,
  validate(['provincia', Provincia.isProvincia]),
  ProvinciaRoutes.update,
);

// Delete one user
provinciaRouter.delete(
  Paths.Provincias.Delete,
  validate(['id', 'number', 'params']),
  ProvinciaRoutes.delete,
);

// Add provinciaRouter
apiRouter.use(Paths.Provincias.Base, provinciaRouter);









// MUNICIPIO  FUNCTIONS


const municipioRouter = Router({mergeParams: true});

// Get all users
municipioRouter.get(
  Paths.Municipios.Get,
  MunicipioRoutes.getAll,
);

// Add one user
municipioRouter.post(
  Paths.Municipios.Add,
  validate(['municipio', Municipio.isMunicipio]),
  MunicipioRoutes.add,
);

// Update one user
municipioRouter.put(
  Paths.Municipios.Update,
  validate(['municipio', Municipio.isMunicipio]),
  MunicipioRoutes.update,
);

// Delete one user
municipioRouter.delete(
  Paths.Municipios.Delete,
  validate(['id', 'number', 'params']),
  MunicipioRoutes.delete,
);

// Add municipioRouter
apiRouter.use(Paths.Municipios.Base, municipioRouter);


// **** Export default **** //

export default apiRouter;
