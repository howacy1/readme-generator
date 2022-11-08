// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const getLicense = (data) => {
  if (!data.license) {
    return ''
  }
  else if (data.license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (data.license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (data.license === 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const getLink = (data) => {
  if (!data.license) {
    return ''
  } else if (data.license === 'MIT') {
    return '[MIT](https://choosealicense.com/licenses/mit/)';
  } else if (data.license === 'Apache 2.0') {
    return '[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)';
  } else if (data.license === 'Unlicense') {
    return '[Unlicense](https://choosealicense.com/licenses/unlicense/)';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const getSection = (data) => {
  if (!data.license) {
    return ''
  } else if (data.license === 'MIT') {
    return ` Copyright (c) 2022 Cy Howard
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.; `
  } else if (data.license === 'Apache 2.0') {
    return ` Copyright 2022 Cy Howard
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
        http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions `;
  } else if (data.license === 'Unlicense') {
    return ` This is free and unencumbered software released into the public domain.
    Anyone is free to copy, modify, publish, use, compile, sell, or
    distribute this software, either in source code form or as a compiled
    binary, for any purpose, commercial or non-commercial, and by any
    means.
    
    In jurisdictions that recognize copyright laws, the author or authors
    of this software dedicate any and all copyright interest in the
    software to the public domain. We make this dedication for the benefit
    of the public at large and to the detriment of our heirs and
    successors. We intend this dedication to be an overt act of
    relinquishment in perpetuity of all present and future rights to this
    software under copyright law.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
    
    For more information, please refer to <https://unlicense.org> `;
  };
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}

[![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer) ${getLicense(data)}

#### ${data.description}

## Table of Contents
- [Installation Usage](#installation-usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation Usage

${data.installation}

## Contributing

${data.contributor}

## Tests

${data.test}

## Questions?

### Feel Free to Contact me with any other questions!

- [GitHub Profile](https://github.com/${data.username})

- [Email Me!](https://mail.google.com/mail/u/0/?fs=1&to=${data.email}&tf=cm)

## License

${getLink(data)}

${getSection(data)}

  `;
}


module.exports = { generateMarkdown };
