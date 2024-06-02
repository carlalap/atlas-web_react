import { normalize, schema } from 'normalizr';

// Define a course schema
const course = new schema.Entity("courses");

export const coursesNormalizer = (data) => {
  return normalize(data, [course]);
};