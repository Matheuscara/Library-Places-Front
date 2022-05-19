import { useState, useEffect } from 'react'
import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import { changeaDress, selectAdress } from '../../../features/Input/InputSlice'

import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function InputMobile() {
  const [value, setValue] = useState([])
  const dispatch = useDispatch()
  const Adress = useSelector(selectAdress)

  useEffect(() => {
    dispatch(changeaDress(value))
  }, [value])

  return (
    <div className="InputMobile">
      <GooglePlacesAutocomplete
        apiKey="AIzaSyBrdIieB0chRMudu8Gr4aKh7qA-5JBordc"
        selectProps={{
          value,
          onChange: setValue,
        }}
        apiOptions={{ language: 'pt-br' }}
      />
      <p>{Adress.label}</p>
    </div>
  )
}

export default InputMobile
