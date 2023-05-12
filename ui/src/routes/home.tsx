import { A } from '@solidjs/router'

import Navbar from '../components/navbar/navbar'
import Sidebar from '../components/sidebar/sidebar'
import Gallery from '../components/gallery/gallery'

const Home: Component = () => {
  return (
    <>
      <Navbar />
      <div class="bg-stone-100 h-screen flex flex-col h-9/10 justify-between p-2">
        <div class="">
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default Home
