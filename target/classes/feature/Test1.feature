@reg
Feature: Register login Feature

Scenario Outline: Register login scenario

Given user is on Register page
When title of the Register page is Register.html
Then user enters "<FirstName>" and "<LastName>"
Then close the browser

Examples:
|FirstName|LastName|
|Ghayatri|Nirmal|
|Mathrika|NG|