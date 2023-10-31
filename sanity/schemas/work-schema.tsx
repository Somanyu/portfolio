const work = {
    name: 'work',
    title: 'Work',
    type: 'document',
    fields: [
        {
            name: 'role',
            title: 'Role',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'start',
            title: 'Start',
            type: 'string'
        },
        {
            name: 'end',
            title: 'End',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }]
        }
    ],

}

export default work;