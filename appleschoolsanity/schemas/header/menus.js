export default {
  name: 'menus',
  title: 'Menus',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title*',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'menuUrl',
      title: 'Menu Url',
      type: 'text',
    },
    {
      name: 'subMenus',
      title: 'Sub Menus',
      type: 'array',
      of: [{type: 'reference', to: {type: 'menus'}}]
    },
  ]
}
