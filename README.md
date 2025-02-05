# shopping-site
This project is a shopping website built using Vue.js for the frontend, Express.js for the backend, and a SQL database. It includes user login, product browsing, shopping cart, and checkout functionalities.

## Demo

Check out the live demo of the project [here](https://wulukewu.github.io/shopping-site).

## Features

- [ ] **Navbar:**
    - [x] Displays the shopping website's logo and name.
    - [ ] Provides links to other pages.
    - [ ] Login link disappears (and becomes a "Sign Out" link) after the user logs in.

- [ ] **Login Page:**
    - [ ] Registration functionality (allows multiple accounts to be created).
    - [ ] Login functionality.
    - [ ] Accessible only when the user is not logged in.
    - [ ] *(Bonus)* Integration with Google account login.

- [ ] **Product Page:**
    - [ ] Lists all available products.
    - [ ] Displays product information such as name and price.
    - [ ] "Add to Cart" functionality (requires login).
    - [ ] *(Bonus)* Search functionality.

- [ ] **Shopping Cart:**
    - [ ] Navbar includes a simple preview of the cart contents.
    - [ ] Allows users to remove items from the cart.
    - [ ] Enables users to select items for purchase and proceed to checkout.

## Installation

### Prerequisites

- Node.js and npm installed.

### Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Usage

To start the development server:

```bash
npm run serve
```

To build the project for production:

```bash
npm run build
```

## AI Image Generator for Product Images

This Python script automates the process of generating product images using an AI art generator website. It reads product names and IDs from a JSON file, feeds them as prompts to the AI, downloads the generated images, and saves them to a specified directory.

### Prerequisites

- Python 3.6 or higher
- Pip
- Google Chrome Browser
- ChromeDriver (handled by `webdriver-manager`)
- Required Python Packages (install using `pip install -r requirements.txt`)

### Setup and Configuration

1. Install Dependencies: `pip install -r requirements.txt`
2. Ensure `products.json` is located in the relative path `../../src/components/products/`.
3. Ensure the generated images directory exists or modify the script to create it.

### Usage

Run the script with: `python main.py`

### Customization

- AI Art Generator Website: Modify the `driver.get()` command in the `image_generator` function.
- Prompt Engineering: Experiment with different prompts in the `default_prompt` and `input_prompt` variables.
- Image Output Path: Modify the `image_path` variable.
- Headless Mode: Uncomment `options.add_argument("--headless")` to run Chrome in headless mode.
- Error Handling: Add try-except blocks to catch exceptions.

### Troubleshooting

- Ensure ChromeDriver version is compatible with your Google Chrome version.
- Ensure required packages are installed correctly.
- Update element selectors if the AI art generator website layout changes.
- Handle rate limiting errors by adding delays or retry logic.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
