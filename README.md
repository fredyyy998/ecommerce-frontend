# EcommerceFrontend

This project is part of the [microservice ecommerce project](https://github.com/fredyyy998/ecommerce) and is the frontend part to the backend project. Since this web app depends on the backend
it will only run together with that project. Therefore, it is recommended to take a look at that project first, to get that running before starting this project.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.


## Getting started

1. Install nodejs [further information](https://nodejs.org/en)
2. (Optional) It is recommended but not necessary to install the angular cli with `npm install -g @angular/cli`
3. Run `npm install` to install all project dependencies
4. If the angular cli is installed run `ng serve`, otherwise `npm run start` will also work

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Deployment

The project has implemented a GitHub action to automatically build and deploy a production docker image. This image can be found at the GitHub repository at the url `ghcr.io/fredyyy998/ecommerce-frontend/ecommerce-app`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
