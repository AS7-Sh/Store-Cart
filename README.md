### Getting Started with React Vite
* The project is based on Vite to enable a faster development experience
* You can create a project using the following command:
npm create vite@latest my-react-app --template react

### Project Information
* OSOSS Frontend technical test
* 0.0.0

### How To Run The Application
* Clone this repository into your local machine
* Run (npm install or npm i) to install the project dependencies
* Run (npm run dev) and the project will be automatically available to run on your browser

### You can also visit the below link (the deployed project on netlify)
https://ososs-test.netlify.app/

### How To Build The Application
* Run (npm run build) to get the dist folder which includes the built files

### What could be done better if usage of third party libraries was allowed
* Axios: As an http library
* MUI: As a styling library
* Redux Toolkit or Zustand: As a state management library
* React Toastify: As a notifier library
* Note: The test was built from scratch without using any thrid party libraries as requested, the code is also well documented to explain the main functionality
* Note: The async request regarding purchase order isn't available in the fake Api but the whole process is well simulated

### Project Structure
* Config folder: contains the config files for the project (urls file)
* app folder: the main entry for the project
* assets folder: contains the images, fonts and any other assets if required
* common folder: contains common components with their styling
* features folder: contains the features of the application, each folder contains the components, the styling, the hooks and pages if required to maintain single responsibility pattern.

