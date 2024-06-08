# create-candle-app

`create-candle-app` is a CLI tool that helps you set up a Next.js project with a predefined template, including TypeScript, TailwindCSS, Heroicons, and ShadCN.

## Features

* Next.js 14
* TypeScript
* TailwindCSS
* Heroicons
* ShadCN
* Preconfigured scripts

## Installation

To install `create-candle-app` , ensure you have Node.js and npm installed, then run:

```sh
npm install -g create-candle-app
```

## Usage

To create a new project, use the following command:

```sh
npx create-candle-app <project-name>
```

Replace `<project-name>` with the name of your new project. For example:

```sh
npx create-candle-app my-new-app
```

This command will:

1. Copy the template files to the new project directory.
2. Install the required dependencies.

## Project Structure

The generated project will have the following structure:

```arduino
my-new-app/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   └── ...
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Scripts

The following scripts are available:

* `dev`: Runs the Next.js development server.
* `build`: Builds the application for production.
* `start`: Starts the production server.
* `lint`: Runs ESLint.
To run these scripts, use:

```sh
npm run <script>
```

For example, to start the development server:

```sh
npm run dev
```

## Customizing the Template

You can customize the template by modifying the files in the src/templates/default directory. Ensure you update the package.json and other configuration files as needed.

## Development

To work on the create-candle-app project itself:

1. Clone the repository.
2. Install dependencies:

```sh
npm install
```

3. Build the project:

```sh
npm run build
```

4. Test the CLI tool locally:

```sh
npm start
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the ISC License. See the LICENSE file for details.
