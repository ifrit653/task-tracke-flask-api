# Node.js API Backend Skeleton

A simple Node.js HTTP server skeleton that can be used as an API backend for a single page application (SPA).

## Preamble

Node.js is a JavaScript runtime platform based on the V8 engine that's also used in Chrome browsers.

It's single-threaded, but features a compicated event loop for processing of asynchronous events, giving the ability to handle tons of asynchronous tasks at the same time. A Node.js application will perform very poorly if you hog up this single thread. Try using asyncronous flavours of all I/O operations.

It's not just for writing HTTP (web) servers. It's a generic JavaScript platform for lots of different things.

The official names and spellings are:

- Node.js (not just "Node")
- npm (all lowercase)

**Note:** Knowing the official spelling of the name of a brand or product is an honorable thing!

Try Node.js now:

```
node
```

This is a REPL (read-evel-print loop) that allows you to experiment with Node.js. You can use it to prototype code excerpts, or even load 3rd-party modules to play around with them. Hit CTRL-C twice to exit.

Check the version of Node.js you have (always good to know):

```
node --version
```

## Initialize

Create a new project folder:

```
mkdir node-api-backend-skeleton
cd node-api-backend-skeleton
```

Initialize a package.json file:

```
npm init
```

Accept all defaults except:

1. version - set to 0.0.0 - we'll bump up the version when we're ready
2. license - UNLICENSED - because we're not going to publish this project as a reusable module

Edit package.json and mark it as private (to prevent accidentally publishing it on npm) by adding this property:

```
...
"private": true,
...
```

## Bring in Express

Install Express:

```
npm install --save express
```

## Housekeeping

To make syntax consistency and integral part of the project, you can create an .editorconfig file in your project to tell the IDEs of anyone working with the project the whitespace rules to follow.

[EditorConfig](http://editorconfig.org/) to the rescue!

**Note:** Use EditorConfig. Tell people about it. Contribute .editorconfig files to open source projects.

If your IDE doesn't have built-in support for EditorConfig, install an addon.

Create your .editorconfig file with the following content:

```
root = true

[*]
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
indent_style = space
indent_size = 2
```

## First bit of code

Create our src folder and create index.js under it:

```
mkdir src
touch src/index.js
```

Put the following in index.js to set up an HTTP server:

```
const express = require('express);

const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello!');
});

const port = parseInt(process.env.PORT || 8080, 10);

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

**Note:** Use empty lines liberally, to make code more readable. It's like writing prose. When there's a natural break, it's a new paragraph.

**Note:** I keep 3rd-party modules separate from application modules with a blank line.

**Note:** Have sensible defaults for your configuration parameters.

**Note:** Always use the radix argument when using `parseInt()`. It's dangerous without it.

Now try breaking rules in your .editorconfig and see how the IDE behaves. Try leaving multiple blank lines at the end of the file. Add trailing spaces. When you save the file, the IDE should clean up all that noise. When you hit TAB to indent, the IDE will indent exactly how you wanted in .editorconfig.

## First run

Run the application:

```
node src/index
```

Visit http://localhost:8080

You should see "Hello!".

Add a start script to package.json:

```
...
"scripts": {
  "start": "node src/index
},
...
```

Now you can start the application by:

```
npm start
```

## Document

Let's document all we know so far. Create a README.md file.

```
touch README.md
```

Add the following content:

```
# node-api-backend-skeleton

A simple Node.js API backend skeleton.

## Install

Type: `npm install`

## Run

Type: `npm start`

Then visit http://localhost:8080
```

## Commit to Git

Let's take a snapshot and preserve what we have so far. Frequent commits is king.

**Note:** Good colleagues don't let other colleagues go without frequent commits.

Let's initialize a Git repository:

```
git init
```

Check the status of this new repo:

```
git status
```

**Note:** Make it a habit to check the status before making commits.

You'll see that the node_modules folder is bothering Git as an untracked folder. We don't want that. node_modules doesn't belong in the project, so let's tell Git to ignore it:

```
echo node_modules >> .gitignore
```

Check status again:

```
git status
```

All should look good now. Let's add everything we want to commit:

```
git add .
```

Let's make our first commit:

```
git commit -m "Initial commit"
```

## Static files and API

Now, let's add two routes, one to serve static files (for the SPA), and one as a dummy API endpoint:

```
mkdir src/static
touch src/static/index.html
```

Let's put a hello in index.html, but let's use a modern HTML template:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello</title>
</head>
<body>
  <h1>Hello!</h1>
</body>
</html>
```

**Note:** `lang="en"` prevents the browser from suggesting to translate the page to English is any Unicode characters trip the browser into believing that it's in some other language.

**Note:** This is HTML, not XML. So, no need to self-close (e.g. `<meta ... />`) elements like `<meta>`, `<link>`, `<img>` etc.

Remove the old '/' path route and add the following in index.js:

```
app.get('/api/test', (req, res, next) => {
  res.json({ message: 'Testing 123' });
});

app.use('/', express.static('./src/static'));
```

**Note:** The order matters. Path specificity comes into play.

**Note:** Is `{ message: 'Testing 123' }` "JSON"? No. It's JavaScript. It's only "JSON" in the serialized form, as a string: `'{ "message": "Testing 123" }'`.

**Note:** Almost every "REST" API that you hear about is not truly fully RESTful (look up "Richardson Maturity Model"). REST is usually used as a buzzword, except for rare cases where a big company like Facebook or Twitter opens up their services to machine consumption through RESTful APIs. It takes blood and tears to create a truly RESTful API, and it's usually not necessary in the first place. In most cases, it is more pragmatic and more computationally efficient to have a bespoke API that meets the immediate needs of your SPA.

Now, restart your application and test both http://localhost:8080 and http://localhost:8080/api/test

Let's make an incremental commit, because we know better.

```
git commit -am "Add dummy API endpoint and static file route"
```

## Refactoring

Even for a moderately sized application, you can't afford to have everythign in a single index.js file. Let's adopt an opinioned folder structure:

```
/src
  /config
    /index.js
  /controllers
    /test
      /index.js
  /routers
    /api
      /index.js
  /static
    index.html
```

(Rest to be done interactively, because too much ground to cover here.)
