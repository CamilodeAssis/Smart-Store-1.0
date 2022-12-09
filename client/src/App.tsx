
import { GlobalRoutes } from "./routes/GlobalRoutes"
import { Menu } from './components/Menu'
import { Footer } from './components/Footer'


export const App = () => {


  return (
    <>
      <section className="flex ">
        <Menu />
        <div className='w-full'>
          <GlobalRoutes />
        </div>
      </section>
      <Footer />
    </>
  )
}


