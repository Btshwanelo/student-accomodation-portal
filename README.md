# Student Accommodation Portal

## Project Description

The **Student Accommodation Portal** is a web application built with ReactJS that helps students find suitable accommodation options. The portal provides various features, including listing accommodations, filtering based on preferences, and displaying detailed information about each option. The application uses TailwindCSS for styling and Jest for testing.

## Table of Contents

- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (>= 14.x)
- npm (comes with Node.js)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Btshwanelo/student-accomodation-portal.git
   cd student-accommodation-portal
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   This will start the React development server, and you can view the application by navigating to `http://localhost:3000` in your browser.

## Usage

### Running the Application

To start the application in development mode, use:

```bash
npm start
```

### Building for Production

To build the project for production:

```bash
npm run build
```

This will generate a `build` directory with the compiled files.

## Features

- **Responsive Design:** The application is fully responsive, providing a seamless experience on both desktop and mobile devices.
- **Filter Options:** Users can filter accommodations based on criteria such as price, location, and type.
- **Detail View:** Each accommodation has a detailed view with images, pricing, and contact information.
- **User Authentication:** Users can sign up, log in, and save their favorite accommodations.

## Testing

This project uses **Jest** for unit testing. Test files are located in the `__tests__` directory.

### Running Tests

To run the test suite, use the following command:

```bash
npm test
```

### Example Test

Here is an example of how tests are structured in this project:

```javascript
import React from "react";
import { render, screen } from "@testing-library/react";
import FundingStatus from "../components/FundingStatus";

const fundingData = {
  project: "Project A",
  funded: true,
  fundingSource: "Investor X",
  amount: "$1,000,000",
};

test("renders with data", () => {
  render(<FundingStatus fundingData={fundingData} />);
  expect(screen.getByText("Funded:", { exact: false })).toBeInTheDocument();
  expect(screen.getByText("Yes", { exact: false })).toBeInTheDocument();
});
```

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
