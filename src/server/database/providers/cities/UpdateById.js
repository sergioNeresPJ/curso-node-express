
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../Database';
import { ETableNames } from '../../ETableNames';
import { CitiesProvider } from '.';

export const updateById = async (id, city) => {
  try {
    const register = await CitiesProvider.getById(id);
    if (register instanceof Error) return register;
    else {
      const result = updateDoc(doc(db, ETableNames.CITY, id), city);

      if (result) return;

      return new Error('Erro ao atualizar registro');
    }
  } catch (err) {
    return new Error('Erro ao atualizar registro');
  }
};