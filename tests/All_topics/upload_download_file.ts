import test, { expect } from "@playwright/test";
import path from "path";
test("calender demo using fill function", async ({ page }) => {
  await page.goto(`https://demo.automationtesting.in/Datepicker.html`);
  await page.waitForTimeout(2000);

  let date = "05-23-1996"; //for checking format of date write code on browsers console is=>document.getElemntById(idvalue).value
  await page.fill("id=datepicker2", date);
  await page.waitForTimeout(2000);
});

test("download file", async ({ page }) => {
  await page.goto(`https://demoqa.com/upload-download`);
  await page.waitForTimeout(2000);
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("link", { name: "Download" }).click(),
  ]);
  // const filename= download[0].suggestedFilename()
  // await download[0].saveAs(filename)
  // console.log(await filename )

  const filepath = path.join(
    __dirname,
    "downloads",
    await download.suggestedFilename()
  );
  await download.saveAs(filepath);
  console.log(`filepath=${filepath}`);
});
test("upload file", async ({ page }) => {
  await page.goto(`https://blueimp.github.io/jQuery-File-Upload/`);
  //upload file by using setInputFiles function
  // await page.setInputFiles('input[type="file"]',['C:/Users/priya/OneDrive/Desktop/Playwright-Tut/upload/sampleFile.jpeg',
  //     'C:/Users/priya/OneDrive/Pictures/image_2.jpg'
  // ])
  // await page.waitForTimeout(3000)
  //
  //choose file upload
  const [filechoose_upload] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.locator('input[type="file"]').click(),
  ]);
  //for checking is it possible to upload multiple files
  const ismultiple = filechoose_upload.isMultiple();
  console.log(ismultiple);
  filechoose_upload.setFiles([
    "C:/Users/priya/OneDrive/Desktop/Playwright-Tut/upload/sampleFile.jpeg",
    "C:/Users/priya/OneDrive/Pictures/image_2.jpg",
  ]);
});

