import '../styles/globals.css'

export const metadata = {
  title: 'Cute Portfolio',
  description: 'Created by Rijalul',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <div className="pt-20 md:pt-24">{children}</div>
      </body>
    </html>
  )
}
