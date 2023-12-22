const tips = {
    name: 'tips',
    title: 'Tips',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'headline',
            title: 'Headline',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        // {
        //     name: 'tags',
        //     title: 'Tags',
        //     type: 'array',
        //     of: [{
        //         type: 'object',
        //         name: 'tag',
        //         fields: [
        //             { type: 'string', name: 'name', title: 'Name' },
        //         ]
        //     }]
        // },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
            style: [{ title: 'Normal', value: 'normal' }, { title: 'Heading 1', value: 'h1' }, { title: 'Heading 2', value: 'h2' }, { title: 'Heading 3', value: 'h3' }, { title: 'Heading 4', value: 'h4' }],
        }
    ],

}

export default tips;