## Unifatecie -  Curso: Bach. Sistema de Informação 4º Período 

### Explaining the project and providing a step-by-step guide:

**Consulta CEP - Brazilian Postal Code Lookup**

This project provides a simple web application to search for addresses based on a Brazilian CEP (postal code). It utilizes HTML, CSS, and JavaScript to fetch data from the ViaCEP API ([https://viacep.com.br/](https://viacep.com.br/)) and display the corresponding address details.

**Features:**

- User enters a CEP in the input field.
- "Buscar" (Search) button triggers the search.
- Valid CEP results in displaying address details like state, city, neighborhood, and street.
- Invalid CEP displays an error message.

**Getting Started**

1. **Project Structure:**
   - Create three separate files:
     - `index.html`: Contains the main HTML structure.
     - `styles/index.css`: Defines the styles for the application.
     - `scripts/index.js`: Implements the JavaScript logic for user interaction and data fetching.

2. **Dependencies:**
   - The code uses the ViaCEP API to retrieve address information. You don't need to install any external libraries.

3. **Running Locally:**
   - Open `index.html` in your web browser. This should launch the application if your system is configured to handle HTML files.
   - Alternatively, use a local server like Live Server ([https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)) for more control and testing functionality.

**Testing:**

1. Enter a valid CEP in the input field (e.g., 01000000).
2. Click the "Buscar" (Search) button.
3. The address details for the CEP should be displayed below the input field.
4. Try entering an invalid CEP (e.g., 12345678).
5. An error message indicating "CEP inválido" (Invalid CEP) should appear.

**Deployment (Optional):**

1. **Create a GitHub Account:** Sign up for a free account at [https://github.com/](https://github.com/).
2. **Create a New Repository:** Follow the instructions on GitHub to create a new repository and upload your project files (index.html, styles/index.css, and scripts/index.js).

**Additional Notes:**

- Consider using a code editor like Visual Studio Code ([https://code.visualstudio.com/](https://code.visualstudio.com/)) for easier development and Git integration.
- Explore error handling for user input beyond just CEP format.
- Add comments in your code to explain what each section does.
- For more advanced features, consider using a JavaScript framework like React or Vue.js.

I hope this README provides a clear explanation of your project and helps you get started!

Figma: https://www.figma.com/design/g8gJow9BcryB5CPjAVzrrS/Fatecie---Aula-01?node-id=0%3A1&t=bnzvyVJXlLFjQwki-1

Google Fonts: https://fonts.google.com/

### Professor: Victor Kamei Kay
### Student: Alexsandra Tavares
