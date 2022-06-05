export default {
  name: 'enrollMethod',
  title: 'Enroll Method',
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
