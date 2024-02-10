// __tests__/ProductGenerator.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IconDisplay from '../components/IconDisplay';

describe('IconDisplay Component', () => {
  test('renders text input and image', () => {
    render(<IconDisplay />);

    // Find the text input and image elements
    // const inputElement = screen.getByLabelText('Enter Product Idea:');
    const imageElement = screen.getByAltText('Category Icon');
    // console.log(imageElement);
    // Simulate user input
    fireEvent.change(inputElement, { target: { value: 'Sample Product Idea' } });

    // Assert that the input value is updated
    expect("inputElement.value").toBe('Sample Product Idea');

    // Assert that the image is rendered
    // expect(imageElement).toBeInTheDocument();
  });
});
