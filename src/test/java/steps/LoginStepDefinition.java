package steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {

	WebDriver driver;
	
	@Before({"@possitive,@nagative1,@nagative2,@nagative3"})
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Admin\\Downloads\\BDD_Login\\LoginBDD\\Resouces\\chromedriver.exe");
		this.driver=new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
	}
	@After({"@possitive,@nagative1,@nagative2,@nagative3"})
	@Then("^Close the Browser$")
	public void close_the_Browser() throws Throwable {
	   
		driver.quit();
	}


	@Given("^i access FB$")
	public void i_access_FB() throws Throwable {
	    
		driver.get("https://web.facebook.com/");
	}

	@When("^i enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_and(String Email, String Password) throws Throwable {
	    Thread.sleep(3000);
		
	    
	    try {
	    	driver.findElement(By.xpath("//input[@type='email'][@name='email']")).clear();
	    	
	    	WebElement email_= driver.findElement(By.xpath("//input[@type='email'][@name='email']"));
	    	System.out.println("---------Emaild exists --------------\n-----------------------");
	    	email_.sendKeys(Email);
	    	
	    } catch (Exception e) {
	    	System.out.println("Email id not found: " + e.getMessage());
		}
	    
	    Thread.sleep(2000);
	    try {
			
	    	driver.findElement(By.xpath("//input[@type='password'][@name='pass']")).clear();
	    	WebElement pass_=driver.findElement(By.xpath("//input[@type='password'][@name='pass']"));
	    	System.out.println("----------Passwordd exits ------------\n-----------------------");
	    	pass_.sendKeys(Password);
		
		    
		} catch (Exception e) {
			System.out.println("Passwordd not found: " + e.getMessage());
		}
	    }

	@When("^i click on login button$")
	public void i_click_on_login_button() throws Throwable {
		
		try {
			WebElement loginbtn=driver.findElement(By.xpath("//input[@type='submit'][@id='u_0_b']"));
			System.out.println("-------Login button exists----------\n-----------------------");
			loginbtn.click();
			
		} catch (Exception e) {
			System.out.println("Login button not found: "+ e.getMessage());
		}
		
	}

	@Then("^user should be on home page successfully$")
	public void user_should_be_on_home_page_successfully() throws Throwable {
		
		try {
			WebElement Text_=driver.findElement(By.xpath("//span[text()='Create post']"));
			Text_.isDisplayed();
			String text = Text_.getText(); 
			if(text.equals("Create post")) {
				System.out.println("Showing successfully :"+text);
			}else {
				System.out.println("\"----------Failed ----------\\n-----------------------\"");

			}
			
		} catch (Exception e) {
			System.out.println(" Hompe page not found: "+e.getMessage());
		}
		
	}

	@Then("^user should not be on home page$")
	public void user_should_not_be_on_home_page() throws Throwable {
		
		/*String actual_error=driver.findElement(By.xpath("//div[@class='_4rbf _53ij']")).getText();
	    String expected_error="The email address or phone number that you've entered doesn't match any account. Sign up for an account.";
	    Assert.assertEquals(actual_error, expected_error);*/
	
		
		try {
			WebElement Text_=driver.findElement(By.xpath("//span[text()='Create post']"));
			Text_.isDisplayed();
			String text = Text_.getText(); 
			if(text.equals("Create post")) {
				System.out.println("Showing successfully :"+text);
			}else {
				System.out.println("\"----------Failed ----------\\n-----------------------\"");

			}
			
		} catch (Exception e) {
			System.out.println(" Hompe page not found: "+e.getMessage());
		}
		
	}
}
