import { useState, useEffect } from 'react'
import './style.css'
import { useDispatch } from 'react-redux'
import { changeaDress } from '../../../features/Input/InputSlice'


import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function InputWeb() {
  const [value, setValue] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeaDress(value))
  }, [value])

  return (
    <div className="InputWeb">
      <div className="containerInput">
        <div className="elementsInput text">
          <p>
            Enter your <span className="span">address</span>
          </p>
        </div>
        <div className="elementsInput input">
          <GooglePlacesAutocomplete
            apiKey="AIzaSyAQCpRYWuDFQUT9pnoZt1CcI1kp-P_eWUo"
            selectProps={{
              value,
              onChange: setValue,
            }}
            apiOptions={{ language: 'pt-br' }}
          />
        </div>
      </div>
    </div>
  )
}

export default InputWeb
