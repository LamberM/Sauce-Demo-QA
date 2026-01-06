# Test Scenario: TS-SHOP-004
## Title: Checkout process
**Module:** Shopping

**Priority:** High

**Created by:** Marcin Lamberski

**Date:** 2025-12-31

**Last updated:** 2025-01-06

## Description:
Verify the users will checkout their order 

## Preconditions:
- Products exists database
- Shopping cart is available
- Checkout process is available
- Application is accessible

## Related Test Cases:
- TC-SHOP-017: Create checkout process with products and correct data
- TC-SHOP-018: Create checkout process with products and empty first name
- TC-SHOP-019: Create checkout process with products and empty last name
- TC-SHOP-020: Create checkout process with products and empty postal code
- TC-SHOP-021: Create checkout process with products and incorrect data
- TC-SHOP-022: Create checkout process without products
- TC-SHOP-023: Cancel checkout process

## Dependencies:
- Database must be available

## Test Data Requirements:
- Products active in the site 
- Shopping cart page is working
- Checkout process page is working