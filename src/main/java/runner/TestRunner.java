package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

// Default cucumber settings when we are using cucumber
@CucumberOptions(
		format = {"pretty","html:report/html","json:report/json/cucumber.json"},
		tags = {"@reg"},
		features = "src/main/java/feature",
		glue ={"stepDefinition"}
		
		
		)


public class TestRunner extends AbstractTestNGCucumberTests {

}
