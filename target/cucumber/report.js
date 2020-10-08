$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into FB",
  "description": "User should able to login successfully with valid credentials",
  "id": "login-into-fb",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Login into facebook with valid email and invalid password",
  "description": "",
  "id": "login-into-fb;login-into-facebook-with-valid-email-and-invalid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@nagative1"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "i enter \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "i click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user should not be on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "login-into-fb;login-into-facebook-with-valid-email-and-invalid-password;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 26,
      "id": "login-into-fb;login-into-facebook-with-valid-email-and-invalid-password;;1"
    },
    {
      "cells": [
        "testingdrupal786@gmail.com",
        "wrongpass"
      ],
      "line": 27,
      "id": "login-into-fb;login-into-facebook-with-valid-email-and-invalid-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10789047100,
  "status": "passed"
});
formatter.before({
  "duration": 9713117800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "i access FB",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.i_access_FB()"
});
formatter.result({
  "duration": 5271246200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Login into facebook with valid email and invalid password",
  "description": "",
  "id": "login-into-fb;login-into-facebook-with-valid-email-and-invalid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@nagative1"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "i enter \"testingdrupal786@gmail.com\" and \"wrongpass\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "i click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user should not be on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "testingdrupal786@gmail.com",
      "offset": 9
    },
    {
      "val": "wrongpass",
      "offset": 42
    }
  ],
  "location": "LoginStepDefinition.i_enter_and(String,String)"
});
formatter.result({
  "duration": 5155469100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.i_click_on_login_button()"
});
formatter.result({
  "duration": 13648500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_not_be_on_home_page()"
});
formatter.result({
  "duration": 14510100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_Browser()"
});
formatter.result({
  "duration": 1108078900,
  "status": "passed"
});
formatter.after({
  "duration": 114500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Login into facebook with invalid email and invalid password",
  "description": "",
  "id": "login-into-fb;login-into-facebook-with-invalid-email-and-invalid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@nagative2"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "i enter \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "i click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user should not be on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "login-into-fb;login-into-facebook-with-invalid-email-and-invalid-password;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 37,
      "id": "login-into-fb;login-into-facebook-with-invalid-email-and-invalid-password;;1"
    },
    {
      "cells": [
        "invalidemail@gmail.com",
        "invalidpass"
      ],
      "line": 38,
      "id": "login-into-fb;login-into-facebook-with-invalid-email-and-invalid-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9801324600,
  "status": "passed"
});
formatter.before({
  "duration": 9705261000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "i access FB",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.i_access_FB()"
});
formatter.result({
  "duration": 3244482700,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Login into facebook with invalid email and invalid password",
  "description": "",
  "id": "login-into-fb;login-into-facebook-with-invalid-email-and-invalid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@nagative2"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "i enter \"invalidemail@gmail.com\" and \"invalidpass\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "i click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user should not be on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "invalidemail@gmail.com",
      "offset": 9
    },
    {
      "val": "invalidpass",
      "offset": 38
    }
  ],
  "location": "LoginStepDefinition.i_enter_and(String,String)"
});
formatter.result({
  "duration": 5151110500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.i_click_on_login_button()"
});
formatter.result({
  "duration": 13750400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_not_be_on_home_page()"
});
formatter.result({
  "duration": 14632200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_Browser()"
});
formatter.result({
  "duration": 1106216200,
  "status": "passed"
});
formatter.after({
  "duration": 100900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "Login into facebook with invalid email and valid password",
  "description": "",
  "id": "login-into-fb;login-into-facebook-with-invalid-email-and-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@nagative3"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "i enter \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "i click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "user should not be on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "login-into-fb;login-into-facebook-with-invalid-email-and-valid-password;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 48,
      "id": "login-into-fb;login-into-facebook-with-invalid-email-and-valid-password;;1"
    },
    {
      "cells": [
        "abc@gmail.com",
        "qsdrupal"
      ],
      "line": 49,
      "id": "login-into-fb;login-into-facebook-with-invalid-email-and-valid-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9787255600,
  "status": "passed"
});
formatter.before({
  "duration": 9256929000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "i access FB",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.i_access_FB()"
});
formatter.result({
  "duration": 5476018600,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Login into facebook with invalid email and valid password",
  "description": "",
  "id": "login-into-fb;login-into-facebook-with-invalid-email-and-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@nagative3"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "i enter \"abc@gmail.com\" and \"qsdrupal\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "i click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "user should not be on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "abc@gmail.com",
      "offset": 9
    },
    {
      "val": "qsdrupal",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.i_enter_and(String,String)"
});
formatter.result({
  "duration": 5139203900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.i_click_on_login_button()"
});
formatter.result({
  "duration": 14039900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_not_be_on_home_page()"
});
formatter.result({
  "duration": 13784200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_Browser()"
});
formatter.result({
  "duration": 1104682000,
  "status": "passed"
});
formatter.after({
  "duration": 113300,
  "status": "passed"
});
});