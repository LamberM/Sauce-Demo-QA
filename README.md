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
```
```
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
* Tests across multiple browsers (Chromium, Firefox, WebKit)
* Generates and uploads test reports
* Notifies about test failures

**Workflow runs on:** 

* Push to main branch
* Pull requests
# TODO
* Test Case 
* Look at CI/CD conf and possibly make changes
* Create tests
* Finish [Run specific test file](#run-specific-test-file)
* Finish [Project Structure](#project-structure)
# Done
* Test Plan
* Test Scenarios
# Author
**Marcin Lamberski**
 * [LinkedIn](https://www.linkedin.com/in/marcin-lamberski-067599240/) 
 * [Github](https://github.com/LamberM)
