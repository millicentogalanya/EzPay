# Contributing to EzPay

Thank you for your interest in contributing to **EzPay**.

For an overview of the project, see [`README.md`](README.md).

We welcome contributions from developers, designers, blockchain enthusiasts, and anyone interested in improving open financial infrastructure.

## Contents

- [Ways to Contribute](#ways-to-contribute)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Branching Strategy](#branching-strategy)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Code Style Guidelines](#code-style-guidelines)
- [Writing Tests](#writing-tests)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)
- [Community Guidelines](#community-guidelines)
- [License](#license)

## Ways to Contribute

You can contribute to EzPay in several ways:

- Fixing bugs
- Improving documentation
- Implementing new features
- Improving payment flows
- Enhancing developer experience
- Writing tests
- Improving UI/UX (for future frontend modules)

Before starting major work, please open an issue to discuss your idea.

## Development Setup

Follow these steps to set up the project locally.

### 1. Fork the Repository

Click the **Fork** button on GitHub to create your own copy of the repository.

### 2. Clone Your Fork

```bash
git clone https://github.com/your-username/ezpay.git
cd ezpay
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Copy the environment template:

```bash
cp .env.example .env
```

Update the `.env` file with your local configuration.

Example:

```
STELLAR_NETWORK=testnet
STELLAR_RPC_URL=
STELLAR_SECRET_KEY=
OFFRAMP_API_KEY=
DATABASE_URL=
```

### 5. Run the Development Server

```bash
npm run dev
```

## Project Structure

```
src/
 ├── config/        # Configuration files
 ├── controllers/   # Request handlers
 ├── services/      # Business logic
 ├── routes/        # API routes
 ├── models/        # Database models
 ├── middleware/    # Express middleware
 ├── utils/         # Helper functions
 └── app.ts         # App entry point
```

## Branching Strategy

Use clear and descriptive branch names.

Examples:

```
feature/payment-flow
feature/offramp-integration
fix/stellar-transaction-error
docs/readme-update
```

Avoid committing directly to the `main` branch.

## Commit Message Guidelines

Write clear and meaningful commit messages.

Use the following style when possible:

```
feat: add merchant wallet payment flow
fix: resolve stellar transaction validation error
docs: update README with architecture details
refactor: simplify payment service logic
test: add payment service unit tests
```

This helps maintain a readable project history.

## Pull Request Process

When submitting a pull request:

1. Create a feature branch
2. Implement your changes
3. Test your implementation
4. Commit with clear messages
5. Push to your fork
6. Open a Pull Request

Your PR should include:

- A clear description of the change
- Screenshots (if UI changes are included)
- Steps to test the feature or fix
- Related issue (if applicable)

Example:

```
Fixes #12
Adds validation for merchant wallet addresses before submitting transactions to Stellar.
```

## Code Style Guidelines

Please follow these guidelines when contributing code:

- Use **TypeScript**
- Write modular and reusable code
- Use descriptive variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Follow consistent formatting

If formatting tools are added later (Prettier / ESLint), please ensure your code passes them.

## Writing Tests

Testing helps ensure reliability.

When adding new features:

- Include unit tests where possible
- Test critical payment flows
- Validate error handling

Future improvements may introduce automated CI testing.

## Reporting Bugs

If you discover a bug:

1. Open an issue
2. Provide a clear description
3. Include steps to reproduce
4. Include logs or screenshots if available

Example report:

```
Issue: Stellar transaction fails when merchant address is invalid.

Steps to reproduce:
1. Enter invalid wallet address
2. Submit payment
3. API returns internal error instead of validation error
```

## Suggesting Features

We welcome feature suggestions.

When proposing a feature, include:

- The problem you are solving
- The proposed solution
- Possible implementation ideas

This helps maintain productive discussion.

## Community Guidelines

Please be respectful and constructive when interacting with other contributors.

EzPay aims to build open financial infrastructure that benefits everyone.

## License

By contributing to EzPay, you agree that your contributions will be licensed under the **MIT License**.
