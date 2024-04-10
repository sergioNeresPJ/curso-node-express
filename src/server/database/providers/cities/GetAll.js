import { collection, query, orderBy, limit, getDocs, startAt } from 'firebase/firestore';
import { db } from '../../Database';
import { ETableNames } from '../../ETableNames';

export const getAll = async (page, limitParam) => {
  try {
    // Calculate the initial index based on the page and limit
    const startIndex = (page - 1) * limitParam;

    // Reference to the "cities" collection
    const citiesRef = collection(db, ETableNames.CITY);

    // Query to retrieve cities with names similar to the filter (case-insensitive)
    const q = query(
      citiesRef,
      orderBy('nome'), // Sort results by name
      limit(limitParam), // Limit the number of results
      startAt(startIndex) // Indicate where to start the query
    );

    // Get the query results
    const querySnapshot = await getDocs(q);

    // Check if there are documents in the query
    if (!querySnapshot.empty) {
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } else {
      // If the query returns no documents, you can return a message or an error
      return new Error('No documents found');
    }
  } catch (err) {
    console.error('Error querying the database:', err);
    return new Error('Error querying the database');
  }
};
