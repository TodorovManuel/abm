import moment from 'moment';

// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IMunicipio {
  id: number;
  name: string;
}


// **** Functions **** //

/**
 * Create new User.
 */
function new_(
  name?: string,
  id?: number, // id last cause usually set by db
): IMunicipio {
  return {
    id: (id ?? -1),
    name: (name ?? '')
  };
}

/**
 * Get user instance from object.
 */
function from(param: object): IMunicipio {
  if (!isMunicipio(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as IMunicipio;
  return new_(p.name, p.id);
}

/**
 * See if the param meets criteria to be a user.
 */
function isMunicipio(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'nombre' in arg && typeof arg.nombre === 'string'
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isMunicipio,
} as const;