export default {
  name: 'explore',
  title: 'Explore',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title*',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ]
}
