import React from 'react'
import { useForm } from 'react-hook-form'
import { ButtonTextArrow, ButtonArrowType } from '~/components/ButtonTextArrow'
import { Form, Input, TextArea, ButtonWrapper } from './ContactForm.styles'

const ContactForm = (): JSX.Element => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name_surname"
        placeholder="Imię i nazwisko"
        ref={register({ required: true })}
        className={errors.name_surname && 'error'}
      />
      <Input
        name="email"
        placeholder="Adres e-mail"
        ref={register({ required: true })}
        className={errors.name_surname && 'error'}
      />
      <Input
        name="subject"
        placeholder="Temat"
        ref={register({ required: true })}
        className={errors.name_surname && 'error'}
      />
      <TextArea
        name="message"
        rows={10}
        placeholder="Treść wiadomości"
        ref={register({ required: true })}
        className={errors.name_surname && 'error'}
      />
      <ButtonWrapper mt={['20px', '35px', '50px']}>
        <ButtonTextArrow
          mode={ButtonArrowType.SECONDARY}
          text="WYŚLIJ"
          type="submit"
          fontSize={['1.4rem', '1.4rem', '1.6rem']}
        />
      </ButtonWrapper>
    </Form>
  )
}

export default ContactForm
