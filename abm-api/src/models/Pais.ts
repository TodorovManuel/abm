import moment from 'moment';
import { IProvincia } from '@src/models/Provincia'

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IPais {
  id: number;
  name: string;
  provincias: Array<IProvincia>;
}


// **** Functions **** //

/**
 * Create new User.
 */
function new_(
  name?: string,
  provincias?: Array<IProvincia>,
  id?: number, // id last cause usually set by db
): IPais {
  return {
    id: (id ?? -1),
    name: (name ?? ''),
    provincias: []
  };
}

/**
 * Get user instance from object.
 */
function from(param: object): IPais {
  if (!isPais(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as IPais;
  return new_(p.name, p.provincias, p.id);
}

/**
 * See if the param meets criteria to be a user.
 */
function isPais(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'provincias' in arg && typeof arg.provincias === 'object' && 
    'name' in arg && typeof arg.name === 'string'
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isPais,
} as const;