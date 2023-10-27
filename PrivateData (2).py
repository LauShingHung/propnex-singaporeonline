from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select

url = 'https://www.ura.gov.sg/property-market-information/pmiResidentialTransactionSearch'


driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get(url)
driver.maximize_window()


#Select Project or Location
icon = driver.find_element(By.XPATH, '//i[@class="glyphicon glyphicon-menu-right"]')
icon.click()
# #Select Postal District
wait = WebDriverWait(driver, 10)
postaldistrict = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'a[data-toggle="tab"][href="#postalDistrict"]')))
postaldistrict.click()
# postaldistrict.click()
checkboxes = driver.find_elements(By.XPATH,'//label[@class="col-sm-12 col-md-6"]/input[@type="checkbox"]')
for checkbox in checkboxes:
    element = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable(checkbox)
)
    element.click()


#Apply button
apply_button = driver.find_element(By.XPATH,"//button[@id='apply']")
apply_button.click()

#select Property type:
dropdown = Select(driver.find_element(By.ID,"propertyTypeGroupNo"))
dropdown.select_by_visible_text("Landed Properties (Non-Strata)")

#click search button
searchbutton = driver.find_element(By.CSS_SELECTOR, 'button[type="submit"][class="btn btn-primary"][data-init-wogaa="URA-4425"]')
searchbutton.click()

input("Press Enter to close the browser...")
driver.close()




for option in dropdown.options:
    print("Option Value:", option.text)
    dropdown.select_by_visible_text(option.text)

url = 'https://www.ura.gov.sg/property-market-information/pmiResidentialTransactionSearch'


driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get(url)
driver.maximize_window()