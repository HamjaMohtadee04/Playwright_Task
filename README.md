# SauceDemo Playwright Automation

This is a simple Playwright project that automates the following scenario on [SauceDemo](https://www.saucedemo.com/):

1. Login with valid credentials  
2. Add a product to the cart  
3. Verify the product in the cart  
4. Logout  

All steps run **step by step in a single Chrome tab**.

---

## Prerequisites

- Node.js (v18 or later)
- npm (comes with Node.js)
- Google Chrome installed

---

## Setup

1. Clone this repository:

```bash
git clone https://github.com/HamjaMohtadee04/Playwright_Task.git
cd Playwright_Task
```
2. Install dependencies:
```
npm install

```

3. Install Playwright browsers:
```
npx playwright install 

```
4. Run Tests
Run in headed mode (see the browser):
```
npx playwright test --headed

```

5. Generate HTML Report

After running tests, generate and open the HTML report:
```
npx playwright show-report

```