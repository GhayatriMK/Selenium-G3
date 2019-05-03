$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test1.feature");
formatter.feature({
  "line": 2,
  "name": "Register login Feature",
  "description": "",
  "id": "register-login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tst"
    },
    {
      "line": 1,
      "name": "@reg"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Register login scenario",
  "description": "",
  "id": "register-login-feature;register-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is on Register page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of the Register page is Register.html",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "register-login-feature;register-login-scenario;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName"
      ],
      "line": 12,
      "id": "register-login-feature;register-login-scenario;;1"
    },
    {
      "cells": [
        "Ghayatri",
        "Nirmal"
      ],
      "line": 13,
      "id": "register-login-feature;register-login-scenario;;2"
    },
    {
      "cells": [
        "Mathrika",
        "NG"
      ],
      "line": 14,
      "id": "register-login-feature;register-login-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Register login scenario",
  "description": "",
  "id": "register-login-feature;register-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@reg"
    },
    {
      "line": 1,
      "name": "@tst"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on Register page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of the Register page is Register.html",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"Ghayatri\" and \"Nirmal\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.register_page()"
});
formatter.result({
  "duration": 7988148899,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.register_details()"
});
formatter.result({
  "duration": 91035600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ghayatri",
      "offset": 13
    },
    {
      "val": "Nirmal",
      "offset": 28
    }
  ],
  "location": "StepDefinition.fullname(String,String)"
});
formatter.result({
  "duration": 335298601,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.exit()"
});
formatter.result({
  "duration": 2104741100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Register login scenario",
  "description": "",
  "id": "register-login-feature;register-login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@reg"
    },
    {
      "line": 1,
      "name": "@tst"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on Register page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of the Register page is Register.html",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"Mathrika\" and \"NG\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.register_page()"
});
formatter.result({
  "duration": 4914864900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.register_details()"
});
formatter.result({
  "duration": 63669900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mathrika",
      "offset": 13
    },
    {
      "val": "NG",
      "offset": 28
    }
  ],
  "location": "StepDefinition.fullname(String,String)"
});
formatter.result({
  "duration": 187441599,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.exit()"
});
formatter.result({
  "duration": 2089542400,
  "status": "passed"
});
});