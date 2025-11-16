import { test as baseTest } from "@playwright/test";
interface TestdataFor {
    userEmail: string;
    password: string;
    productTitle: string;
    countryname: string;
}
export const customtest = baseTest.extend<{testdataFor:TestdataFor}>({
  testdataFor: {
    userEmail: "priyankad230596@gmail.com",
    password: "Satara@1234",
    productTitle: "ZARA COAT 3",
    countryname: "Nepal",
  },
});
