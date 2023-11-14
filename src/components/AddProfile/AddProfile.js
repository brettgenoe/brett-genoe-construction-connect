import React from "react";
import "./AddProfile.scss"
const AddProfile = () => {

    return (
        <section className="add-new">
            <div className="add-new__container">
                <h1 className="add-new__title">Add New Hard Hat Hero Profile </h1>
                <form className="add-new__form">
                    <div className="add-new__form--container">
                        <div className="add-new__form-left">
                            <label
                                id="username"
                                className="add-new__form-header">
                                Username:
                            </label>
                            <input
                                id="username"
                                className="add-new__form-input"
                                placeholder="Username"
                            />
                            <label
                                id="password"
                                className="add-new__form-header">
                                Password:
                            </label>
                            <input
                                id="password"
                                className="add-new__form-input"
                                placeholder="Password goes here"
                            />
                            <label
                                id="confirmPassword"
                                className="add-new__form-header"
                            >
                                Confirm Password:
                            </label>
                            <input
                                id="confirmPassword"
                                className="add-new__form-input"
                                placeholder="Confirm Password"
                            />
                        </div>
                        <div className="add-new__form-right">
                            <label
                                id="email"
                                className="add-new__form-header">
                                Email:
                            </label>
                            <input
                                id="email"
                                className="add-new__form-input"
                                placeholder="Email"
                            />

                            <label
                                id="address"
                                className="add-new__form-header">
                                Address:
                            </label>
                            <input
                                id="address"
                                className="add-new__form-input"
                                placeholder="Address"
                            />
                            <label
                                id="city"

                                className="add-new__form-header">
                                city:
                            </label>
                            <input
                                id="city"
                                className="add-new__form-input"
                                placeholder="City"
                            />
                            <label
                                id="province"
                                className="add-new__form-header">
                                Province:
                            </label>
                            <input
                                id="province"
                                className="add-new__form-input"
                                placeholder="Province"
                            />

                            <label
                                id="trade"
                                className="add-new__form-header">
                                Trade:
                            </label>
                            <input className="add-new__form-input"
                                id="trade"
                                placeholder="Trade"
                            />
                        </div>
                    </div>

                    <button
                        className="add-new__form-button"
                        type="submit">Create</button>



                </form>


            </div>

        </section>
    )

}
export default AddProfile