import Header from '../../components/Header/index'
import CardPagePlace from '../../components/CardPagePlace/index'

import '../../Styles/constants.css'
import { useParams, generatePath } from 'react-router-dom'

function PagePlace() {
  const { title } = useParams();

  const createPath = () => {
    const path = generatePath('/Category/:title', { title: title });
    return path;
  }

  return (
    <div>
      <Header beReturn={true} locationReturn={createPath()} />
      <CardPagePlace />
    </div>
  )
}
export default PagePlace;
