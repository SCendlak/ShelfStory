import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'ShelfStory',
  description: 'Your storage in your device!',
}

export default function TestLayout({children}: {
  children: React.ReactNode
}) {
  return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>

        {children}
      </section>
  )
}
