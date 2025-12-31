# Test Scenario: TS-AUTH-001
## Title: User Login Process
**Module:** Authentication

**Priority:** High

**Created by:** Marcin Lamberski

**Date:** 2025-12-31

**Last updated:** 2025-12-31

## Description:
Verify that users can successfully log into the site using valid credentials

## Preconditions:
- User account exists in database
- User is not logged in
- Application is accessible

## Related Test Cases:
- TC-AUTH-001: Valid login credentials
- TC-AUTH-002: Invalid password
- TC-AUTH-003: Empty fields
- TC-AUTH-004: Locked account

## Dependencies:
- Database must be available

## Test Data Requirements:
- Valid test user accounts
- Invalid credentials set
- Locked account examples