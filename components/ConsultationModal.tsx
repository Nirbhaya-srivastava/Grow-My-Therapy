import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Shield, Calendar, Clock, MapPin } from 'lucide-react';
import { THERAPIST_PROFILE } from '../data/therapistData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledService = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(prefilledService || 'Anxiety and Panic Therapy');
  const [format, setFormat] = useState<'in-person' | 'telehealth'>('in-person');
  const [californiaResident, setCaliforniaResident] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (prefilledService) {
      setService(prefilledService);
    }
  }, [prefilledService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !email.includes('@') || !phone.trim()) {
      setError('Please fill in your name, valid email, and phone number.');
      return;
    }
    if (!californiaResident) {
      setError('Please confirm California residency for licensure compliance.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#26392F]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="bg-[#F5F0E7] border border-[#26392F]/20 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 text-[#29352E]/60 hover:text-[#26392F] p-1.5 rounded-full hover:bg-[#26392F]/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-[#DFE5DA] text-[#52685A] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-semibold text-2xl text-[#26392F]">
              Consultation Requested
            </h3>
            <p className="text-sm text-[#29352E]/80 leading-relaxed">
              Thank you, <strong>{name}</strong>. Dr. Maya Reynolds has received your request for <strong>{service}</strong> ({format === 'in-person' ? 'Santa Monica Office' : 'California Telehealth'}). You will receive a personal email reply at <strong>{email}</strong> within 24 to 48 business hours with proposed times.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#F5F0E7] bg-[#52685A] hover:bg-[#26392F] rounded transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#52685A]">
                Complimentary 15-Minute Call
              </span>
              <h3 className="font-serif font-semibold text-2xl text-[#26392F] mt-1">
                Book a Consultation
              </h3>
              <p className="text-xs text-[#29352E]/70 mt-1">
                A brief, warm conversation to discuss your goals and determine clinical fit.
              </p>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                {error}
              </div>
            )}

            <div className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#26392F] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#26392F]/20 bg-white text-[#29352E] focus:outline-none focus:ring-2 focus:ring-[#52685A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#26392F] mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#26392F]/20 bg-white text-[#29352E] focus:outline-none focus:ring-2 focus:ring-[#52685A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#26392F] mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(310) 000-0000"
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#26392F]/20 bg-white text-[#29352E] focus:outline-none focus:ring-2 focus:ring-[#52685A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#26392F] mb-1">
                  Service of Interest
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#26392F]/20 bg-white text-[#29352E] focus:outline-none focus:ring-2 focus:ring-[#52685A]"
                >
                  <option value="Anxiety and Panic Therapy">Anxiety and Panic Therapy</option>
                  <option value="Trauma and EMDR Therapy">Trauma and EMDR Therapy</option>
                  <option value="Burnout and Perfectionism">Burnout and Perfectionism</option>
                  <option value="General Psychotherapy / Consultation">General Psychotherapy / Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#26392F] mb-1.5">
                  Session Format
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setFormat('in-person')}
                    className={`py-2 px-3 rounded-lg border transition-all text-center ${
                      format === 'in-person'
                        ? 'bg-[#52685A] text-[#F5F0E7] border-[#52685A]'
                        : 'bg-white text-[#29352E] border-[#26392F]/20'
                    }`}
                  >
                    In-Person (Santa Monica)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormat('telehealth')}
                    className={`py-2 px-3 rounded-lg border transition-all text-center ${
                      format === 'telehealth'
                        ? 'bg-[#52685A] text-[#F5F0E7] border-[#52685A]'
                        : 'bg-white text-[#29352E] border-[#26392F]/20'
                    }`}
                  >
                    Telehealth (California)
                  </button>
                </div>
              </div>

              <div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={californiaResident}
                    onChange={(e) => setCaliforniaResident(e.target.checked)}
                    className="mt-0.5 h-3.5 w-3.5 rounded text-[#52685A] focus:ring-[#52685A]"
                  />
                  <span className="text-[11px] text-[#29352E]/80 leading-tight">
                    I confirm that I am an adult resident physically located in California.
                  </span>
                </label>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#F5F0E7] bg-[#52685A] hover:bg-[#26392F] rounded transition-colors shadow-sm"
              >
                <span>Request Consultation Call</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
