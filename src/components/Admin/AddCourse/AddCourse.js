import React from 'react';
import axios from 'axios';
import './AddCourse.css';
import { useForm } from "react-hook-form";
import { useState } from 'react';

const AddCourse = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const courseData = {
            name: data.name,
            price: data.price,
            description: data.description,
            imageURL: imageURL
        }
        const url = `http://localhost:5000/addCourse`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(courseData)
        })
            .then(res => {
                if(res){
                    alert('course saved successfully to database');
                }
            })
    };
    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '3fbd18749a02465de2e5cad61c40c47a');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="mt-5">
            <h3>Add Course</h3>
            <div className="admin-form mt-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="admin container shadow p-3 mb-3 mt-5 bg-body">
                        <div className="d-flex justify-content-around p-3">
                            <div>
                                <label htmlFor="form-label">Course Name</label> <br />
                                <input name="name" defaultValue="" placeholder="Course Name" type="form-control" ref={register} />
                            </div>
                            <div>
                                <label htmlFor="form-label">Description</label><br />
                                <input name="description" defaultValue="" placeholder="Course Description" ref={register} />
                            </div>
                        </div>

                        <div className="d-flex justify-content-around p-3">
                            <div>
                                <label htmlFor="form-label">Add Price</label> <br />
                                <input name="price" defaultValue="" placeholder="Course Price" ref={register} />
                            </div>
                            <div>
                                <label htmlFor="form-label">Add Photo</label> <br />
                                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                            </div>
                        </div>
                    </div>
                    <div className="save-button d-flex justify-content-end">
                        <input type="submit" value="save" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCourse;