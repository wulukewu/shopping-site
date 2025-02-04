import os
import time
import urllib.request
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

product_name = 't-shirt'
default_prompt = 'realistic products for a shopping website to attract customers.\nstyle: minimalistic, no background, no other objects, focus on the product only.'
input_prompt = f'product: "{product_name}"\n{default_prompt}'

image_name = f"{product_name}.png"

# Set up ChromeDriver with options
options = webdriver.ChromeOptions()
# options.add_argument("--headless")
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