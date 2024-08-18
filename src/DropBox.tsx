import React, {useCallback} from 'react'; 
import {useDropzone, FileWithPath} from 'react-dropzone'; 
import axios from 'axios'; 


const DropBox = ()=> {
    
    const uploadFile = async (file: File) => {
        const formData = new FormData();
        formData.append('image', file);
        
        try {
            const response = await axios.post ('ill link this later', formData, {
                headers: {
                    'Authorization': 'ill insert this later',
                    'Content-Type': 'multipart/form-data'  
                },
            });

            const result = response.data;
            console.log('File uploaded successfully:', result);
        }  
        catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    const onDrop = (acceptedFiles: FileWithPath[]) => {        
        acceptedFiles.forEach(file => {
            uploadFile(file);
        });
    };

    const {getRootProps, getInputProps} = useDropzone ({
        onDrop,    
    });
    
    return (
        <div 
            {...getRootProps()} style={{
                border: '2px dashed #007bff',
                padding: '20px',
                textAlign: 'center',
                borderRadius: '10px',
                cursor: 'pointer',
                backgroundColor: '#f8f9fa',
            }}>
      <input {...getInputProps()} />
        <p>
            file garbage
        </p>
    </div>
    );
    
}

export default DropBox;
    
