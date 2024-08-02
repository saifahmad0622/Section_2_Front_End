'use client';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const UpdateUser = () => {

    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const router = useRouter();

    const getUserData = async () => {
        const res = await axios.get('http://localhost:5000/user/getbyid/' + id);
        console.log(res.data);
        setUserData(res.data);
    }

    useEffect(() => {
        getUserData();
    }, [])

    const submitForm = (values) => {
        console.log(values);

        axios.put('http://localhost:5000/user/update/' + id, values)
        .then((result) => {

            toast.success('User Updated Successfully');
            router.back();

        }).catch((err) => {
            console.log(err);
            toast.error('Failed to Update User');
        });

    }

    return (
        <div className='max-w-[80%] mx-auto'>
            <h1 className='text-center font-bold mt-5 text-3xl'>Update User</h1>

            {
                userData !== null ? (
                    <Formik initialValues={userData} onSubmit={submitForm}>
                        {(updateForm) => {
                            return <form onSubmit={updateForm.handleSubmit}>
                                <label htmlFor="name">Name</label>
                                <input
                                    id='name'
                                    onChange={updateForm.handleChange}
                                    value={updateForm.values.name}
                                    type="text" className='mb-5 border-2 border-gray-500 rounded px-3 py-1 block w-full' />

                                <label htmlFor="email">Email Address</label>
                                <input
                                    id='email'
                                    onChange={updateForm.handleChange}
                                    value={updateForm.values.email}
                                    type="email" className='mb-5 border-2 border-gray-500 rounded px-3 py-1 block w-full' />

                                <label htmlFor="password">Password</label>
                                <input
                                    id='password'
                                    onChange={updateForm.handleChange}
                                    value={updateForm.values.password}
                                    type="password" className='mb-5 border-2 border-gray-500 rounded px-3 py-1 block w-full' />

                                <label htmlFor="city">City</label>
                                <input
                                    id='city'
                                    onChange={updateForm.handleChange}
                                    value={updateForm.values.city}
                                    type="city" className='mb-5 border-2 border-gray-500 rounded px-3 py-1 block w-full' />

                                <button className='bg-blue-500 text-white px-4 py-2 rounded mt-5'>Submit</button>

                            </form>
                        }}
                    </Formik>
                ) : (
                    <h1>Loading...</h1>
                )
            }



        </div>
    )
}

export default UpdateUser;