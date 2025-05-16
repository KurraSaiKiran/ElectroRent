# Firestore Security Rules

These are the security rules for the ElectroRental Firestore database. They control access to different collections and documents in the database.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to all users for all documents
    match /{document=**} {
      allow read, write: if true;
    }
    
    // For production, you'll want more specific rules like:
    match /contactMessages/{messageId} {
      allow create: if request.resource.data.keys().hasAll(['name', 'email', 'message']);
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

## Current Rules Overview

### Development Mode
- Currently, the rules are configured for development mode, allowing all reads and writes to any document.
- This is convenient for development but should not be used in production.

### Production-Ready Rules (Commented)
- For the `contactMessages` collection:
  - Anyone can create a new message if it contains the required fields (`name`, `email`, `message`)
  - Only authenticated users can read, update, or delete messages

## Production Deployment

Before deploying to production, you should:

1. Remove the wide-open rule (`allow read, write: if true;`)
2. Uncomment and adapt the more specific rules for each collection
3. Add additional rules for the `bookings` collection
4. Deploy the rules using the Firebase CLI:

```bash
firebase deploy --only firestore:rules
```

## Recommended Additional Rules

For the `bookings` collection, consider adding rules like:

```
match /bookings/{bookingId} {
  // Anyone can create a booking with the required fields
  allow create: if request.resource.data.keys().hasAll(['items', 'customerDetails', 'status', 'createdAt']);
  
  // Only authenticated users can read all bookings (for admins)
  allow read: if request.auth != null;
  
  // Or implement user-specific booking access:
  // allow read: if request.auth != null && 
  //             request.auth.uid == resource.data.customerDetails.userId;
}
```
