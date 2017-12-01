// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCGORKPJSxtj6gJ1qwaPrvSlHMh9pvjJQA",
    authDomain: "rota-do-sol.firebaseapp.com",
    databaseURL: "https://rota-do-sol.firebaseio.com",
    projectId: "rota-do-sol",
    storageBucket: "rota-do-sol.appspot.com",
    messagingSenderId: "576642052071"
  }
};
