## Spectre Chat

Spectre Chat is an anonymous messaging application built using Next.js, MongoDB, Shadcn, Resend, Zod, and Axios. The app ensures a smooth user experience, robust data security, and high performance. It allows users to chat anonymously while securing user data and messages.

## Features

- Anonymous Messaging: Users can send and receive messages without revealing their identities.
- User Authentication: Secure login and registration functionality using Next Auth.
- Email Functionality: Email notifications and verifications using Resend.
- Data Security: Secure storage of user data and messages in MongoDB.
- Input Validation: Robust validation of inputs using Zod.
- High Performance: Optimized for a smooth and fast user experience.

## Tech Stack

- Frontend: Next.js, React.js
- Backend: Next.js, API Routes
- Database: MongoDB
- Validation: Zod
- HTTP Client: Axios
- Email: Resend
- Authentication: Next Auth

# Getting Started

### Prerequisites

- Node.js (>= 14.x)
- MongoDB instance
- Resend API key for email functionality

## Challenges Faced

- Implementing Secure Authentication:

  - Ensuring user authentication was secure and seamless was a challenge. Next Auth provided a robust solution for this, but integrating it with MongoDB required careful handling of sessions and tokens.

- Data Validation:

  - Ensuring all user inputs were valid and secure was critical. Zod made this easier, but designing comprehensive validation schemas required thorough testing and iteration.

- Email Functionality:

  - Implementing email notifications and verifications using Resend involved configuring API keys and handling asynchronous requests efficiently.

- Database Performance:

  - Ensuring MongoDB operations were optimized for performance was crucial, especially for real-time messaging. Indexing and query optimization were key focus areas.

## Future Enhancements

- Real-time Messaging: Implement WebSockets for real-time message updates.
- User Profiles: Add user profiles with customizable settings.
- Message Encryption: Enhance security by adding end-to-end encryption for messages.
- Improved UI: Continuously improve the user interface for a better user experience.
- Contributing
- Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
