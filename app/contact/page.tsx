import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm } from "@/components/ContactForm";
import { MapSection } from "@/components/MapSection";
import { hotel } from "@/data/hotel";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-primary text-white py-16 mb-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center">Contact Us</h1>
          <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto">
            We are here to assist you. Reach out to us for bookings, inquiries, or special requests.
          </p>
        </Container>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row gap-12 mb-24">
          <div className="lg:w-1/3">
            <SectionTitle title="Get in Touch" subtitle="Information" />
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you want to book a room, host an event, or simply ask a question, our team is ready to help make your stay perfect.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-accent p-3 rounded-full text-primary mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">{hotel.contact.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent p-3 rounded-full text-primary mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">{hotel.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent p-3 rounded-full text-primary mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">{hotel.contact.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent p-3 rounded-full text-primary mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Reception Hours</h4>
                  <p className="text-gray-600">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <ContactForm />
          </div>
        </div>
      </Container>
      
      {/* Map Section at the bottom */}
      <MapSection />
    </div>
  );
}
