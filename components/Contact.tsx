import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Mail, Send } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';
import SectionHeader from './SectionHeader';

const Contact: React.FC = () => {

  // ✅ WhatsApp submit logic
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const childName = formData.get("childName");
    const parentName = formData.get("parentName");
    const phone = formData.get("phone");
    const program = formData.get("program");
    const message = formData.get("message");

    const whatsappMessage =
      `New Admission Enquiry:%0A%0A` +
      `Child Name: ${childName}%0A` +
      `Parent Name: ${parentName}%0A` +
      `Phone: ${phone}%0A` +
      `Program: ${program}%0A` +
      `Message: ${message}`;

    window.open(
      `https://wa.me/${SCHOOL_INFO.whatsapp}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader 
          badge="Get In Touch"
          title="Start Your Child's Journey"
          subtitle="Have questions? Reach out to us for a visit or more information about the admission process."
        />

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-brand-blue p-10 rounded-[3rem] text-white shadow-xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-3xl font-heading font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl"><MapPin size={24} /></div>
                  <div>
                    <p className="font-bold mb-1">Visit Us</p>
                    <p className="text-white/80 text-sm leading-relaxed">{SCHOOL_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl"><Phone size={24} /></div>
                  <div>
                    <p className="font-bold mb-1">Call Us</p>
                    <a href={`tel:${SCHOOL_INFO.phone}`} className="text-white/80 hover:text-white transition-colors">
                      {SCHOOL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl"><Mail size={24} /></div>
                  <div>
                    <p className="font-bold mb-1">Email Us</p>
                    <a href={`mailto:${SCHOOL_INFO.email}`} className="text-white/80 hover:text-white transition-colors">
                      {SCHOOL_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a 
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="flex-1 bg-white text-brand-blue py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <Phone size={18} /> Click to Call
                </a>
                <a 
                  href={`https://wa.me/${SCHOOL_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>

            {/* MAP */}
            <div className="h-80 rounded-[3rem] overflow-hidden shadow-lg border-4 border-gray-100">
              <a
                href="https://www.google.com/maps/dir//H.No:+3,+SREE+VEDA+Play+School+%26+Day+Care,+10-59,+10-9,+Gokhale+Nagar,+Ramanthapur,+Hyderabad,+Telangana+500013/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bcb99f092de917f:0x20fd9ebb5cecc702?sa=X&ved=1t:57443&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1332!2d78.5393!3d17.3912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb997f76634b8d%3A0xc49b78e3423773c8!2sSree%20Veda%20Play%20School%20%26%20Daycare!5e0!3m2!1sen!2sin!4v1716200000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="pointer-events-none"
                ></iframe>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-10 rounded-[3rem]"
          >
            <h3 className="text-2xl font-heading font-bold mb-8 text-gray-900">Send an Enquiry</h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Child's Name</label>
                  <input name="childName" required type="text" className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 outline-none focus:border-brand-pink transition-colors" placeholder="Little One's Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Parent's Name</label>
                  <input name="parentName" required type="text" className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 outline-none focus:border-brand-pink transition-colors" placeholder="Your Name" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input name="phone" required type="tel" className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 outline-none focus:border-brand-pink transition-colors" placeholder="+91 XXXXX XXXXX" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Program Interested In</label>
                <select name="program" className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 outline-none focus:border-brand-pink transition-colors appearance-none cursor-pointer">
                  <option>Play Group</option>
                  <option>Nursery</option>
                  <option>LKG</option>
                  <option>UKG</option>
                  <option>Day Care</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea name="message" rows={4} className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 outline-none focus:border-brand-pink transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-pink text-white py-5 rounded-2xl font-bold text-lg shadow-lg hover:bg-brand-blue transition-all flex items-center justify-center gap-2">
                <Send size={20} /> Submit Enquiry
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
