# Sauce Demo E2E Test Project 

## Table of Contents
* [About the Project](#about-the-project)
    *  [What is Sauce Demo?](#what-is-sauce-demo)
* [Why This Project](#why-this-project)
    * [Manual Testing Skills](#manual-testing-skills)
    * [Automation Skills](#automation-skills)
    * [QA Best Practices](#qa-best-practices)
    * [Technical Skills](#technical-skills)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
* [Running Tests](#running-tests) 
    * [Run all tests](#run-all-tests)
    * [Run specific test file](#run-specific-test-file)
    * [Run tests in headed mode (see browser)](#run-tests-in-headed-mode-see-browser)
    * [Run tests in debug mode](#run-tests-in-debug-mode)
    * [Run tests with UI mode](#run-tests-with-ui-mode)
* [Test Reports](#test-reports)
    * [View HTML report](#view-html-report)
* [CI/CD](#cicd)
* [TODO](#todo)
* [Done](#done)
* [Author](#author)

## About the Project
The project will demonstrate QA Engineering skills using [Sauce Demo](https://www.saucedemo.com/) page with modern tools.  Build with TypeScript, use Playwright for tests and Github Actions for CI/CD.

### What is Sauce Demo?

Sauce Demo is a sample e-commerce web application created by Sauce Labs specifically for testing practice. It simulates a real online store with features like:

* User authentication
* Product catalog
* Shopping cart
* Checkout process

# Why This Project
This portfolio project was created to demonstrate:

### Manual Testing Skills

* Writing comprehensive test scenarios and test cases
* Understanding testing methodologies

### Automation Skills

* Building scalable test automation frameworks
* Implementing Page Object Model (POM) design pattern
* Writing maintainable and readable test code

### QA Best Practices

* Separating test logic from test data
* Generating professional test reports
* Integrating tests with CI/CD pipelines

### Technical Skills

* TypeScript/JavaScript proficiency
* Modern testing tools (Playwright)
* Version control with Git/GitHub

# Tech Stack
|Technology|Purpose|
|----------|-------|
|Playwright|Browser automation framework|
|TypeScript|Programming language|
|Node.js|Runtime environment|
|GitHub Actions| CI/CD pipeline|

# Project Structure
```
SAUCE-DEMO-QA/
├── 📁 .github/workflows/
│   └── playwright.yml
|
├── 📁 docs/    
|   |────  📁 test-cases/
|   |       │──── TC-AUTH-001:valid-login-credentials
|   |       │──── TC-AUTH-002:invalid-password
|   |       |──── TC-AUTH-003:empty-field
|   |       |──── TC-AUTH-004:locked-account
|   |       |──── TC-SHOP-005:sort-by-name(A-Z)
|   |       |──── TC-SHOP-006:sort-by-name(Z-A)
|   |       |──── TC-SHOP-007:sort-low-to-high
|   |       |──── TC-SHOP-008:sort-high-to-low
|   |       |──── TC-SHOP-009:add-one-product-into-empty-cart  
|   |       |──── TC-SHOP-010:add-multiple-product-into-cart
|   |       |──── TC-SHOP-011:add-all-product-into-cart
|   |       |──── TC-SHOP-012:navigate-to-cart-with-products  
|   |       |──── TC-SHOP-013:navigate-to-cart-without-products
|   |       |──── TC-SHOP-014:remove-product-from-cart
|   |       |──── TC-SHOP-015:remove-all-products-from-cart  
|   |       |──── TC-SHOP-016:click-continue-shopping-button
|   |       |──── TC-SHOP-017:create-checkout-process-with-products-and-correct-data 
|   |       |──── TC-SHOP-018:create-checkout-process-with-products-and-empty-first-name  
|   |       |──── TC-SHOP-019:create-checkout-process-with-products-and-empty-last-name 
|   |       |──── TC-SHOP-020:create-checkout-process-with-products-and-empty-postal-code 
|   |       |──── TC-SHOP-021:create-checkout-process-with-products-and-incorrect-data 
|   |       |──── TC-SHOP-022:create-checkout-process-without-products                  
|   │       └──── TC-SHOP-023:cancel-checkout-process    
|   |────  📁 test-scenarios/
|   |       │──── TS-AUTH-001-user-login-process.md
|   |       │──── TS-SHOP-001-sorting-product.md
|   |       |──── TS-SHOP-002-adding-product.md 
|   |       |──── TS-SHOP-003-shopping-cart-functions.md                
|   │       └──── TS-SHOP-004-checkout-process.md                                  
│   ├── TEST_SCENARIOS.md          
│   ├── TEST_CASES.md              
│   └── TEST_PLAN.md
|   
├── 📁 src/  
├── 📁 tests/
|   |──── 📁 pages/
|   |       |──── BasePage.ts              
|   |       │──── CheckoutPage.ts
|   |       │──── InventoryPage.ts
|   |       |──── LoginPage.ts                
|   │       └──── ShoppingPage.ts                        
│   |
|   ├── adding-products.spec.ts              
│   ├── checkout-process.spec.ts          
│   ├── login.spec.ts               
│   ├── shopping-cart.spec.ts           
│   └── sorting-products.spec.ts                
|         
├── .gitignore 
├── package-lock.json   
├── package.json   
├── playwright.config.ts                                         
└── README.md                   
```
# Getting Started

### Prerequisites:

* Node.js
* Git

### Installation

1. Clone the repository
```sh 
git clone https://github.com/LamberM/Sauce-Demo-QA.git
```
2. Install dependencies
```sh 
npm install 
```
3. Install Playwright browsers
```sh 
npx playwright install
```

# Running Tests
### Run all tests
```sh 
npm test
```
### Run specific test file
**For example:**
```
npx playwright test adding-products.spec.ts
```
**Instead of adding-products.spec.ts u may use other name test**
### Run tests in headed mode (see browser)
```sh 
npx playwright test --headed
```
### Run tests in specific browser
```sh 
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```
### Run tests in debug mode
```sh 
npx playwright test --debug
```
### Run tests with UI mode
```sh 
npx playwright test --ui
```
# Test Reports
### View HTML report
```sh 
npx playwright show-report
```
# CI/CD
**This project includes GitHub Actions workflow that automatically:**

* Runs all tests on every push/pull request
* Tests across multiple browsers (Chromium, Firefox)
* Generates and uploads test reports
* Notifies about test failures

**Workflow runs on:** 

* Push to main,develop branches
* Pull requests
# TODO
# Done
* Test Plan
* Test Scenarios
* Test Case 
* Create POM
* Create tests
* Finish [Run specific test file](#run-specific-test-file)
* Finish [Project Structure](#project-structure)
* Changes in CI/CD configs
# Author
**Marcin Lamberski**
 * [LinkedIn](https://www.linkedin.com/in/marcin-lamberski-067599240/) 
 * [Github](https://github.com/LamberM)
