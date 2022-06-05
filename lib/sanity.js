import sanityClient from '@sanity/client';
export const client = sanityClient({
  projectId: 'k5f6fays',
  dataset: 'production',
  useCdn: true
});