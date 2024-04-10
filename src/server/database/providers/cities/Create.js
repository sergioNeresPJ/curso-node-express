import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../Database';
import { ETableNames } from '../../ETableNames';

export const create = async (city)=>{
  try{
    const docRef = await addDoc(collection(db, ETableNames.CITY), city);
    if(docRef) return docRef.id;
    return new Error('Erro ao cadastrar registro');
  }catch(err){
    return new Error('Erro ao cadastrar registro');
  }
};