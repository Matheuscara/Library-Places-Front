import { useState, useEffect } from 'react'
import './style.css'
import { useDispatch } from 'react-redux'
import { changeaDress } from '../../../features/Input/InputSlice'

import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function InputMobile() {
  const [value, setValue] = useState([])
  const dispatch = useDispatch()

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
    </div>
  )
}

export default InputMobile
