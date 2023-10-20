import React from 'react';
import { Div, Esfumado } from './styled';
import Foto from "../../Assets/login.png"

function FotoLogin(props) {

    const user = props.user

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            props.sfile(file);
        }
    };


    return (
        <div>
            <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
                {props.file ? (
                    <Div
                        imagem={URL.createObjectURL(props.file)}
                        alt="User's profile"
                    >
                        <Esfumado>
                            EDITAR
                        </Esfumado>
                    </Div>
                ) : (
                    <Div imagem={user.imagem ? user.imagem : Foto}>
                        <Esfumado>
                            EDITAR
                        </Esfumado>
                    </Div>
                )}
            </label>
            <input
                type="file"
                id="fileInput"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
        </div>
    );
}

export default FotoLogin;
