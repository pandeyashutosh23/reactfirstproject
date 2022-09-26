import React from "react";
import { useState } from "react";

const Contact = () => {

    // useSate hook

    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    // form submit function

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`my name is ${data.name}  my phone number is ${data.phone}  `);

    }

    const inputEvent = (event) => {
        const { name, value } = event.target;

        setData((preval) => {
            return {
                ...preval,
                [name]: value,
            }
        })

    }


    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact</h1>
            </div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>

                            <div class="mb-3">
                                <label for="name" class="form-label">Name </label>
                                <input type="text" class="form-control" id="name" name="name" value={data.name} onChange={inputEvent} placeholder="Enter Your Name...." required />
                            </div>


                            <div class="mb-3">
                                <label for="phone" class="form-label">Phone </label>
                                <input type="number" class="form-control" id="phone" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter Your Phone Number" required />
                            </div>


                            <div class="mb-3">
                                <label for="Email" class="form-label">Email </label>
                                <input type="email" class="form-control" id="Email" name="Email" value={data.email} onChange={inputEvent} placeholder="name@example.com" />
                            </div>

                            <div class="mb-3">
                                <label for="msg" class="form-label">Message </label>
                                <textarea class="form-control" id="msg" rows="3" name="msg" value={data.message} onChange={inputEvent} ></textarea>
                            </div>

                            <div class="col-auto mt-3">
                                <button type="submit" class="btn btn-outline-primary mb-3">Submit Form</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;