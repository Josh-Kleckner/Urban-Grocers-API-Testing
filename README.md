Josh Kleckner
# Urban Routes Functional Testing - API Testing

## Description
This project showcases my ability to write and execute automated tests for API endpoints using GET, POST, PUT, and DELETE requests. The goal was to validate the Urban Routes API by testing key functionalities and ensuring reliable responses for each endpoint. Specifically, the tests cover:  
1. **Response Status Code:** Verifying the server responds with the expected status code.  
2. **Response Body:** Parsing and asserting that the response contains the correct data.  

As part of the project, I utilized **apiDOC** for API documentation to locate endpoints, expected request bodies, and response data. Postman was used to verify responses manually before automating tests to ensure accuracy and efficiency.  

## Key Technologies
- **Git Bash:** For creating directories, cloning the repository, and running the tests locally.  
- **VS Code:** To write and manage test scripts, organize the repository, and make configurations.  
- **apiDOC:** For referencing API endpoints and expected behavior.  
- **Postman:** To test endpoints manually for expected responses and debug API behavior.  

## Techniques Used
- Test coverage for multiple HTTP methods (GET, POST, PUT, DELETE).  
- Validation of dynamic responses using assertions in Jest.  
- Structured and modular test files to ensure maintainability and scalability.  
- Hands-on debugging and verification via Postman and apiDOC.

## Running Tests
1. Clone the repository:  
   Open your terminal and create a directory for the repository. Run the command:  
   ```bash
   git clone <repository-url>
2. Navigate to the project directory:
   ```bash
   cd ./urbanGrocersApiTesting
3. Install dependencies:
   ```bash
   npm install
4. Run tests individually:
   ```bash
   npx jest tests/deleteHandlers.test.js  
   npx jest tests/getHandlers.test.js  
   npx jest tests/postHandlers.test.js  
   npx jest tests/putHandlers.test.js
 *or*
 
5. Runall tests at once:
   ```bash
    npm test

## Conclusion
This project reflects my ability to design comprehensive test suites for APIs, utilize tools like Postman and apiDOC for manual verification, and implement automated tests with tools like Jest. It highlights my problem-solving skills, attention to detail, and commitment to ensuring software quality through robust testing practices.
