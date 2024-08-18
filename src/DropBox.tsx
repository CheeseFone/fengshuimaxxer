import React, {useCallback} from 'react'; 
import {useDropzone, FileWithPath} from 'react-dropzone'; 
import './ImageDropBox.css'; 
import axios from 'axios'; 


const DropBox = ()=> {
    
    const uploadFile = async (file: File) => {
        const formData = new FormData();
        formData.append('image', file);
        
        try {
            const response = await fetch('ill link this later', {
                method: 'POST',
                headers: {
                'Authorization': 'ill insert this later'  
                },
                body: formData,   
            });
            const result = await response.json();
            console.log('File uploaded successfully:', result);
        }  
        catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div> 
        </div>
    );
    
}

export default DropBox;
    
