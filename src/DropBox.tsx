import React, {useCallback, useState} from 'react'; 
import {useDropzone} from 'react-dropzone'; 
import './ImageDropBox.css'; 
import axios from 'axios'; 


const DropBox = ()=> {
    
    //hook managing things
    const [files, setFiles] = useState<any[]>([]);
    const [uploading, setUploading] = useState(false); 
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    
}
    
