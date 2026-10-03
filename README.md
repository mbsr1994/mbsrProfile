# MBSR Portfolio

A clean, fast, customizable portfolio site for showcasing engineering work, AI projects, and experience.

## Project structure

- `index.html` — main page structure
- `styles.css` — visual design and responsive layout
- `script.js` — all profile content stays here for easy customization
- `README.md` — quick setup and deployment notes

## Customize your profile

Open `script.js` and update the `portfolioData` object.

Example:

```js
const portfolioData = {
  name: "Your Name",
  role: "Your Role",
  email: "you@example.com",
  socialLinks: [
    { label: "LinkedIn", url: "https://linkedin.com/in/your-profile" },
    { label: "GitHub", url: "https://github.com/your-profile" }
  ],
  projects: [
    {
      title: "Project Name",
      description: "Short project summary",
      tags: ["React", "Node.js"],
      liveUrl: "https://your-live-demo.com",
      repoUrl: "https://github.com/your-profile/project-name"
    }
  ]
};
```

## Run locally

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Free hosting options

### GitHub Pages

1. Push this project to a GitHub repository.
2. Open the repo in GitHub.
3. Go to Settings → Pages.
4. Select the branch to deploy from, usually `main`.
5. Use the root folder `/`.
6. Save and wait for the deployment URL.

### Netlify

1. Drag and drop this project folder into Netlify.
2. Deploy it as a static site.
3. Netlify gives you a free hosted URL automatically.

### Vercel

1. Import the repo in Vercel.
2. Keep the default static site settings.
3. Deploy for free.

## Best practice for interviews

- Keep the hero section short and clear.
- Highlight measurable work and technical ownership.
- Add project links as they become live.
- Keep the design simple, professional, and easy to read.

This portfolio is intentionally data-driven so it remains easy to expand as your projects grow.
