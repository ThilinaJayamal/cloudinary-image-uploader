import React, { useEffect, useRef, useState } from "react";
import { ImagePlus } from 'lucide-react';
import axios from "axios";

function ImageUploader() {
    const imageRef = useRef(null);
    const [preview, setPreview] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleClick = () => {
        imageRef.current?.click();
    };

    const handleChange = async (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) {
            return
        }
        await handleUpload(selectedFile);
    };

    const handleUpload = async (selectedFile) => {
        setUploading(true)
        try {
            const formData = new FormData();
            formData.append("my_file", selectedFile);

            const { data } = await axios.post(
                "http://localhost:3000/api/upload",
                formData
            );
            setPreview(data?.secure_url)
            setUploading(false)
            console.log(data)
        } catch (error) {
            setUploading(false)
            console.log(error)
        }
    }

    return (
        <div>
            <div
                className="bg-green-100 rounded-md flex items-center shadow-sm
            justify-center cursor-pointer overflow-hidden border border-green-200"
                onClick={handleClick}
            >
                <input
                    type="file"
                    ref={imageRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleChange}
                />

                {
                    !uploading ?
                        (
                            preview ?
                                (
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        className="w-72 h-52 object-cover"
                                    />
                                ) :
                                (
                                    <div className="flex flex-col items-center justify-center p-5 w-full h-48">
                                        <ImagePlus size={32} className="text-green-300" />
                                        <p className="text-base text-gray-700 font-semibold">Click Here to Upload</p>
                                        <p className="text-sm text-gray-600">JPG/JPEG or PNG maximum size 10MB.</p>
                                    </div>
                                )
                        ) :
                        (
                            <div className="flex flex-col items-center justify-center p-5 w-full h-48 animate-pulse">
                                <p className="text-lg text-green-400">Uploading...</p>
                            </div>
                        )
                }

            </div>
        </div >
    );
}

export default ImageUploader;
