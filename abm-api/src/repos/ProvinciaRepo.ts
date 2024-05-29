import { IProvincia } from '@src/models/Provincia';
import { getRandomInt } from '@src/util/misc';
import orm from './MockOrm';


// **** Functions **** //

/**
 * Get one provincia.
 */
async function getOne(name: string): Promise<IProvincia | null> {
  const db = await orm.openDb();
  for (const provincia of db.provincias) {
    if (provincia.name === name) {
      return provincia;
    }
  }
  return null;
}

/**
 * See if a provincia with the given id exists.
 */
async function persists(id: number): Promise<boolean> {
  const db = await orm.openDb();
  for (const provincia of db.provincias) {
    if (provincia.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all provincias.
 */
async function getAll(id : number): Promise<IProvincia[]> {
  console.log(id);
  const db = await orm.openDb();
  for (const pais of db.paises) {
    if(pais.id === id){
      return pais.provincias;
    }
  }
  return db.provincias;
}

/**
 * Add one provincia.
 */
async function add(provincia: IProvincia, idPais: number): Promise<void> {
  //get 
  console.log(idPais);
  const db = await orm.openDb();
  for (const pais of db.paises) {
    if(pais.id === idPais){
      pais.provincias.push(provincia);
    }
  }
  return orm.saveDb(db);
}

/**
 * Update a provincia.
 */
async function update(provincia: IProvincia): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.provincias.length; i++) {
    if (db.provincias[i].id === provincia.id) {
      const dbprovincia = db.provincias[i];
      db.provincias[i] = {
        ...dbprovincia,
        name: provincia.name,
        municipios: provincia.municipios,
      };
      return orm.saveDb(db);
    }
  }
}

/**
 * Delete one provincia.
 */
async function delete_(id: number): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.provincias.length; i++) {
    if (db.provincias[i].id === id) {
      db.provincias.splice(i, 1);
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