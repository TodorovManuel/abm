import { IPais } from '@src/models/Pais';
import { getRandomInt } from '@src/util/misc';
import orm from './MockOrm';


// **** Functions **** //

/**
 * Get one pais.
 */
async function getOne(name: string): Promise<IPais | null> {
  const db = await orm.openDb();
  for (const pais of db.paises) {
    if (pais.name === name) {
      return pais;
    }
  }
  return null;
}

/**
 * See if a pais with the given id exists.
 */
async function persists(id: number): Promise<boolean> {
  const db = await orm.openDb();
  for (const pais of db.paises) {
    if (pais.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all paises.
 */
async function getAll(): Promise<IPais[]> {
  const db = await orm.openDb();
  return db.paises;
}

/**
 * Add one pais.
 */
async function add(pais: IPais): Promise<void> {
  const db = await orm.openDb();
  pais.id = getRandomInt();
  db.paises.push(pais);
  return orm.saveDb(db);
}

/**
 * Update a pais.
 */
async function update(pais: IPais): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.paises.length; i++) {
    if (db.paises[i].id === pais.id) {
      const dbpais = db.paises[i];
      db.paises[i] = {
        ...dbpais,
        name: pais.name,
        provincias: pais.provincias,
      };
      return orm.saveDb(db);
    }
  }
}

/**
 * Delete one pais.
 */
async function delete_(id: number): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.paises.length; i++) {
    if (db.paises[i].id === id) {
      db.paises.splice(i, 1);
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
