# Shopping Site

This project is a shopping website built using Vue.js for the frontend, Express.js for the backend, and a SQL database. It includes user login, product browsing, shopping cart, and checkout functionalities.

## Backend Repository

The backend repository for this project can be found [here](https://github.com/wulukewu/shopping-site-api).

## Demo

Check out the live demo of the project [here](https://shopping.luke-ray.site).

## Features

- [x] **Navbar:**
  - [x] Displays the shopping website's logo and name.
  - [x] Provides links to other pages.
  - [x] Login link disappears (and becomes a "Sign Out" link) after the user logs in.
- [x] **Login Page:**
  - [x] Registration functionality (allows multiple accounts to be created).
  - [x] Login functionality.
  - [x] Accessible only when the user is not logged in.
  - [ ] _(Bonus)_ Integration with Google account login.
- [x] **Product Page:**
  - [x] Lists all available products.
  - [x] Displays product information such as name and price.
  - [x] "Add to Cart" functionality (requires login).
  - [x] _(Bonus)_ Search functionality.
- [x] **Shopping Cart:**
  - [x] Navbar includes a simple preview of the cart contents.
  - [x] Allows users to remove items from the cart.
  - [ ] Enables users to select items for purchase and proceed to checkout.

## Installation

### Prerequisites

- Node.js and npm installed.
- Docker installed (optional, but recommended).

### Project setup (without Docker)

If you prefer running the app locally (without Docker):

```bash
npm install
```

### Compiles and hot-reloads for development (without Docker)

```bash
npm run serve
```

### Compiles and minifies for production (without Docker)

```bash
npm run build
```

### Lints and fixes files (without Docker)

```bash
npm run lint
```

### Customize configuration (without Docker)

See [Configuration Reference](https://cli.vuejs.org/config/).

## Usage

### Running the development server (without Docker):

```bash
npm run serve
```

### Building the project for production (without Docker):

```bash
npm run build
```

## Docker Instructions

This project includes a `Dockerfile` for easy containerization using Docker.

### Prerequisites

- Docker installed.

### Building the Docker Image

Navigate to the project's root directory (where the `Dockerfile` is located) and run the following command to build the Docker image:

```bash
docker build -t shopping-site .
```

**Explanation:**

- `docker build`: This command builds a Docker image from a Dockerfile.
- `-t shopping-site`: This tags the image with the name `shopping-site`. You can choose a different name if you prefer.
- `.`: This specifies the build context as the current directory. The Docker daemon will use this directory to access files needed for the build process.

### Running the Docker Container

After successfully building the image, you can run a Docker container from it using the following command:

```bash
docker run -p 8080:80 -e VUE_APP_API_URL='http://localhost:3000' shopping-site
```

**Explanation:**

- `docker run`: This command runs a new container from an image.
- `-p 8080:80`: This maps port 8080 on your host machine to port 80 inside the container. This allows you to access the application in your browser at `http://localhost:8080`. You can change `8080` to another available port on your machine.
- `-e VUE_APP_API_URL='http://localhost:3000'`: This sets the environment variable `VUE_APP_API_URL` inside the container to `http://localhost:3000`. **Crucially, you need to replace `http://localhost:3000` with the actual URL of your backend API.** If your backend is also running in Docker, you should use the service name of your backend container, as described in the Docker Compose section.
- `shopping-site`: This specifies the image to use for creating the container.

### Environment Variables in Docker

When using Docker, set `VUE_APP_API_URL` via the `-e` flag during `docker run` or, preferably, use Docker Compose for more complex setups. See the Docker Compose example below for a more robust solution.

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

This project is licensed under the Apache-2.0 License.
