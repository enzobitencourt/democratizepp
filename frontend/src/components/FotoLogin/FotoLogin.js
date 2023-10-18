import React, { useState } from 'react';
import { Div, Esfumado } from './styled';

function FotoLogin({ src }) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Faça algo com o arquivo selecionado, como enviá-lo para o servidor ou exibi-lo na página
            setSelectedFile(file);
        }
    };


    return (
        <div>
            <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
                {selectedFile ? (
                    <Div
                        imagem={URL.createObjectURL(selectedFile)}
                        alt="User's profile"
                    >
                        <Esfumado>
                            EDITAR
                        </Esfumado>
                    </Div>
                ) : (
                    <Div imagem={src}>
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
