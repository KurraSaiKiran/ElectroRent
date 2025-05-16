import { v4 as uuidv4 } from 'uuid';
import { BookingDetails, CartItem, Contact } from '../types';
import { db } from '../firebase/config';
import { 
  collection, 
  addDoc, 
  getDocs, 
  Timestamp, 
  query, 
  orderBy 
} from 'firebase/firestore';

// Firestore collection names
const COLLECTION_NAMES = {
  BOOKINGS: 'bookings',
  CONTACTS: 'contactMessages',
};

// Contact form submission
export const submitContactForm = async (contactData: Contact): Promise<Contact> => {
  try {
    // Create a new contact document with timestamp
    const newContact = {
      ...contactData,
      createdAt: Timestamp.now()
    };
    
    // Add document to Firestore
    const docRef = await addDoc(collection(db, COLLECTION_NAMES.CONTACTS), newContact);
    
    return {
      ...newContact,
      id: docRef.id
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw new Error("Failed to submit contact form. Please try again.");
  }
};

// Booking submission
export const submitBooking = async (
  items: CartItem[],
  customerDetails: BookingDetails
): Promise<{ bookingId: string }> => {
  try {
    // Create a new booking document
    const newBooking = {
      items,
      customerDetails,
      status: 'confirmed',
      createdAt: Timestamp.now()
    };
    
    // Add document to Firestore
    const docRef = await addDoc(collection(db, COLLECTION_NAMES.BOOKINGS), newBooking);
    
    return { bookingId: docRef.id };
  } catch (error) {
    console.error("Error submitting booking:", error);
    throw new Error("Failed to submit booking. Please try again.");
  }
};

// Get all bookings (for admin purposes)
export const getBookings = async () => {
  try {
    const bookingsQuery = query(
      collection(db, COLLECTION_NAMES.BOOKINGS),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(bookingsQuery);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw new Error("Failed to fetch bookings. Please try again.");
  }
};

// Get all contacts (for admin purposes)
export const getContacts = async () => {
  try {
    const contactsQuery = query(
      collection(db, COLLECTION_NAMES.CONTACTS),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(contactsQuery);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw new Error("Failed to fetch contacts. Please try again.");
  }
};
