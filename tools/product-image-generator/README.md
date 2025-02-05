# AI Image Generator for Product Images

This Python script automates the process of generating product images using an AI art generator website. It reads product names and IDs from a JSON file, feeds them as prompts to the AI, downloads the generated images, and saves them in a specified directory.

## Prerequisites

Before running the script, ensure you have the following installed:

*   **Python 3.6 or higher:**  Check your Python version with `python --version` or `python3 --version`.
*   **Pip:** The Python package installer.
*   **Google Chrome Browser:**  The script uses Selenium to automate Chrome.
*   **ChromeDriver:** The corresponding ChromeDriver version that matches your Google Chrome version.  `webdriver-manager` handles the installation of ChromeDriver.
*   **Required Python Packages:**  Install the necessary packages using pip:

    ```bash
    pip install -r requirements.txt
    ```

    This command installs `selenium`, `webdriver-manager`, and `urllib3`.

## Setup and Configuration

1.  **Install Dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

2.  **Product Data (products.json):**

    The script expects a JSON file named `products.json` located in the relative path `../../src/components/products/`.  This file should contain an array of product objects, each with `name` and `id` attributes:

    ```json
    [
      { "name": "Product 1 Name", "id": 1 },
      { "name": "Product 2 Name", "id": 2 },
      { "name": "Another Product", "id": 3 }
    ]
    ```

    **Important:** Ensure the file path in `main.py` (line `with open('../../src/components/products/products.json', 'r') as file:`) correctly points to your `products.json` file.

3.  **Image Output Path:**

    The generated images will be saved in the directory specified by `image_path = '../../src/components/products/images'` in `main.py`.  Make sure this directory exists or modify the script to create it or use a different path.

## Usage

1.  **Run the Script:**

    Execute the `main.py` script:

    ```bash
    python main.py
    ```

2.  **Script Execution:**

    The script will:

    *   Read the `products.json` file.
    *   For each product:
        *   Formulate a prompt for the AI image generator using the product's name.
        *   Open a Chrome browser instance.
        *   Navigate to the specified AI art generator website (`https://magicstudio.com/ai-art-generator`).  The original script also had code for DeepAI, but it's currently commented out.
        *   Enter the prompt into the AI art generator's input field.
        *   Wait for the AI to generate an image.
        *   Download the generated image as a PNG file with the filename `{product_id}.png` into the specified image output directory.
        *   Close the Chrome browser instance.
    *   Print status messages to the console indicating the progress of image generation and downloading.

## Customization

*   **AI Art Generator Website:**  The script is currently configured to use `https://magicstudio.com/ai-art-generator`. You can modify the `driver.get()` command in the `image_generator` function to use a different AI image generation website.  You will also need to update the element selectors (IDs, XPaths, etc.) to match the structure of the new website.

*   **Prompt Engineering:** The `default_prompt` and `input_prompt` variables in the `image_generator` function control the text used to generate the images. Experiment with different prompts to achieve the desired image style and quality.  Consider adding product categories or specific attributes to the prompts.

*   **Image Output Path:**  Modify the `image_path` variable to change where the generated images are saved.

*   **Headless Mode:**  The `options.add_argument("--headless")` line is commented out, meaning the Chrome browser will be visible.  Uncomment this line to run Chrome in headless mode (without a GUI). This is useful for running the script on servers or in automated environments.  Note:  The script notes to disable headless mode *for downloading correct images*.  You may need to experiment with this.

*   **Error Handling:**  Consider adding more robust error handling to the script, such as try-except blocks to catch exceptions during image generation or downloading.  This will make the script more resilient to unexpected errors.

## Troubleshooting

*   **ChromeDriver Version:**  Ensure that the ChromeDriver version is compatible with your Google Chrome version.  `webdriver-manager` should handle this automatically, but if you encounter errors, double-check the versions.

*   **Selenium Errors:**  If you encounter errors related to Selenium, make sure that the required packages are installed correctly and that the ChromeDriver is in the correct location.  Review the Selenium documentation for more information.

*   **Website Changes:** AI art generator websites may change their layouts or APIs, which could break the script. If the script stops working, you may need to update the element selectors (IDs, XPaths, etc.) to match the new website structure.

*   **Rate Limiting:**  AI art generator websites may have rate limits that prevent you from generating too many images in a short period. If you encounter rate limiting errors, you may need to add delays to the script to avoid exceeding the limits.  The script already has `time.sleep()` calls, but you might need to increase the duration.