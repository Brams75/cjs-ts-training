require("ts-node/register");
const { setHeadlessWhen } = require("@codeceptjs/configure");
const { bootstrap } = require("./presettings.ts");

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./tests/**_test.ts",
  output: "./output",
  helpers: {
    Playwright: {
      url: "",
      show: true,
      windowSize: "1200x900",
      browser: "chromium",
      waitForNavigation: "domcontentloaded",
    },
    CustomHelper: {
      require: "./CustomHelper.ts",
    },
    ChaiWrapper: {
      require: "codeceptjs-chai",
    },
    REST: {
      endpoint: "",
    },
  },
  bootstrap,
  include: {
    navigationFragment: "./fragments/navigation.ts",
    cookiesFragment: "./fragments/cookies.ts",
    mainPage: "./pages/main.ts",
    footerFragment: "./fragments/footer.ts",
    aboutPage: "./pages/about.ts",
    responsibleGamingPage: "./pages/responsibleGaming.ts",
    termsAndConditionsPage: "./pages/termsAndConditions.ts",
    offerSearchFragment: "./fragments/offerSearch.ts",
  },
  name: "typescript-boilerplate",
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
  gherkin: {
    features: "./features/*.feature",
    steps: "./step_definitions/*.ts",
  },
};
