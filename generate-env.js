function generateEnvironmentContent() {
    return `export const environment = {
      production: ${process.env.NODE_ENV === "production"},
      foodSpecialsSas: '${process.env.foodSpecialsSas || ""}',
      foodSpecialsUrl: '${process.env.foodSpecialsUrl || ""}',
      liquorSpecialsSas: '${process.env.liquorSpecialsSas || ""}',
      liquorSpecialsUrl: '${process.env.liquorSpecialsUrl || ""}',
      generalSas: '${process.env.generalSas || ""}',
      generalUrl: '${process.env.generalUrl || ""}',
    };`;
  }
  
  (function generateEnvironment() {
    const fs = require("fs");
    const fileName = "environment.ts"; // you can use this as a hard-coded name, or you can use your own unique name
    const content = generateEnvironmentContent();
    const dir = `src/environments`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true }); // Create directory if it does not exist
    }
    fs.writeFile(`${dir}/${fileName}`, content, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Environment file created successfully!");
      }
    });
  })();
  