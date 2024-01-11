import React from 'react'

function Contact() {
    return (
        <div className="contact">
            <h3>Contact Us</h3>
            <form method="post" action="/help/contact">
                <label>
                    <span>Your email:</span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Your message:</span>
                    <textarea name="message" required></textarea>
                </label>
                <button>Submit</button>

                {/* {data && data.error && <p>{data.error}</p>} */}
            </form>
        </div>
    )
}

export default Contact
