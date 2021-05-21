import React, { useEffect } from 'react';
import axios from 'axios';

const TestComponent = ({data}) => {
    useEffect(async () => {
      const data = await axios.get('http://localhost:300/products');
      console.log('this is test contructor', data);
    });

    return (
      <h3 id="test-text">This is a test component.</h3>
    )
}

export default TestComponent;