import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import PaisService from '@src/services/PaisService';
import { IPais } from '@src/models/Pais';
import { IReq, IRes } from './types/express/misc';


// **** Functions **** //

/**
 * Get all pais.
 */
async function getAll(_: IReq, res: IRes) {
  const pais = await PaisService.getAll();
  return res.status(HttpStatusCodes.OK).json({ pais });
}

/**
 * Add one pais.
 */
async function add(req: IReq<{pais: IPais}>, res: IRes) {
  const { pais } = req.body;
  await PaisService.addOne(pais);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one pais.
 */
async function update(req: IReq<{pais: IPais}>, res: IRes) {
  const { pais } = req.body;
  await PaisService.updateOne(pais);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one pais.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await PaisService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}


// **** Export default **** //

export default {
  getAll,
  add,
  update,
  delete: delete_,
} as const;
