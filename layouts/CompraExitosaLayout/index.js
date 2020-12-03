import Image from 'next/image'
import { CompraExitosaLayoutStyled } from './styled'

export default function CompraExitosaLayout() {
  return (
    <CompraExitosaLayoutStyled>
      <h5 style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        Orden exitosa
        <div style={{ display: 'flex', margin: '20px 0' }}>
          <Image style={{ marginLeft: '10px' }} src='/img/emoji-savouring-face.png' width={90} height={90} alt='emoji-savouring' />
          <Image src='/img/emojy-party-face.png' width={90} height={90} alt='emoji-party' />
        </div>
      </h5>
      <p>Estaremos recibiendo su pedido via whatsapp</p>
      <p>Regresando al inicio...</p>
    </CompraExitosaLayoutStyled>
  )
}
