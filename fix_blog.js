const fs = require("fs");
const path = require("path");

const blogDir = "c:/Users/lukas/Desktop/2kdetailing/content/posts";

fs.readdirSync(blogDir).forEach((file) => {
  if (file.endsWith(".jsx")) {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, "utf-8");

    // Replace text strings
    content = content.replace(/MK(\s)?Studio/gi, "2K Detailing");
    content = content.replace(/Kamil/gi, "zespół");
    content = content.replace(
      /mkstudio\.opole@gmail\.com/gi,
      "kontakt@2kdetailing.pl",
    );
    content = content.replace(/785 850 500/gi, "797 234 734"); // Phone from previous setup
    // And for MK Studio phone numbers if they have spaces differently
    content = content.replace(/785(\s)?850(\s)?500/gi, "797 234 734");

    // Replace all images with standard 2k logo placeholder
    content = content.replace(
      /"\/wlasciciel-mk-studio-kamil[^"]+"/gi,
      '"/2k-logo-black-biale-tlo.png"',
    );
    content = content.replace(
      /"\/galeria-[^"]+"/gi,
      '"/2k-logo-black-biale-tlo.png"',
    );
    content = content.replace(
      /dynamicImage:\s*"\/[^"]+"/gi,
      'dynamicImage: "/2k-logo-black-biale-tlo.png"',
    );

    fs.writeFileSync(filePath, content, "utf-8");
  }
});

console.log("Blog texts and images updated.");
