import React, { useState } from 'react';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    // You can implement your subscription logic here
    console.log(`Subscribing with email: ${email}`);
  };

  return (
    <div>
      <label htmlFor="email">Subscribe to our newsletter:</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
      />
      <button onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
};

export default EmailSubscription;
