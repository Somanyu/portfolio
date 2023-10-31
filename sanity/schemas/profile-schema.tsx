const profile = {
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
        {
            name: 'fullName',
            title: 'Full Name',
            type: 'string',
        },
        {
            name: 'headline',
            title: 'Headline',
            type: 'string',
        },
        {
            name: 'profileImage',
            title: 'Profile Image',
            type: 'url',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'bio',
            title: 'Bio',
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: 'resume',
            title: 'Resume',
            type: 'url',
        },
        {
            name: 'github',
            title: 'GitHub',
            type: 'url',
        },
        {
            name: 'linkedin',
            title: 'LinkedIn',
            type: 'url',
        },
        {
            name: 'stackoverflow',
            title: 'StackOverflow',
            type: 'url',
        },
        {
            name: 'discord',
            title: 'Discord',
            type: 'url',
        },
    ]
}

export default profile;