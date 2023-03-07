import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import CodePreview from '../components/CodePreview/CodePreview';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  codepreview: CodePreview,
};