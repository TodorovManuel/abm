

import jsonfile from 'jsonfile';

import { IUser } from '@src/models/User';
import { IPais } from '@src/models/Pais';
import { IProvincia } from '@src/models/Provincia';
import { IMunicipio } from '@src/models/Municipio';


// **** Variables **** //

const DB_FILE_NAME = 'database.json';


// **** Types **** //

interface IDb {
  users: IUser[];
  paises: IPais[];
  provincias: IProvincia[]
  municipios: IMunicipio[]
}


// **** Functions **** //

/**
 * Fetch the json from the file.
 */
function openDb(): Promise<IDb> {
  return jsonfile.readFile(__dirname + '/' + DB_FILE_NAME) as Promise<IDb>;
}

/**
 * Update the file.
 */
function saveDb(db: IDb): Promise<void> {
  return jsonfile.writeFile((__dirname + '/' + DB_FILE_NAME), db);
}


// **** Export default **** //

export default {
  openDb,
  saveDb,
} as const;
