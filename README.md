# Workflow repo for the CA

This project is set up for testing code using **Vitest** for unit testing and **Playwright** for end-to-end (E2E) testing. It also includes a simple development server and Tailwind CSS configuration.

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

Clone the repository and install dependencies:

```sh
npm install
```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
TEST_USER_EMAIL=
TEST_USER_PASSWORD=
```

Modify the values according to your testing needs.

## Available Scripts

You can run the following commands:

### Development

- **Start TailwindCSS compilation:**
  ```sh
  npm run dev
  ```
  This watches for changes in `./css/input.css` and outputs to `./css/style.css`.

- **Start live server:**
  ```sh
  npm run start
  ```
  Runs a local development server on port 5500.

### Testing

#### Unit Testing (Vitest)

- **Run unit tests:**
  ```sh
  npm run test:unit
  ```

#### End-to-End Testing (Playwright)

- **Run E2E tests in headless mode:**
  ```sh
  npm run test:e2e
  ```

- **Run E2E tests with UI:**
  ```sh
  npm run test:e2e:ui
  ```

- **Run E2E tests in a headed browser:**
  ```sh
  npm run test:e2e:headed
  ```

- **Run E2E tests in debug mode:**
  ```sh
  npm run test:e2e:debug
  ```

## Additional Notes

- Ensure you have configured Playwright correctly before running E2E tests by installing the necessary browsers:
  ```sh
  npx playwright install
  ```
- Make sure the `.env` file is not committed to version control to keep credentials secure.