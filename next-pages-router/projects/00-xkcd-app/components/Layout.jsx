import { Header } from "./Header.jsx"
import { Footer } from "./Footer.jsx/index.js"

export function Layout ({ children }) {
  return (
    <>
      <Header />

      <main className='max-w-xl m-auto'>
        {children}
      </main>

      <Footer />
    </>
  )
}