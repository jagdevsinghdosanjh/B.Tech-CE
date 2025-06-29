# Requires Git and Node.js installed
# Navigate to your VS Code project directory before running this script

# Step 1: Initialize git repo
git init

# Step 2: Add files to staging
git add .

# Step 3: Commit the changes
git commit -m "Initial commit"

# Step 4: Add remote origin (update this if you're using SSH)
$repoUrl = "https://github.com/jagdevsinghdosanjh/B.Tech-CE.git"
git remote add origin $repoUrl

# Step 5: Set main as default branch and push to GitHub
git branch -M main
git push -u origin main

Write-Host "`nProject pushed to GitHub successfully!"

# Step 6 (Optional): Deploy using Vercel CLI
# Check if Vercel CLI is installed
if (!(Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "`nVercel CLI not found. Installing globally..."
    npm install -g vercel
}

# Step 7: Login to Vercel if not already logged in
Write-Host "`nLogging in to Vercel. Please enter your email when prompted."
vercel login

# Step 8: Deploy to Vercel
Write-Host "`nDeploying to Vercel..."
vercel --prod
Write-Host "`nDeployment complete! Your project is now live."
