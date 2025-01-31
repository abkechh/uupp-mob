const { execSync } = require("child_process");
const fs = require("fs");

// Set the start and end dates for your contribution graph
const startDate = new Date("2024-01-01"); // Change to your desired start date
const endDate = new Date("2024-12-31");   // Change to your desired end date

// Create commits for every day in the range
let currentDate = startDate;

while (currentDate <= endDate) {
  // Create a dummy file with a unique name
  const fileName = `dummy-${currentDate.toISOString().split("T")[0]}.txt`;
  fs.writeFileSync(fileName, `Commit for ${currentDate.toDateString()}`);

  // Set the GIT_AUTHOR_DATE and GIT_COMMITTER_DATE for the commit
  const formattedDate = currentDate.toISOString();
  process.env.GIT_AUTHOR_DATE = formattedDate;
  process.env.GIT_COMMITTER_DATE = formattedDate;

  // Execute Git commands to add, commit, and push
  try {
    execSync(`git add ${fileName}`);
    execSync(`git commit -m "Commit on ${currentDate.toDateString()}"`);
  } catch (err) {
    console.error(`Failed to commit on ${currentDate.toDateString()}:`, err);
  }

  // Increment the date by 1 day
  currentDate.setDate(currentDate.getDate() + 1);
}

// Push all commits to GitHub
try {
  execSync("git push");
  console.log("All commits pushed to GitHub!");
} catch (err) {
  console.error("Failed to push commits:", err);
}
