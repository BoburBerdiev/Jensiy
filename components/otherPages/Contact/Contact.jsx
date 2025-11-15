"use client";

import { storesLocations } from "@/data/storeLocations";
import LocationMap from "@/components/otherPages/Contact/LocationMap";

export default function Contact() {
    return (
        <section className="contact-us container">
            <div className="mw-930">
                <div className="row mb-5">
                    {storesLocations.slice(0, 2).map((elm, i) => (
                        <div key={i} className="col-lg-6">
                            <h3 className="mb-4">Магазин в {elm.city}</h3>
                            <p className="mb-4">
                                {elm.address}
                                <br />
                                {elm.country}
                            </p>
                            <p className="mb-4">
                                {elm.emailAddress}
                                <br />
                                {elm.phone}
                            </p>
                        </div>
                    ))}
                    <div className="col-md-6">
                        <LocationMap />
                    </div>
                </div>
                <div className="contact-us__form">
                    <div className="row">
                        <div className="col-md-12">
                            <form
                                className="needs-validation"
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <div className="form-floating   ">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="contact_us_name"
                                        placeholder="Имя *"
                                        required
                                    />
                                    <label htmlFor="contact_us_name">Имя *</label>
                                </div>
                                <div className="form-floating   mt-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="contact_us_name"
                                        placeholder="Номер телефона"
                                        required
                                    />
                                    <label htmlFor="contact_us_name">Номер телефона</label>
                                </div>
                                <div className="form-floating my-4">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="contact_us_email"
                                        placeholder="Электронная почта *"
                                        required
                                    />
                                    <label htmlFor="contact_us_email">Электронная почта *</label>
                                </div>
                                <div className="my-4">
                  <textarea
                      className="form-control form-control_gray"
                      placeholder="Ваше сообщение"
                      cols="30"
                      rows="8"
                      required
                  ></textarea>
                                </div>
                                <div className="my-4 d-flex justify-content-center align-items-center">
                                    <button type="submit" className="btn btn-primary">
                                        Отправить
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
