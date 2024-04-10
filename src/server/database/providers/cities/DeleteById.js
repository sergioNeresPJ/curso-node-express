import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Database';
import { ETableNames } from '../../ETableNames';
import { CitiesProvider } from './index';

export const deleteById = async (id) => {
  const result = await CitiesProvider.getById(id);
  if (result instanceof Error) {
    return result;
  } else {
    await deleteDoc(doc(db, ETableNames.CITY, id))
      .catch(error => {
        console.log(error);
        return new Error('Erro ao apagar o registro');
      });
  }
  return;
};