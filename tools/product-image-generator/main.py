import os
import time
import json
import urllib.request
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Function to generate an image for a product
def image_generator(input_name, input_id):

    # Set up the prompt for the AI
    product_name = input_name
    default_prompt = 'realistic products for a shopping website to attract customers.\nstyle: minimalistic, no background, no other objects, focus on the product only.'
    input_prompt = f'product: "{product_name}"\n{default_prompt}'

    # Set up the image path and name
    image_path = '../../src/components/products/images'
    image_name = f"{image_path}/{input_id}.png"

    # Check if the image already exists
    if os.path.exists(image_name):
        print(f'[INFO] Image for {input_name} with ID {input_id} already exists.')
        return

    # Set up ChromeDriver with options
    options = webdriver.ChromeOptions()
    # options.add_argument("--headless") # disable for downloading correct images
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument('--disable-gpu')
    options.add_argument('--window-size=1920x1080')
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--allow-insecure-localhost')

    # Initialize the ChromeDriver
    driver = webdriver.Chrome(options=options) # works on local
    # service = Service(executable_path=ChromeDriverManager().install())
    # driver = webdriver.Chrome(service=service, options=options)

    # Print the Chrome version and ChromeDriver version
    print("Chrome version:", driver.capabilities['browserVersion'])
    print("ChromeDriver version:", driver.capabilities['chrome']['chromedriverVersion'])

    # Navigate to DeepAI's Image Generator
    '''
    driver.get('https://deepai.org/machine-learning-model/text2img')

    driver.find_element(By.CLASS_NAME, 'model-input-text-input').send_keys(input_prompt)
    driver.find_element(By.CLASS_NAME, 'model-input-text-input').send_keys(Keys.RETURN)
    print(f'Prompt entered: {input_prompt}')

    # Wait for the image to be generated
    wait = WebDriverWait(driver, 30)
    while True:
        try:
            placeholder_image = driver.find_element(By.CSS_SELECTOR, '#place_holder_picture_model .placeholder-image')
            print("Image is still generating, waiting...")
            time.sleep(5)  # Wait for 5 seconds before checking again
        except:
            print("Image generated and displayed.")
            break
    '''

    # Navigate to AI Art Generator
    driver.get('https://magicstudio.com/ai-art-generator')

    # Enter the prompt
    input_field = driver.find_element(By.ID, 'description')
    input_field.clear()
    input_field.send_keys(input_prompt)

    # Click the "Create a Picture" button
    create_picture_button = driver.find_element(By.XPATH, '//*[@id="prompt-box"]/div/button')
    create_picture_button.click()

    # Wait for the image to be generated
    time.sleep(1)
    wait = WebDriverWait(driver, 30)
    while True:
        try:
            wait_working = driver.find_element(By.XPATH, '//*[@id="__next"]/div/main/div[1]/div/div[2]/p')
            if wait_working.text == "Our AI is working its magic...":
                print("Image is still generating, waiting...")
                time.sleep(1)
        except:
            print("Image generated and displayed.")
            break

    # Download the generated image
    image_element = driver.find_element(By.XPATH, '//*[@id="__next"]/div/main/div[1]/div/img')
    image_url = image_element.get_attribute('src')

    # Download the image
    urllib.request.urlretrieve(image_url, image_name)
    print(f'Image {image_name} downloaded successfully.')

    # Quit the driver
    driver.quit()

    # Print the success message
    print(f'[INFO] Image generated for {input_name} with ID {input_id}.')

# Load products from JSON file
with open('../../src/components/products/products.json', 'r') as file:
    products = json.load(file)

# Loop through each product in the array
for product in products:
    input_name = product['name']
    input_id = product['id']
    image_generator(input_name, input_id)