import Header from '../../components/Header/index'
import Input from '../../components/Input/index'
import Welcome from '../../components/Welcome/index'
import Category from '../../components/Category/index'
import CardHomePageMobile from '../../components/CardPageHome/index'

import { useSelector } from 'react-redux'
import { selectAdress } from '../../features/Input/InputSlice'

function Home() {
  const adress = useSelector(selectAdress)
  console.log(adress)
  return (
    <div>
      <Header beReturn={false} />
      <Welcome />
      <Input />
      {adress.label ? (
        <div>
          {' '}
          <Category />
          <CardHomePageMobile />
        </div>
      ) : <></>}
    </div>
  )
}
export default Home
