# architecture for frontend

> This will be the top level architecture for the frontend of the galericms repo.

## TODO:
- [x] Create technical architecture
- [x] Create wireframes
- [ ] Create / Compare API spec
- [ ] Start on basic site

## Feature requirements (technical)
- React frontend
- Live search in header
- Filter project attributes on home page
- Login/Signup
  - JWT for auth
  - Possible SSO auth
- Tag list will grow, each project can have multiple tags
- Each project can have 1 owner, multiple people that can modify
- Project attributes
  - Can be archived
  - Created Date
  - Last Updated Date
  - "Is New" \(Created < 1 month ago\)
  - Title (project name)
  - List of tags 
  - Is B2C
  - Is B2B
  - Owner name
  - Who can modify list
  - Markdown contents of the page
    - Images can be hosted in site page directory
      - e.g. `/proj-1/img/foo.jpg`
    - Or images could be hosted elsewhere, maybe POST the image and return the URL for it?

## Wireframes:
See `../wireframes/GaleriSite.xcf`

## Create / Compare API spec
- REST api specification
- GET's:
  - `/projects`
    - Get list of all project objs
  - `/projects?q=:query`
    - Get list of project objs based on `query`
  - `/projects/:id`
    - Get single project obj based on `id`
  - `/users`
    - Get list of all user objs
  - `/users?q=:query`
    - Get list of user objs based on `query`
  - `/users/:id`
    - Get single user obj based on `id`
  - `/tags`
    - Get all tags
  - `/tags?q=:query`
    - Get tags  based on `query`
- POSTS's:
  - `/projects`
    - Create new project
  - `/users`
    - Create new user
  - `/tags`
- PATCH / PUT's:
  - `/projects/:id`
    - Update project based on `id`
  - `/users/:id`
    - Update user based on `id`
