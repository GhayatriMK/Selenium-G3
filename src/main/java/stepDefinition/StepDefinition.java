package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	WebDriver driver;
	
	@Given("^user is on Register page$")
	public void register_page(){
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\GHAYATRI\\Desktop\\Selenium\\chromedriver.exe");
		 driver = new ChromeDriver();
		driver.get("http://demo.automationtesting.in/Register.html");
	}
	
	@When("^title of the Register page is Register.html$")
	public void register_details(){
		String title = driver.getTitle();
		System.out.println(title);
	}
	
	//Regular expression:  \"(.*)\"   which is used to mention any numeric or string with no length limitations.
		
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void fullname(String FirstName, String LastName){
		driver.findElement(By.xpath("//input[@ng-model = 'FirstName']")).sendKeys(FirstName);
		driver.findElement(By.xpath("//input[@ng-model = 'LastName']")).sendKeys(LastName);
		
	}
	
	@Then("^close the browser$")
	public void exit(){
		driver.close();
	}

}
