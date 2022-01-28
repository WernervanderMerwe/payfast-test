My first website built in the MVC design pattern.

I'm using https://github.com/WernervanderMerwe/The-Complete-Javascript-Course/tree/main/18-forkify/starter/src/js as a base to reference back to but it has proved way harder than I initially anticipated to try and recreate the MVC design using the website im building exposing quite a few weaknesses regarding understanding the "this" keyword, inheritance, OOP in general, functions calling functions on calling functions.

Using TailwindCSS to help me style the UI and bring on element changes quicker.

I used random 'E-store' Templates and added my own flair on what I think looks good.

Todo:

1. Look into hashchange to split the website up into pages.
2. Impliment a remove item in cart function
3. Do step 2-4 on https://developers.payfast.co.za/docs#home
4. make a Payment success modal message when redirected from Payfast
5. Add contact me dropdown
6. Refactor the TailwindCSS code to read easier and get rid of unnecessary Tailwind code not working anymore.
7. Refactor all my old logic so that it follows the same structure of the new understanding of how eventlisteners work.
8. Install Parcel, build, fix bugs and deploy to netlify.

Local setup:

- Live Server extention used for development
- Rename config-sample.js to config.js with updated parameters

Directory Structure:

- Dist:

  - Tailwind compiles css into the dist directory and then gets used in the HTML

- img:

  - Storage of all local images

- node_modules:

  - Required to compile the tailwind

- src:
  - Controller.js:
    - Controller actions all click events and front end event
    - Fetches data through the model to the view
  - Model.js:
    - Data structure for products and categories
    - Does not directly communicate with view
  - View.js:
    - Listens to click events
    - Controls the rendered HTML
  - Style.css
    - Import of Tailwind
    - Style overrides
  - Prettierrc:
    - Code Linting/Standards
  - Index.html:
    - Main template
  - Tailwind.config.js:
    - Tailwind css configurations and preferences
  - config.js:
    - project specific configuration settings such as payfast sandbox settings
