import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import MunicipioService from '@src/services/MunicipioService';
import { IMunicipio } from '@src/models/Municipio';
import { IReq, IRes } from './types/express/misc';


// **** Functions **** //

/**
 * Get all municipio.
 */
async function getAll(_: IReq, res: IRes) {
  const municipio = await MunicipioService.getAll();
  return res.status(HttpStatusCodes.OK).json({ municipio });
}

/**
 * Add one municipio.
 */
async function add(req: IReq<{municipio: IMunicipio, idA : number, idB : number}>, res: IRes) {
  const { municipio } = req.body;
  const { idA, idB } = req.params;
  await MunicipioService.addOne(municipio, Number(idA), Number(idB));
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one municipio.
 */
async function update(req: IReq<{municipio: IMunicipio}>, res: IRes) {
  const { municipio } = req.body;
  await MunicipioService.updateOne(municipio);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one municipio.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await MunicipioService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}


// **** Export default **** //

export default {
  getAll,
  add,
  update,
  delete: delete_,
} as const;