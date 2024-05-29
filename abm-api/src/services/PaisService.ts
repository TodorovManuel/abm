import PaisRepo from '@src/repos/PaisRepo';
import { IPais } from '@src/models/Pais';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';


// **** Variables **** //

export const USER_NOT_FOUND_ERR = 'Pais not found';


// **** Functions **** //

/**
 * Get all users.
 */
function getAll(): Promise<IPais[]> {
  return PaisRepo.getAll();
}

/**
 * Add one user.
 */
function addOne(pais: IPais): Promise<void> {
  return PaisRepo.add(pais);
}

/**
 * Update one pais.
 */
async function updateOne(pais: IPais): Promise<void> {
  const persists = await PaisRepo.persists(pais.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      USER_NOT_FOUND_ERR,
    );
  }
  // Return user
  return PaisRepo.update(pais);
}

/**
 * Delete a user by their id.
 */
async function _delete(id: number): Promise<void> {
  const persists = await PaisRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      USER_NOT_FOUND_ERR,
    );
  }
  // Delete pais
  return PaisRepo.delete(id);
}


// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
