Feature: FaceBook Signup

		
Scenario Outline: Signup into facebook with valid data
	Given i access FB page
	When user enter firstname "<Fname>"
	And user enter lastname "<Lname>"
	And user enter "<email>" and "<confirmemail>" and "<password>" 
	Then i select birthday
	Then i select radio button 
	
Examples:
| Fname | Lname | email | confirmemail | password |
|Amir|Hassan|testingdrupa@gmail.com|testingdrupa@gmail.com | qsdrupal|



	
	
	
	
	
