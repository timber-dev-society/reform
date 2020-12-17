# ReForm

Generate react form with low rerender

## Usage

```JSX
import react from 'react'
import Form, { Input, Button, Validator, reformData} from 'reform'

const MyForm = () => {
  const handleSubmit = data => {
    if (data.login.isValid && data.password.isValid) {
      fetch('/login', { method: 'POST', data: reformData(data) })
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <p>
        <Validator regex={/\d+/} notEmpty>
          <Input type="text" name="login" />
        </Validator>
      </p>
      <p>
        <Validator notEmpty>
          <Input type="password" name="password" />
        </Validator>
      </p>
      <Button>Send</Button>
    </Form>
  )
}
```
