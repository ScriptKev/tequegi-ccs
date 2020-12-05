import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button from 'components/Button'
import {
  ModalFormStyled,
  FormStyled,
  PositioningModal,
  FieldSetStyled,
  InputStyled,
  CloseModal,
  FormBackground
} from './styled'
// import Image from "next/image";

export default function ModalForm({ modalView, setModalView, dispatchProductsInCart, productsInCart }) {
  const { register, handleSubmit, watch, errors } = useForm()
  const router = useRouter()

  const totalPrice = (products) => {
    let productPriceAcum = 0

    products.forEach(item => productPriceAcum += item.price)
    return parseFloat(productPriceAcum).toFixed(2)
  }

  const onSubmit = data => {
    const BaseUrl = 'https://api.whatsapp.com/send?phone=584125544458'
    const __ = '%0A' // Saltos de Linea
    const _ = '%20' //Espacios

    console.log(data, productsInCart)

    window.open(`
      ${BaseUrl}&text=Hola${_}TequeGi${_}soy${_}${data.fullName}
      ${__}Estoy${_}interesado/a${_}en${_}ordenar${_}lo${_}siguiente:
      ${__}${__}${productsInCart.map(product => `${product.title} x${product.stock}`)}
      ${__}${__}Con${_}un${_}precio${_}total:${_}de${_}${totalPrice(productsInCart)}$`,
      '_blank',
      'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=600'
    )
    setModalView(false)
    router.push('/compra-exitosa')
      .then(() => dispatchProductsInCart([]))
  }

  console.log(watch("example"))
  console.log(errors)

  return (
    <ModalFormStyled showModal={modalView}>
      <PositioningModal>
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <CloseModal onClick={() => setModalView(false)}>
            <img src='/icons/close.svg' width='20px' height='20px' alt='close-icon' />
          </CloseModal>

          <FormBackground>
            <span>
              Recibiremos su orden via whatsapp
              <img style={{ paddingTop: '5px', marginLeft: '5px' }} src='/icons/whatsapp.svg' width='20px' height='20px' alt='whatsapp-icon' />
              {/* <Image src='/icons/whatsapp.svg' width={20} height={20} alt='whatsapp-icon' /> */}
            </span>

            <FieldSetStyled>
              <InputStyled name='fullName' type='text' placeholder='Nombre y Apellido' ref={register} />
              <InputStyled
                name='phone'
                placeholder='Numero de telefono'
                type='text'
                ref={register({ required: true, maxLength: 11, minLength: 8 })}
              />
            </FieldSetStyled>

            {errors.exampleRequired && <span>This field is required</span>}

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button title='Confirmar' submit />
            </div>
          </FormBackground>
        </FormStyled>
      </PositioningModal>
    </ModalFormStyled>
  )
}
