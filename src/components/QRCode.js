import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import './QRCode.css'
const QRCode = () => {

    const url_user = "https://api-truongcongtoan.herokuapp.com/api/users/email="
    const { email } = useParams();
   const [dataGet, setdataGet] = useState({})

    const getDataByEmail = async (url,email) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${url}${email}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setdataGet(JSON.parse(result))
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    let check = false
      if(!check ){
        getDataByEmail(url_user,email)
      }
    return () => {
      check = true
    }
  }, [email])
  let data = `${dataGet.qrcode}`
console.log(dataGet);
console.log("datat ",data)
//
  return (
    <div className='qrcode'> 
    <div className='title'>Mã QR của bạn là </div>
      <div className='preview-image' 
      > 
    <img            
    src={data} 
              
           />
       </div>    
       
   </div>
  )
}

export default QRCode



  