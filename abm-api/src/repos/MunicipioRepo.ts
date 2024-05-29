import { IMunicipio } from '@src/models/Municipio';
import { getRandomInt } from '@src/util/misc';
import orm from './MockOrm';


// **** Functions **** //

/**
 * Get one municipio.
 */
async function getOne(name: string): Promise<IMunicipio | null> {
  const db = await orm.openDb();
  for (const municipio of db.municipios) {
    if (municipio.name === name) {
      return municipio;
    }
  }
  return null;
}

/**
 * See if a municipio with the given id exists.
 */
async function persists(id: number): Promise<boolean> {
  const db = await orm.openDb();
  for (const municipio of db.municipios) {
    if (municipio.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all municipios.
 */
async function getAll(): Promise<IMunicipio[]> {
  const db = await orm.openDb();
  return db.municipios;
}

/**
 * Add one municipio.
 */
async function add(municipio: IMunicipio, idPais: number, idProvincia: number): Promise<void> {
  const db = await orm.openDb();
  for (const pais of db.paises) {
    if (pais.id === idPais) {
      for (const provincia of pais.provincias) {
        if (provincia.id === idProvincia) {
          provincia.municipios.push(municipio);
        }
      }
    }
  }
  db.municipios.push(municipio);
  return orm.saveDb(db);
}

/**
 * Update a municipio.
 */
async function update(municipio: IMunicipio): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.municipios.length; i++) {
    if (db.municipios[i].id === municipio.id) {
      const dbmunicipio = db.municipios[i];
      db.municipios[i] = {
        ...dbmunicipio,
        name: municipio.name
      };
      return orm.saveDb(db);
    }
  }
}

/**
 * Delete one municipio.
 */
async function delete_(id: number): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.municipios.length; i++) {
    if (db.municipios[i].id === id) {
      db.municipios.splice(i, 1);
      return orm.saveDb(db);
    }
  }
}


// **** Export default **** //

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
} as const;