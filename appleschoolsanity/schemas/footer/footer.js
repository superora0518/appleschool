export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'footerImage',
      title: 'Footer Image*',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description*',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'explore',
      title: 'Explore',
      type: 'array',
      of: [{type: 'reference', to: {type: 'explore'}}]
    },
    {
      name: 'about',
      title: 'About',
      type: 'array',
      of: [{type: 'reference', to: {type: 'menus'}}]
    },
    {
      name: 'enrolledFamilies',
      title: 'Enrolled Families',
      type: 'array',
      of: [{type: 'reference', to: {type: 'enrollMethod'}}]
    },
  ]
}
