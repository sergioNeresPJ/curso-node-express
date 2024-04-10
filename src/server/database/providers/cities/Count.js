import { ETableNames } from '../../ETableNames';
import { db } from '../../Database';
import { collection, getCountFromServer, query, where } from 'firebase/firestore';

export const count = async (filter = '') => {
  try {
    const citiesRef = collection(db, ETableNames.CITY);
    const q = query(citiesRef, where('nome','array-contains', filter));
    //https://firebase.google.com/docs/firestore/query-data/aggregation-queries?authuser=0&hl=pt#use_the_count_aggregation
    const snapshot = await getCountFromServer(q);
    const count = snapshot.data().count;

    if (Number.isInteger(Number(count))) return Number(count);

    return new Error('Erro ao consultar a quantidade total de registros');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao consultar a quantidade total de registros');
  }
};