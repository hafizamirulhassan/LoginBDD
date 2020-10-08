package steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignupStepDefinition {

	WebDriver driver;
	
	@Before()
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Admin\\Downloads\\BDD_Login\\LoginBDD\\Resouces\\chromedriver.exe");
		this.driver=new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
	}
	@Given("^i access FB page$")
	public void i_access_FB() throws Throwable {
	    
		driver.get("https://web.facebook.com/");
	}

	@Then("^user enter firstname \"([^\"]*)\"$")
	public void user_enter_firstname(String firstname) throws InterruptedException
	{
		WebElement firstNameOBJ=driver.findElement(By.xpath("//input[@type='text'][@name='firstname']"));
		firstNameOBJ.sendKeys(firstname);
		
	}

	@Then("^user enter lastname \"([^\"]*)\"$")
	public void user_enter_lastname(String lastname) throws InterruptedException
	{
		WebElement secondNameOBJ=driver.findElement(By.xpath("//input[@type='text'][@name='lastname']"));
		secondNameOBJ.sendKeys(lastname);
		
	}

	@When("^user enter \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_correct_email(String email, String confemail, String pass) throws InterruptedException
	{
		WebElement emailOBJ=driver.findElement(By.xpath("//input[@type='text'][@name='reg_email__']"));
		emailOBJ.sendKeys(email);
		
		WebElement confirmemail=driver.findElement(By.xpath("//*[@id=\"u_0_u\"]"));
		confirmemail.sendKeys(confemail);
		
		WebElement passwordOBJ=driver.findElement(By.xpath("//input[@type='password'][@name='reg_passwd__']"));
		passwordOBJ.sendKeys(pass);

	}
	
	@When("^i select birthday$")
	public void i_select_birthday() throws Throwable {
	    
		WebElement day=driver.findElement(By.xpath("//select[@name='birthday_day']"));
		day.click();
		Select select=new Select(driver.findElement(By.xpath("//select[@name='birthday_day']")));
		select.selectByValue("14");
		
		WebElement month=driver.findElement(By.xpath("//select[@name='birthday_month']"));
		month.click();
		
		Select select2=new Select(driver.findElement(By.xpath("//select[@name='birthday_month']")));
		select2.selectByVisibleText("Aug");
		
		WebElement year=driver.findElement(By.xpath("//select[@name='birthday_year']"));
		year.click();
		
		Select select3=new Select(driver.findElement(By.xpath("//select[@name='birthday_year']")));
		select3.selectByValue("1995");
		
	}

	@When("^i select radio button$")
	public void i_select_radio_button() throws Throwable {
		
		WebElement radiobutton=driver.findElement(By.id("u_0_7"));
		radiobutton.click();
		Thread.sleep(2000);

	}


		
	
}
