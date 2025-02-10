import React from 'react';

function FAQCard({ question, answer }) {
  return (
    <div className="book">
      <div className="cover">
        <p>{question}</p>
      </div>
      {/* You can add content for the inside of the book (back side) here if needed */}
    </div>
  );
}

export default FAQCard;
```
