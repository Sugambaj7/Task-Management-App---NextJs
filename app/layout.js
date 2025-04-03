import './globals.css';

export const metadata = {
  title: 'Task Manager',
  description: 'A Simple Task Management Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
