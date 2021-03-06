import { Form } from './form'
import { Input as FormInput } from './input'
import { Button as FormButton } from './button'
import { Validator as FormValidator } from './validator'


export default Form
export const Input = FormInput
export const Button = FormButton
export const Validator = FormValidator

export const reformData = stateData => {
  const fromData = new FormData()
  Object.keys(stateData).forEach(key => { formData.append(key, stateData[key].value) })

  return formData
}
