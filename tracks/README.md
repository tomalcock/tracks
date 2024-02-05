## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## What I have acheived

- A user can view tracks
- A user can like tracks
- A user can view a user page to see the tracks they have liked
- I have applied some simple styling

## What I would have done next with a few more hours

- Allow the user to unlike tracks
- Put more time into styling to make the UX better
- Applied pagination to the tracks page so they don't all load onto one page
- Do something (anything!) with the home page

## What I would have done with another day or two

- Created a back end of some kind to store the user profile data so on refresh the liked tracks remain (potentially with MongoDB and prisma as I have been using that already)

## General comments

- The context took a large proportion of the time to develop. As I'm still relatively new to TypeScript and having not used context in my current project, deciding on how to share state between the tracks and user page and removing all of the TypeScript errors took the most time and creative problem solving.



