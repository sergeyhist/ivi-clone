# Ivi clone
## About
This project represents multiple web pages for interactions with catalogue of movies.  
### Functional pages:
+ `/`  
Main page with multiple sliders.  
+ `/movies`  
Movies list with filters and sorting.  
+ `/movies/[id]`  
Movie info, comments and trailer. 
+ `/person/[id]`  
Person info with filmography.  
+ `/admin`  
Admin panel. Possibilities:  
  - Searching.  
  - Update movies and genres names.  
  - Delete movies.
### Modal windows
+ Auth modal  
Registration and authorization. Google and VK auth.
+ Movie modal  
Sections:
  - Persons of the selected movie.
  - Comments.
+ Search modal   
Redirect with entered query to [Ivi search](https://www.ivi.ru/search/?ivi_search)
### Links
+ Genres, countries and years links in header is functional.
+ Movies and catalogue links redirect to `/movies` page.
+ All other links redirect to [Ivi website](https://www.ivi.ru/movies/all).
### Translations
+ Russian
+ English

## Technologies
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB&style=plastic)](https://react.dev/)
[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white&style=plastic)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white&style=plastic)](https://www.typescriptlang.org/)
[![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white&style=plastic)](https://redux.js.org/)
[![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white&style=plastic)](https://sass-lang.com/)
[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white&style=plastic)](https://storybook.js.org/)
[![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black&style=plastic)](https://webpack.js.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Links
[Production on versel](https://ivi-clone.vercel.app/)   
[Backend](https://github.com/GoldenManBel/API_BackEnd)

## Installation
To install the project, follow these steps:
- Clone the repository to your local machine.
- Install dependencies:
  ```bash
  npm install
  # or
  yarn install
  ```

## Testing
For testing app with backend you need to install server with [instructions](https://github.com/GoldenManBel/API_BackEnd#running-application-in-docker) from this [repository](https://github.com/GoldenManBel/API_BackEnd).

To run the project in development mode, use the following command:
```bash
npm run dev
# or
yarn dev
```

Also you may build application and run it in production mode with the following commands:
```bash
npm run build
npm run start
# or
yarn build
yarn start
```

Application will be available at [http://localhost:3000](http://localhost:3000).
