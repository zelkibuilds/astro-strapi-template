import type { FC } from "react";

const data = await fetch(
  "https://6508691c56db83a34d9c5139.mockapi.io/emails"
).then((response) => response.json());

// Components that are build-time rendered also log to the CLI.
// When rendered with a client:* directive, they also log to the browser console.
export const Emails: FC<{ className?: string }> = ({ className }) => {
  // Output the result to the page
  return <div className={className}>{JSON.stringify(data)}</div>;
};
