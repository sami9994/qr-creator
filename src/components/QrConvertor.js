import { QRCodeCanvas } from 'qrcode.react'
const QrConvertor = ({ url }) => {
  return <QRCodeCanvas value={url} style={{ margin: '1rem' }} />
}
export default QrConvertor
