const fs = require("fs");
const path = require("path");

// Create dist folder if not exists
const distDir = path.join(__dirname, "dist");
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Simulate build by generating index.html
const content = `
<!DOCTYPE html>
<html>
<head>
  <title>AWS CodeBuild Lab</title>
</head>
<body>
  <h1>Build successful 🚀</h1>
  <p>This file was generated during CodeBuild.</p>
</body>
</html>
`;

fs.writeFileSync(path.join(distDir, "index.html"), content);
console.log("Build complete. Artifact saved to dist/index.html");
