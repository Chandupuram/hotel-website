import React from "react";
import { CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function ThankYouPage() {
  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex items-center">
      <Container className="text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 text-green-500 rounded-full mb-8">
          <CheckCircle size={48} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
          Thank You!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your enquiry has been successfully sent. Our reservation team will get back to you shortly with availability and pricing details.
        </p>
        
        <div className="flex justify-center gap-4">
          <Button href="/">Return to Home</Button>
          <Button href="/rooms" variant="outline">Browse More Rooms</Button>
        </div>
      </Container>
    </div>
  );
}
