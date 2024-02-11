import React from 'react';
import ReactDOM from 'react-dom';

const Modal = () => {
    return ReactDOM.createPortal(
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center'>
            <div className='w-64 bg-white p-8 rounded-lg'>
                <h1 className='text-center text-4xl font-bold'>Modal</h1>
                <br/>
                <p className='text-center mt-4'>This is a modal</p>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal;