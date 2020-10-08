Feature: Login into FB
	User should able to login successfully with valid credentials
	
Background:
	Given i access FB
	
@possitve
Scenario Outline: Login into facebook with valid email and password
	When i enter "<Email>" and "<Password>"
	When i click on login button
	Then user should be on home page successfully
	And Close the Browser
	
Examples:
| Email | Password |
|testingdrupal786@gmail.com|qsdrupal|

@nagative1
Scenario Outline: Login into facebook with valid email and invalid password
	When i enter "<Email>" and "<Password>"
	When i click on login button
	Then user should not be on home page
	And Close the Browser
	
Examples:
| Email | Password |
|testingdrupal786@gmail.com|wrongpass|

@nagative2
Scenario Outline: Login into facebook with invalid email and invalid password
	When i enter "<Email>" and "<Password>"
	When i click on login button
	Then user should not be on home page
	And Close the Browser
	
Examples:
| Email | Password |
|invalidemail@gmail.com|invalidpass|

@nagative3
Scenario Outline: Login into facebook with invalid email and valid password
	When i enter "<Email>" and "<Password>"
	When i click on login button
	Then user should not be on home page
	And Close the Browser
	
Examples:
| Email | Password |
|abc@gmail.com|qsdrupal|

	
	
	
	
	
