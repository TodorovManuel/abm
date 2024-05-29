import ProvinciaRepo from '@src/repos/ProvinciaRepo';
import { IProvincia } from '@src/models/Provincia';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';


// **** Variables **** //

export const provincia_NOT_FOUND_ERR = 'Provincia not found';


// **** Functions **** //

/**
 * Get all provincias.
 */

function getAll(id : number): Promise<IProvincia[]> {
  return ProvinciaRepo.getAll(id);
}

/**
 * Add one provincia.
 */
function addOne(provincia: IProvincia, idPais:number): Promise<void> {
  return ProvinciaRepo.add(provincia, idPais);
}

/**
 * Update one provincia.
 */
async function updateOne(provincia: IProvincia): Promise<void> {
  const persists = await ProvinciaRepo.persists(provincia.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      provincia_NOT_FOUND_ERR,
    );
  }
  // Return provincia
  return ProvinciaRepo.update(provincia);
}

/**
 * Delete a provincia by their id.
 */
async function _delete(id: number): Promise<void> {
  const persists = await ProvinciaRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      provincia_NOT_FOUND_ERR,
    );
  }
  // Delete provincia
  return ProvinciaRepo.delete(id);
}


// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
