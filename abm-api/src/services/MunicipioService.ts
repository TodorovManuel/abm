import MunicipioRepo from '@src/repos/MunicipioRepo';
import { IMunicipio } from '@src/models/Municipio';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';


// **** Variables **** //

export const municipio_NOT_FOUND_ERR = 'Municipio not found';


// **** Functions **** //

/**
 * Get all municipios.
 */
function getAll(): Promise<IMunicipio[]> {
  return MunicipioRepo.getAll();
}

/**
 * Add one municipio.
 */
function addOne(municipio: IMunicipio, idA:number, idB:number): Promise<void> {
  return MunicipioRepo.add(municipio, idA, idB);
}

/**
 * Update one municipio.
 */
async function updateOne(municipio: IMunicipio): Promise<void> {
  const persists = await MunicipioRepo.persists(municipio.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      municipio_NOT_FOUND_ERR,
    );
  }
  // Return municipio
  return MunicipioRepo.update(municipio);
}

/**
 * Delete a municipio by their id.
 */
async function _delete(id: number): Promise<void> {
  const persists = await MunicipioRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      municipio_NOT_FOUND_ERR,
    );
  }
  // Delete municipio
  return MunicipioRepo.delete(id);
}


// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
