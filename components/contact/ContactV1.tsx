"use client";
import dynamic from "next/dynamic";
import btnArrow from '@/public/assets/images/btn-arrow.svg';
import contactThumb from '@/public/assets/images/contact.png';
import Image from 'next/image';
import { toast } from 'react-toastify';

const ContactV1 = () => {

    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.currentTarget.reset();
        toast.success("Thanks For Your Message");
    }

    return (
        <>
            <div className="contact-sec" id="contact">
                <div className="custom-row">
                    <div className="left">
                        <div className="contact-content">
                            <h3 data-aos="fade-up" data-aos-delay={200}>Let’s <span>Connect</span></h3>
                            <p>
                                <span className="required">*</span> Whether you have a question, or want to discuss a potential project, our team at <br /> AIXOR is here to help. Please fill out the form below!!!
                            </p>
                            <form id="contact-form" className="contact-form" onSubmit={handleForm}>
                                <div className="input-group">
                                    <input type="text" name="name" placeholder="Name" autoComplete="off" required />
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <input type="email" name="email" placeholder="E-mail" autoComplete="off" required />
                                    </div>
                                    <div className="input-group">
                                        <input type="text" name="phone" autoComplete="off" placeholder="Phone" required />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <textarea name="message" id="message" placeholder="Message" autoComplete="off" required />
                                </div>
                                <div className="input-group">
                                    <button type="submit" className="theme-btn">
                                        Send Message
                                        <Image src={btnArrow} alt="icon" />
                                    </button>
                                </div>
                            </form>
                            <div id="result" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="img-box">
                            <Image src={contactThumb} alt="contact-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default dynamic(() => Promise.resolve(ContactV1), { ssr: false });