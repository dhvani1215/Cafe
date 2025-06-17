
import React, { useState } from 'react';
import { Calendar, Clock, Users, User } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface ReservationDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationDialog: React.FC<ReservationDialogProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate reservation submission
    toast({
      title: "Reservation Confirmed!",
      description: `Table for ${formData.guests} on ${formData.date} at ${formData.time}`,
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: ''
    });
    
    onClose();
  };

  const timeSlots = [
    "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM",
    "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM",
    "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-coffee-800 flex items-center">
            <Calendar className="h-6 w-6 mr-2" />
            Reserve a Table
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-coffee-700 font-medium mb-2">
              <User className="h-4 w-4 inline mr-1" />
              Full Name
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
              className="border-coffee-200 focus:border-coffee-600"
            />
          </div>

          <div>
            <label className="block text-coffee-700 font-medium mb-2">Email</label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              className="border-coffee-200 focus:border-coffee-600"
            />
          </div>

          <div>
            <label className="block text-coffee-700 font-medium mb-2">Phone</label>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              required
              className="border-coffee-200 focus:border-coffee-600"
            />
          </div>

          <div>
            <label className="block text-coffee-700 font-medium mb-2">
              <Calendar className="h-4 w-4 inline mr-1" />
              Date
            </label>
            <Input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              className="border-coffee-200 focus:border-coffee-600"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div>
            <label className="block text-coffee-700 font-medium mb-2">
              <Clock className="h-4 w-4 inline mr-1" />
              Time
            </label>
            <Select value={formData.time} onValueChange={(value) => handleSelectChange('time', value)}>
              <SelectTrigger className="border-coffee-200 focus:border-coffee-600">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>{time}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-coffee-700 font-medium mb-2">
              <Users className="h-4 w-4 inline mr-1" />
              Number of Guests
            </label>
            <Select value={formData.guests} onValueChange={(value) => handleSelectChange('guests', value)}>
              <SelectTrigger className="border-coffee-200 focus:border-coffee-600">
                <SelectValue placeholder="Select guests" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full bg-coffee-600 hover:bg-coffee-700 text-white py-3 text-lg font-semibold transition-all duration-300"
          >
            Confirm Reservation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationDialog;
