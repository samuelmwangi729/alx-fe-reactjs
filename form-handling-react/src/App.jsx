import React from 'react'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/FormikForm'

const App = () => {
  return (
    <div>
      <RegistrationForm/>
      <h2>
        formik
      </h2>
      <FormikForm />
    </div>
  )
}

export default App
