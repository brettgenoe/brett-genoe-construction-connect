import React from "react";
import "./AddPost.scss"
const AddPost = () => {

    return (
        <section className="add-new">
            <div className="add-new__container">
                <h1 className="add-new__title">Add New Hard Hat Hero Profile </h1>
                <form className="add-new__form">
                    <div className="add-new__form--container">
                        <div className="add-new__form-left">
                            <label
                                id="companyname"
                                className="add-new__form-header">
                                Companyname:
                            </label>
                            <input
                                id="companyname"
                                className="add-new__form-input"
                                placeholder="Company Name"
                            />
                            <label
                                id="location"
                                className="add-new__form-header">
                                Location:
                            </label>
                            <input
                                id="location"
                                className="add-new__form-input"
                                placeholder="Location goes here"
                            />
                            <label
                                id="duration"
                                className="add-new__form-header"
                            >
                                Duration:
                            </label>
                            <input
                                id="duration"
                                className="add-new__form-input"
                                placeholder="Duration of project"
                            />
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
                        </div>
                        <div className="add-new__form-right">

                            <label
                                id="carpenters"
                                className="add-new__form-header">
                                Carpenters:
                            </label>
                            <input
                                id="carpenters"
                                className="add-new__form-input"
                                placeholder="# of Carpenters Needed"
                            />
                            <label
                                id="electricians"

                                className="add-new__form-header">
                                Electricians:
                            </label>
                            <input
                                id="electricians"
                                className="add-new__form-input"
                                placeholder="# of Electricians Needed"
                            />
                            <label
                                id="plumbers"
                                className="add-new__form-header">
                                Plumbers:
                            </label>
                            <input
                                id="plumbers"
                                className="add-new__form-input"
                                placeholder="# of Plumbers Needed"
                            />

                            <label
                                id="operators"
                                className="add-new__form-header">
                                Operators:
                            </label>
                            <input className="add-new__form-input"
                                id="operators"
                                placeholder="# of Operators Needed"
                            />
                            <label
                                id="safety"
                                className="add-new__form-header">
                                Safety:
                            </label>
                            <input className="add-new__form-input"
                                id="safety"
                                placeholder="# of Safety Needed"
                            />
                            <label
                                id="labours"
                                className="add-new__form-header">
                                Operators:
                            </label>
                            <input className="add-new__form-input"
                                id="labours"
                                placeholder="# of Labours Needed"
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
export default AddPost