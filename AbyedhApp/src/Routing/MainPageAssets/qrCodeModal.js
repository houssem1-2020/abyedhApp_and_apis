import React from 'react';
import { QrReader } from 'react-qr-reader';
import { Button } from 'semantic-ui-react';

function QrCodeModal({ShowUpLinks, setQRCodeValue, qrCodeValue, GoToQrCodeFunction, selectedListeTag, ActionsBtnCard }) {
    return ( <>
        <QrReader
                constraints={{
                    facingMode: 'environment'
                }}
                scanDelay={3000}
                onResult={(result, error) => {
                if (!!result) {
                    ShowUpLinks(result.text)
                    //GoToQrCodeFunction(result.text)
                    setQRCodeValue(result.text)
                }

                if (!!error) {
                    console.info(error);
                }
                }}
                style={{ width: '100%',height: "300px" }}
                className='mb-3'
        />
            
        {qrCodeValue == null ?<> <h3 className='text-center mt-0'>قم بمسح المعرف </h3> <img src='https://cdn.abyedh.tn/Images/required/qr_code_scanner.gif' width='100%'  height='150px' /> </> : <Button size='big' className='bg-danger text-white mb-3 rounded-pill' disabled={qrCodeValue == null} onClick={() => GoToQrCodeFunction(qrCodeValue)}> زيارة الملف </Button>}
        <div className='col-12 d-flex' dir='rtl'  >
            { selectedListeTag.map( (data,index) => <ActionsBtnCard key={index} data={data} indexKey={index} /> )  }                        
        </div>

    </> );
}

export default QrCodeModal;