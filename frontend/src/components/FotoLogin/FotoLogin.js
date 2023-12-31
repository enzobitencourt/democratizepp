import React from 'react';
import { Div, Esfumado } from './styled';
import Foto from "../../Assets/login.png"
import imageCompression from "browser-image-compression";

function FotoLogin(props) {
    const handleSave = props.save
    const user = props.user;

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const options = {
                    maxSizeMB: 0.1, 
                    maxWidthOrHeight: 800, 
                    useWebWorker: true,
                };
    
                const compressedFile = await imageCompression(file, options);
                const reader = new FileReader();
    
                reader.onload = (event) => {
                    const imageArrayBuffer = event.target.result;
        
                    props.sfile(imageArrayBuffer);
                    handleSave('imagem', imageArrayBuffer);
                };
    
                reader.readAsArrayBuffer(compressedFile);
            } catch (error) {
                console.error("Erro ao comprimir imagem:", error);
            }
        }
    };

    function conversor(byteArray) {
        const uint8Array = new Uint8Array(byteArray);

        let base64String = '';
        for (let i = 0; i < uint8Array.length; i++) {
            base64String += String.fromCharCode(uint8Array[i]);
        }

        return base64String;

    }

    return (
        <div>
            <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
                <Div
                    imagem={props.file ? URL.createObjectURL(new Blob([props.file])) : user.imagem ? `data:image/jpeg;base64,${conversor(user.imagem.data)}` : Foto}
                    alt="User's profile"
                >
                    <Esfumado>
                        EDITAR
                    </Esfumado>
                </Div>
            </label>
            <input
                type="file"
                name="imagem"
                id="fileInput"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
        </div>
    );
}

export default FotoLogin;
