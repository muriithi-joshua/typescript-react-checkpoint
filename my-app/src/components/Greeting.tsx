import React from 'react';

// Define the props interface
interface GreetingProps {
  name: string;
}

// Convert Greeting to a TypeScript functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
