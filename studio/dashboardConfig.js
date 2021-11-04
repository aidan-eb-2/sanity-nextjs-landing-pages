export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61842a3af9a73737a9d3ba11',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5kcrizna',
                  apiId: '7da91f0f-def6-44fa-a3cb-1ec0d64aeddf'
                },
                {
                  buildHookId: '61842a3a19efcf33766c8821',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-i4jgun1v',
                  apiId: '202fd7c2-57e7-4d5b-b7da-609917c188bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aidan-eb-2/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-i4jgun1v.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
