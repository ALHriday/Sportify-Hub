
const FAQ = () => {
    return (
        <div className="px-4 py-8">
            <div className="text-4xl font-bold mb-4">
                Frequently Asked Questions (FAQs)
            </div>

            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Where do you deliver?</div>
                    <div className="collapse-content">
                        <p>We deliver worldwide! Shipping options and costs are displayed at checkout based on your location.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">How long does delivery take?</div>
                    <div className="collapse-content">
                        <p>Delivery usually takes 3-7 business days for domestic orders and 7-14 business days for international orders. Exact delivery times are provided during checkout.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Do you offer free shipping?</div>
                    <div className="collapse-content">
                        <p>We offer free shipping on orders above 100$, applicable to select regions.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Can I track my order?</div>
                    <div className="collapse-content">
                        <p>Yes, once your order is dispatched, we’ll send you a tracking link via email so you can monitor your delivery.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Can I change or cancel my order after placing it?</div>
                    <div className="collapse-content">
                        <p>
                            Orders can be modified or canceled within 12 hours of placement. Please contact us immediately at sportifyHub123@gmai.com</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What is your return policy?</div>
                    <div className="collapse-content">
                        <p>
                            We accept returns within 30 days of delivery. Items must be unused, in their original packaging, and include proof of purchase.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FAQ;