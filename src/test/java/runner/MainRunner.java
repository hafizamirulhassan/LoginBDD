package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features = {"src\\test\\java\\Features\\Login.feature"}, // path of feature file.
	glue={"steps"},
	tags= {"@possitive,@nagative1,@nagative2,@nagative3"},
	monochrome=true, // Given output would be readable format in console.
	dryRun=false, // actually run the feature file steps.
	plugin= {"pretty" , "html:target/cucumber", "json:target/cucumber.json","com.cucumber.listener.ExtentCucumberFormatter:target/report.html"} // To generate different types of reporting
)
public class MainRunner {

	}
