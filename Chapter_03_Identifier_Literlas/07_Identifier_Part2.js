// LowerCase
var name = "abhishekgoswami";

// CamelCase
// Each word starts with a capital letter except the first word
var userName = "Abhishek Goswami";
var firstName = "Kensika";
var lastName = "Bekele";
var emailAddress = "test@example.com";
var isActiveUser = true;
var getUserDetails = "function name example";

// Snake_Case
// All lowercase with underscores between words
var user_name = "Abhishek Goswami";
var first_name = "Kensika";
var last_name = "Bekele";
var email_address = "test@example.com";
var is_active_user = true;
var get_user_details = "function name example";

// PascalCase
// Each word starts with a capital letter (commonly used for class names)
var UserName = "Abhishek Goswami";
var FirstName = "Kensika";
var LastName = "Bekele";

/* Naming Conventions in JavaScript:

1. camelCase (Recommended for variables and functions)
   var myVariableName = 10;
   function myFunctionName() {}

2. snake_case (Sometimes used in constants or database fields)
   var my_variable_name = 10;
   const MAX_VALUE = 100;

3. PascalCase (Recommended for classes and constructor functions)
   class MyClassName {}
   function MyConstructor() {}

4. UPPER_CASE_SNAKE_CASE (Recommended for constants)
   const PI = 3.14;
   const MAX_USERS = 100;

Best Practice: Choose one convention and be consistent in your code! */

// ============================================
// MORE EXAMPLES OF NAMING CONVENTIONS
// ============================================

// camelCase Examples (Most Common in JavaScript)
var firstName = "Abhishek";
var lastName = "Goswami";
var emailAddress = "abhishek@example.com";
var phoneNumber = "123-456-7890";
var isLoggedIn = false;
var totalPrice = 99.99;
var userProfile = { name: "Abhishek", age: 30 };
var calculateTotalAmount = "function example";
var getElementById = "DOM method example";
var currentDateTime = new Date();

// snake_case Examples (Common in Python, Ruby, SQL)
var first_name = "Kensika";
var last_name = "Bekele";
var email_address = "kensika@example.com";
var phone_number = "098-765-4321";
var is_logged_in = true;
var total_price = 149.99;
var user_profile = { name: "Kensika", age: 25 };
var calculate_total_amount = "function example";
var get_element_by_id = "DOM method example";
var current_date_time = new Date();

// PascalCase Examples (Used for Classes, Components, Constructors)
class UserProfile {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }
}

function PersonDetails(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// React Component Example (uses PascalCase)
// function UserCard() { return "Component"; }

// UPPER_SNAKE_CASE Examples (Constants, Configuration)
const PI = 3.14159;
const MAX_USERS = 100;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_TIMEOUT = 5000;
const ERROR_MESSAGE = "Something went wrong!";
const DATABASE_HOST = "localhost";
const DATABASE_PORT = 3306;

// ============================================
// COMPARISON: Same Variable in Different Cases
// ============================================

var userName = "camelCase";
var user_name = "snake_case";
var UserName = "PascalCase";
var USER_NAME = "UPPER_SNAKE_CASE";

// ============================================
// REAL-WORLD SCENARIOS
// ============================================

// E-commerce Application Variables
var productName = "Wireless Mouse";
var product_price = 29.99;
var isAvailable = true;
var stock_quantity = 150;
var customerEmail = "customer@example.com";
var orderTotal = 149.99;
var shippingAddress = "123 Main St, City, Country";

// API Response Handling
var statusCode = 200;
var responseMessage = "Success";
var isError = false;
var dataArray = [1, 2, 3, 4, 5];

// DOM Manipulation
var inputField = "user input";
var submitButton = "click me";
var errorMessage = "Invalid input";
var loadingSpinner = "loading...";

// ============================================
// JAVASCRIPT SPECIFIC CONVENTIONS
// ============================================

// Private variables (underscore prefix - convention)
var _privateVariable = "not truly private, but indicates intent";
var _count = 0;

// jQuery variables (dollar sign prefix - convention)
var $button = "jQuery element";
var $container = "jQuery container";

// Hungarian Notation (type prefix - older style)
var strName = "string";
var bIsActive = true;
var nCount = 10;
var arrUsers = [];

// ============================================
// QUIZ EXAMPLES: Identify the Case
// ============================================

var myVariableName = "camelCase";
var my_variable_name = "snake_case";
var MyVariableName = "PascalCase";
var MY_VARIABLE_NAME = "UPPER_SNAKE_CASE";
var myvariablename = "lowercase (no convention)";

// ============================================
// WHEN TO USE WHICH?
// ============================================

/* 
camelCase:
- Variables: var firstName = "John";
- Functions: function calculateTotal() {}
- Methods: obj.getUserName()

snake_case:
- Variables in some projects: var first_name = "John";
- Database fields: user_id, created_at
- Environment variables: DATABASE_URL

PascalCase:
- Classes: class UserProfile {}
- React Components: function App() {}
- Constructors: function Person() {}

UPPER_SNAKE_CASE:
- Constants: const MAX_VALUE = 100;
- Configuration: const API_KEY = "xxx";
- Enum-like values: const STATUS_ACTIVE = "active";
*/

// ============================================
// DIFFERENT TYPES OF CAMEL CASE
// ============================================

/*
CamelCase is a family of naming conventions where each word starts with a 
capital letter and words are joined together without spaces or separators.
There are two main types:
*/

// 1. lowerCamelCase (Dromedary Case)
// First letter of the FIRST word is lowercase
// First letter of EVERY SUBSEQUENT word is uppercase
// Most common in JavaScript for variables and functions
var firstName = "lowerCamelCase";
var emailAddress = "lowerCamelCase";
var getUserDetails = "lowerCamelCase";
var calculateTotalPrice = "lowerCamelCase";
var isActiveUser = "lowerCamelCase";

// 2. UpperCamelCase (Pascal Case)
// First letter of EVERY word is uppercase, including the first word
// Used for classes, constructors, and React components
var FirstName = "UpperCamelCase / PascalCase";
var EmailAddress = "UpperCamelCase / PascalCase";
var GetUserDetails = "UpperCamelCase / PascalCase";
var CalculateTotalPrice = "UpperCamelCase / PascalCase";
var IsActiveUser = "UpperCamelCase / PascalCase";

// Note: In JavaScript, we cannot declare both due to case-sensitivity,
// but here is the concept shown:
// firstName (lowerCamelCase) vs FirstName (UpperCamelCase/PascalCase)

// ============================================
// DIFFERENT TYPES OF SNAKE CASE
// ============================================

/*
Snake_case is a naming convention where words are separated by underscores (_).
There are several variations based on letter casing:
*/

// 1. snake_case (Lowercase Snake Case)
// All letters are lowercase, words separated by underscores
// Common in Python, Ruby, and database field names
var user_name = "snake_case";
var email_address = "snake_case";
var get_user_details = "snake_case";
var calculate_total_price = "snake_case";
var is_active_user = "snake_case";

// 2. SCREAMING_SNAKE_CASE (UPPER_SNAKE_CASE / MACRO_CASE / CONSTANT_CASE)
// All letters are UPPERCASE, words separated by underscores
// Used for constants, environment variables, and configuration values
var USER_NAME = "SCREAMING_SNAKE_CASE";
var EMAIL_ADDRESS = "SCREAMING_SNAKE_CASE";
var GET_USER_DETAILS = "SCREAMING_SNAKE_CASE";
var CALCULATE_TOTAL_PRICE = "SCREAMING_SNAKE_CASE";
var IS_ACTIVE_USER = "SCREAMING_SNAKE_CASE";

// Real-world constant examples
const API_KEY = "12345-abcde";
const DATABASE_URL = "postgres://localhost:5432";
const MAX_CONNECTIONS = 100;
const TIMEOUT_SECONDS = 30;

// 3. camel_Snake_Case (Mixed Snake Case)
// First word is lowercase, subsequent words start with uppercase
// Less common but seen in some codebases
var user_Name = "camel_Snake_Case";
var email_Address = "camel_Snake_Case";
var get_User_Details = "camel_Snake_Case";
var calculate_Total_Price = "camel_Snake_Case";
var is_Active_User = "camel_Snake_Case";

// 4. Pascal_Snake_Case (Title Case Snake Case)
// Every word starts with uppercase letter
// Sometimes used in file names or specific frameworks
var User_Name = "Pascal_Snake_Case";
var Email_Address = "Pascal_Snake_Case";
var Get_User_Details = "Pascal_Snake_Case";
var Calculate_Total_Price = "Pascal_Snake_Case";
var Is_Active_User = "Pascal_Snake_Case";

// ============================================
// COMPARISON: ALL TYPES SIDE BY SIDE
// ============================================

// Using the same variable name across all conventions:

// CamelCase Types:
// var userName          → lowerCamelCase (dromedaryCase)
// var UserName          → UpperCamelCase (PascalCase)

// Snake_case Types:
// var user_name         → snake_case (lowercase)
// var USER_NAME         → SCREAMING_SNAKE_CASE (uppercase)
// var user_Name         → camel_Snake_Case (mixed)
// var User_Name         → Pascal_Snake_Case (title case)

// ============================================
// SUMMARY TABLE
// ============================================

/*
| Convention          | Example            | First Letter | Separators | Use Case                    |
|---------------------|--------------------|--------------|------------|-----------------------------|
| lowerCamelCase      | userName           | Lower        | None       | JS variables, functions     |
| UpperCamelCase      | UserName           | Upper        | None       | JS classes, React components|
| snake_case          | user_name          | Lower        | _          | Python, databases           |
| SCREAMING_SNAKE_CASE| USER_NAME          | Upper        | _          | Constants, env variables    |
| camel_Snake_Case    | user_Name          | Lower        | _          | Rare, mixed style           |
| Pascal_Snake_Case   | User_Name          | Upper        | _          | File names, some frameworks |
| kebab-case          | user-name          | Lower        | -          | CSS classes, URLs, HTML ids |
| Train-Case          | User-Name          | Upper        | -          | HTTP headers, titles        |

Note: kebab-case and Train-Case use hyphens (-) instead of underscores (_).
They are valid in CSS and HTML but NOT in JavaScript variable names!
*/

// ============================================
// REAL-WORLD FRAMEWORK EXAMPLES
// ============================================

// React / JavaScript:
// Component names → PascalCase: UserProfile, LoginButton
// Variables       → camelCase:  userName, isLoading
// Constants       → UPPER_SNAKE_CASE: API_URL, MAX_RETRIES

// Python:
// Variables       → snake_case: user_name, is_loading
// Constants       → SCREAMING_SNAKE_CASE: MAX_SIZE, DEFAULT_TIMEOUT
// Classes         → PascalCase: UserProfile, ShoppingCart

// CSS / HTML:
// Class names     → kebab-case: user-name, is-loading
// IDs             → camelCase or kebab-case: userName, user-name

// Database:
// Table names     → snake_case: user_profiles, order_items
// Column names    → snake_case: first_name, created_at

// ============================================
// EXERCISE: Convert Between Cases
// ============================================

// Convert these to camelCase:
// user_name → userName
// email_address → emailAddress
// phone_number → phoneNumber

// Convert these to snake_case:
// userName → user_name
// emailAddress → email_address
// phoneNumber → phone_number

// Convert these to PascalCase:
// user_name → UserName
// email_address → EmailAddress
// phone_number → PhoneNumber

// Convert these to SCREAMING_SNAKE_CASE:
// userName → USER_NAME
// emailAddress → EMAIL_ADDRESS
// phoneNumber → PHONE_NUMBER

// ============================================
// DETAILED TYPES OF CAMEL CASE AND SNAKE CASE
// ============================================

/*
Below is a comprehensive breakdown of ALL recognized camelCase and snake_case 
variations with detailed explanations and real-world examples.
*/

// ============================================
// CAMEL CASE VARIATIONS
// ============================================

// 1. Dromedary Case (lowerCamelCase)
//    - First word: all lowercase
//    - Subsequent words: capitalized
//    - Most common in JavaScript, Java, C#
var firstName = "Abhishek";
var lastName = "Goswami";
var emailAddress = "test@example.com";
var phoneNumber = "123-456-7890";
var isActiveUser = true;
var getUserDetails = "function example";
var calculateTotalPrice = 99.99;
var createNewAccount = "action example";

// 2. Pascal Case (UpperCamelCase)
//    - Every word starts with uppercase
//    - Used for class names, constructors, React components
class UserProfile {}
class ShoppingCart {}
class OrderDetails {}
class PaymentGateway {}
function CustomerData() {}
function ProductInformation() {}

// 3. Mixed CamelCase (rare, not recommended)
//    - Sometimes seen in legacy code
//    - Mixing styles inconsistently
//    - Avoid this in production code!
//    Example: userNAME, firstNAME (inconsistent capitalization)

// ============================================
// SNAKE CASE VARIATIONS
// ============================================

// 1. Flat Case (lowercase snake_case)
//    - All lowercase
//    - Words separated by underscores
//    - Common in Python, Ruby, SQL, PHP
var user_name = "Abhishek";
var first_name = "Kensika";
var last_name = "Bekele";
var email_address = "test@example.com";
var phone_number = "123-456-7890";
var is_active_user = true;
var get_user_details = "function example";
var calculate_total_price = 99.99;
var create_new_account = "action example";

// 2. CONSTANT_CASE / MACRO_CASE / SCREAMING_SNAKE_CASE
//    - All uppercase
//    - Words separated by underscores
//    - Used for constants, environment variables, configuration
const MAX_USERS = 100;
const API_BASE_URL = "https://api.example.com";
const DATABASE_HOST = "localhost";
const DATABASE_PORT = 3306;
const DEFAULT_TIMEOUT = 5000;
const ERROR_MESSAGE = "Something went wrong!";
const PI_VALUE = 3.14159;
const MAX_RETRY_ATTEMPTS = 3;
const ENVIRONMENT_MODE = "production";

// 3. camel_Snake_Case (Mixed)
//    - First word: lowercase
//    - Subsequent words: capitalized, separated by underscores
//    - Rare, but found in some codebases
var user_Name = "mixed style";
var first_Name = "mixed style";
var email_Address = "mixed style";
var get_User_Details = "mixed style";
var calculate_Total_Price = "mixed style";

// 4. Pascal_Snake_Case (Title Case)
//    - Every word starts with uppercase
//    - Words separated by underscores
//    - Sometimes used in file names, constants
var User_Name = "title case snake";
var First_Name = "title case snake";
var Email_Address = "title case snake";
var Get_User_Details = "title case snake";
var Calculate_Total_Price = "title case snake";

// ============================================
// ADDITIONAL HYPHEN-SEPARATED CASES (For Reference)
// ============================================

// These use hyphens (-) instead of underscores
// NOT valid in JavaScript variable names, but used in HTML/CSS

// 1. kebab-case (lisp-case, spinal-case, dash-case)
//    - All lowercase
//    - Words separated by hyphens
//    - Used in CSS classes, HTML IDs, URLs
//    Example CSS: .user-name { color: red; }
//    Example HTML: <div id="user-name"></div>
//    Example URL: https://example.com/user-profile

// 2. TRAIN-CASE (HTTP-Header-Case)
//    - Every word starts with uppercase
//    - Words separated by hyphens
//    - Used in HTTP headers
//    Example: Content-Type, Accept-Encoding, X-Custom-Header

// ============================================
// COMPREHENSIVE COMPARISON TABLE
// ============================================

/*
| Convention          | Example              | Separator | First Word | Usage                      |
|---------------------|----------------------|-----------|------------|----------------------------|
| camelCase           | userName             | None      | Lower      | JS variables, functions    |
| PascalCase          | UserName             | None      | Upper      | JS classes, components     |
| snake_case          | user_name            | _         | Lower      | Python, Ruby, SQL          |
| SCREAMING_SNAKE_CASE| USER_NAME            | _         | Upper      | Constants, env vars        |
| camel_Snake_Case    | user_Name            | _         | Lower      | Rare mixed style           |
| Pascal_Snake_Case   | User_Name            | _         | Upper      | File names, some langs     |
| kebab-case          | user-name            | -         | Lower      | CSS, HTML, URLs            |
| TRAIN-CASE          | User-Name            | -         | Upper      | HTTP headers               |
*/

// ============================================
// PRACTICAL EXAMPLES: SAME WORD IN ALL CASES
// ============================================

// Word: "get user details"
// camelCase:           getUserDetails
// PascalCase:          GetUserDetails
// snake_case:          get_user_details
// SCREAMING_SNAKE_CASE:GET_USER_DETAILS
// camel_Snake_Case:    get_User_Details
// Pascal_Snake_Case:   Get_User_Details
// kebab-case:          get-user-details
// TRAIN-CASE:          Get-User-Details

// Word: "first name"
// camelCase:           firstName
// PascalCase:          FirstName
// snake_case:          first_name
// SCREAMING_SNAKE_CASE:FIRST_NAME
// camel_Snake_Case:    first_Name
// Pascal_Snake_Case:   First_Name
// kebab-case:          first-name
// TRAIN-CASE:          First-Name

// Word: "email address"
// camelCase:           emailAddress
// PascalCase:          EmailAddress
// snake_case:          email_address
// SCREAMING_SNAKE_CASE:EMAIL_ADDRESS
// camel_Snake_Case:    email_Address
// Pascal_Snake_Case:   Email_Address
// kebab-case:          email-address
// TRAIN-CASE:          Email-Address

// ============================================
// INDUSTRY STANDARDS BY LANGUAGE/FRAMEWORK
// ============================================

// JavaScript / TypeScript:
// - Variables:       camelCase       → let userName = "John"
// - Functions:       camelCase       → function getData() {}
// - Classes:         PascalCase      → class UserProfile {}
// - Constants:       UPPER_SNAKE_CASE → const MAX_COUNT = 10
// - Private members: _camelCase      → this._internalValue
// - React Components: PascalCase     → function UserCard() {}

// Python:
// - Variables:       snake_case      → user_name = "John"
// - Functions:       snake_case      → def get_data():
// - Classes:         PascalCase      → class UserProfile:
// - Constants:       SCREAMING_SNAKE_CASE → MAX_COUNT = 10
// - Private members: _snake_case     → self._internal_value
// - Dunder methods:  __snake_case__  → def __init__(self):

// Java:
// - Variables:       camelCase       → String userName = "John"
// - Functions:       camelCase       → public void getData() {}
// - Classes:         PascalCase      → public class UserProfile {}
// - Constants:       UPPER_SNAKE_CASE → public static final int MAX_COUNT = 10

// CSS / HTML:
// - Classes:         kebab-case      → .user-profile { }
// - IDs:             kebab-case      → #user-profile
// - Custom attributes: kebab-case    → data-user-id

// SQL / Databases:
// - Tables:          snake_case      → user_profiles
// - Columns:         snake_case      → first_name, created_at
// - Constraints:     snake_case      → pk_user_id

// REST APIs / JSON:
// - Keys:            camelCase or snake_case (depends on convention)
// - Headers:         TRAIN-CASE      → Content-Type, Authorization

// ============================================
// ADVANCED: MULTI-WORD CONVERSION EXAMPLES
// ============================================

// Input: "this is a long variable name"
// camelCase:           thisIsALongVariableName
// PascalCase:          ThisIsALongVariableName
// snake_case:          this_is_a_long_variable_name
// SCREAMING_SNAKE_CASE:THIS_IS_A_LONG_VARIABLE_NAME
// camel_Snake_Case:    this_Is_A_Long_Variable_Name
// Pascal_Snake_Case:   This_Is_A_Long_Variable_Name
// kebab-case:          this-is-a-long-variable-name
// TRAIN-CASE:          This-Is-A-Long-Variable-Name

// Input: "HTTP response status code"
// camelCase:           httpResponseStatusCode
// PascalCase:          HttpResponseStatusCode
// snake_case:          http_response_status_code
// SCREAMING_SNAKE_CASE:HTTP_RESPONSE_STATUS_CODE
// camel_Snake_Case:    http_Response_Status_Code
// Pascal_Snake_Case:   Http_Response_Status_Code
// kebab-case:          http-response-status-code
// TRAIN-CASE:          Http-Response-Status-Code

// Input: "XML HTTP request"
// camelCase:           xmlHttpRequest
// PascalCase:          XmlHttpRequest
// snake_case:          xml_http_request
// SCREAMING_SNAKE_CASE:XML_HTTP_REQUEST
// camel_Snake_Case:    xml_Http_Request
// Pascal_Snake_Case:   Xml_Http_Request
// kebab-case:          xml-http-request
// TRAIN-CASE:          Xml-Http-Request

// ============================================
// BEST PRACTICES SUMMARY
// ============================================

/*
1. Be CONSISTENT within a project
2. Follow language/framework conventions:
   - JavaScript: camelCase for variables/functions, PascalCase for classes
   - Python: snake_case for variables/functions, PascalCase for classes
   - CSS: kebab-case for classes/IDs
3. Use UPPER_SNAKE_CASE for true constants
4. Avoid mixing conventions in the same scope
5. Choose descriptive names over short abbreviations
6. Be mindful of case sensitivity in JavaScript
*/

console.log("Naming conventions loaded successfully!");
console.log("Practice converting between camelCase, snake_case, and PascalCase!");
