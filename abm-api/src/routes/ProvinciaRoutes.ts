import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import ProvinciaService from '@src/services/ProvinciaService';
import { IProvincia } from '@src/models/Provincia';
import { IReq, IRes } from './types/express/misc';


// **** Functions **** //

/**
 * Get all pais.
 */
async function getAll(_: IReq<{idA: number}>, res: IRes) {
  const id  = Number(_.params.idA);
  console.log(id);
  const provincia = await ProvinciaService.getAll(id);
  return res.status(HttpStatusCodes.OK).json({ provincia });
}

/**
 * Add one pais.
 */
async function add(req: IReq<{provincia: IProvincia, idA: number}>, res: IRes) {
  const { provincia } = req.body;
  const { idA } = req.params;
  console.log(provincia);
  await ProvinciaService.addOne(provincia, Number(idA));
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one pais.
 */
async function update(req: IReq<{pais: IProvincia}>, res: IRes) {
  const { pais } = req.body;
  await ProvinciaService.updateOne(pais);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one pais.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await ProvinciaService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}


// **** Export default **** //

export default {
  getAll,
  add,
  update,
  delete: delete_,
} as const;
