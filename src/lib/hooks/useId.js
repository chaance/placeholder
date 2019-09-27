import { useEffect, useState } from 'react';

let _id = 0;
const genId = (prefix = '') => `${prefix}${++_id}`;

export const useId = prefix => {
  const [id, setId] = useState(prefix ? `${prefix}${_id}` : _id);
  useEffect(() => setId(genId(prefix)), []);
  return id;
};
