# NoSQL-Social ![](https://img.shields.io/badge/license-MIT-blue)

## Description

This NoSQL-Social backend uses MongoDB due to its speed with large amounts of data, and flexibility with unstructured data. This is a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#contributions)
- [Tests](#tests)
- [Credits](#credits)
- [Questions](#questions)

## Installation

To install this package, you will gather the files from the [NoSQL-Social GitHub Respoitory by Cassandra Watson](https://github.com/cassiewatsonn/NoSQL-Social). Once you have all of the files, navigate to your terminal and input 'npm install'. This will install all the packages needed from the package.json file.

## Usage

Here is a video displaying how to application works: [NoSQL-Social Video](https://drive.google.com/file/d/1G_LUFaymvAIrMsf0j5eyzPwAQQEwlqy0/view)

After you have successfully installed the package (if you have not yet installed, please refer to [Installation](#installation)), run 'npm start' in your terminal you will get a message like this:

## ![npm start](./assets/images/npmstart.png)

This means the server is running! note: you will need the insomnia application to test the routes!

When I open API GET routes in Insomnia for users and thoughts, then the data for each of these routes is displayed in a formatted JSON. (See Below Images).

## ![User Get](./assets/images/userget.png)

## ![Thought Get](./assets/images/thoughtget.png)

When I test API POST, PUT, and DELETE routes in Insomnia, then I am able to successfully create, update, and delete users and thoughts in my database. When I test API POST and DELETE routes in Insomnia, then I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list. Please refer to [NoSQL-Social Video](https://drive.google.com/file/d/1G_LUFaymvAIrMsf0j5eyzPwAQQEwlqy0/view) to see full walk-through.

## License Description

MIT License

Copyright (c) [2023]

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
SOFTWARE.
[MIT License Link](https://choosealicense.com/licenses/mit)

## Contributions

Please contact me if you would like to contribute. You can find my information under the [Questions](#questions) section.

## Tests

N/A

## Credits

Thank you to my study partner's [Rebecca Lawrence](https://github.com/rkml14), AskBCS Staff and my tutors Eric Sayer and Jehyun Jung! Also, huge thank you to [Connor Savoy](https://github.com/Connor812) for helping me with last minute errors!

## Questions

[Cassandra Watson's GitHub Profile](https://github.com/cassiewatsonn)

For any additional questions, please contact me by email at cassiewatsonn@gmail.com !
