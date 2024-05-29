import moment from 'moment';
import { IMunicipio } from '@src/models/Municipio'

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IProvincia {
  id: number;
  name: string;
  municipios: Array<IMunicipio>;
}


// **** Functions **** //

/**
 * Create new User.
 */
function new_(
  name?: string,
  municipios?: Array<IMunicipio>,
  id?: number, // id last cause usually set by db
): IProvincia {
  return {
    id: (id ?? -1),
    name: (name ?? ''),
    municipios: []
  };
}

/**
 * Get user instance from object.
 */
function from(param: object): IProvincia {
  if (!isProvincia(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as IProvincia;
  return new_(p.name, p.municipios, p.id);
}

/**
 * See if the param meets criteria to be a user.
 */
function isProvincia(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'municipios' in arg && typeof arg.municipios === 'object' && 
    'nombre' in arg && typeof arg.nombre === 'string'
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isProvincia,
} as const;