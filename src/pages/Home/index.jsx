import Header from '../../components/Header/index'
import Input from '../../components/Input/index'
import Welcome from '../../components/Welcome/index'
import Category from '../../components/Category/index'
import CardHomePageMobile from '../../components/CardPageHome/index'

function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Input />
      <Category />
      <CardHomePageMobile />
    </div>
  )
}
export default Home
