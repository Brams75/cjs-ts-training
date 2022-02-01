/// <reference types='codeceptjs' />
type navigationFragment = typeof import("./fragments/navigation");
type cookiesFragment = typeof import("./fragments/cookies");
type mainPage = typeof import("./pages/main");
type footerFragment = typeof import("./fragments/footer");
type aboutPage = typeof import("./pages/about");
type responsibleGamingPage = typeof import("./pages/responsibleGaming");
type termsAndConditionsPage = typeof import("./pages/termsAndConditions");
type offerSearchFragment = typeof import("./fragments/offerSearch");
type CustomHelper = import("./CustomHelper");
type ChaiWrapper = import("codeceptjs-chai");

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    current: any;
    navigationFragment: navigationFragment;
    cookiesFragment: cookiesFragment;
    mainPage: mainPage;
    footerFragment: footerFragment;
    aboutPage: aboutPage;
    responsibleGamingPage: responsibleGamingPage;
    termsAndConditionsPage: termsAndConditionsPage;
    offerSearchFragment: offerSearchFragment;
  }
  interface Methods extends Playwright, CustomHelper, ChaiWrapper, REST {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
