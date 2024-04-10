import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Database';
import { ETableNames } from '../../ETableNames';

export const getById = async (id)=>{
  try{
    const result = await getDoc(doc(db, ETableNames.CITY, id));

    if(result.exists()) return result.data();

    return new Error('Registro não encontrado');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao consultar o registro');
  }
};