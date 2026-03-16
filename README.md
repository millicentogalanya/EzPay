# EzPay

EzPay is a lightweight payment infrastructure built on the Stellar blockchain that enables customers to pay merchants using stablecoins — even if the merchant is not registered on the platform.

The goal of EzPay is to make crypto payments as simple as traditional bank transfers by supporting both wallet-based payments and fiat off-ramp payouts.

EzPay is designed as an MVP focused on real-world usability and fast settlement using the Stellar network.

## Contents

- [Problem](#problem)
- [Solution](#solution)
- [Key Features](#key-features)
- [Payment Flows](#payment-flows)
- [Architecture Overview](#architecture-overview)
- [Tech Stack](#tech-stack)
- [Why Stellar](#why-stellar)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Project Status](#project-status)
- [Future Improvements](#future-improvements)
- [Use Cases](#use-cases)
- [Contributing](#contributing)
- [License](#license)

## Problem

Many merchants do not accept cryptocurrency payments because:

- They are unfamiliar with wallets or blockchain technology
- They prefer receiving payments directly into their bank accounts
- Existing crypto payment systems require merchants to register before they can receive payments

This creates friction for customers who want to pay using stablecoins.

## Solution

EzPay enables customers to pay merchants in two simple ways.

### Wallet Payments

Customers can send stablecoins directly to a merchant’s wallet address.

### Fiat Payments (Off-Ramp)

Customers can pay merchants who do not use crypto by entering the merchant’s bank details.

The stablecoin payment is processed and converted through an off-ramp provider so the merchant receives fiat in their bank account.

This allows merchants to receive payments without needing to understand blockchain or manage a crypto wallet.

## Key Features

- Merchant-to-customer payments
- Customer-to-merchant payments
- Payments to unregistered merchants
- Stablecoin payments
- Fiat off-ramp payouts
- Fast settlement using Stellar
- Low transaction fees

## Payment Flows

### Registered Merchant Flow

1. Merchant registers on EzPay
2. Merchant generates a payment link or QR code
3. Customer pays using stablecoins
4. Merchant receives funds in their wallet or bank account

### Unregistered Merchant Flow

1. Customer selects **Pay Merchant**
2. Customer enters either:

   - Merchant wallet address
   - Merchant bank details

3. Customer sends stablecoins
4. If bank details are used:

   - Funds are converted through an off-ramp provider
   - Merchant receives fiat in their bank account

## Architecture Overview

EzPay follows a simple backend architecture:

Customer → EzPay API → Stellar Network → Merchant Wallet
or
Customer → EzPay API → Off-Ramp Provider → Merchant Bank Account

The backend manages:

- Payment validation
- Transaction construction
- Blockchain submission
- Off-ramp processing
- Transaction tracking

## Tech Stack

**Blockchain**

- Stellar Network

**Backend**

- Rust
- Axum

**Blockchain SDK**

- Stellar SDK

**Database**

- PostgreSQL (or MongoDB)

**Stablecoins**

- USDC or other Stellar-issued stable assets

## Why Stellar

The Stellar network is designed for payments and financial infrastructure.

Benefits include:

- Fast transaction settlement (2–5 seconds)
- Extremely low fees
- Native asset issuance
- Built-in support for stablecoins
- Efficient cross-border payments

These features make Stellar ideal for real-world payment applications.

## Project Structure

### Folder Structure

```
ezpay/
│
├── src/
│   │
│   ├── config/
│   │   ├── stellar.ts
│   │   ├── database.ts
│   │   └── env.ts
│   │
│   ├── controllers/
│   │   ├── payment.controller.ts
│   │   ├── merchant.controller.ts
│   │   └── customer.controller.ts
│   │
│   ├── services/
│   │   ├── stellar.service.ts
│   │   ├── payment.service.ts
│   │   ├── offramp.service.ts
│   │   └── wallet.service.ts
│   │
│   ├── routes/
│   │   ├── payment.routes.ts
│   │   ├── merchant.routes.ts
│   │   └── customer.routes.ts
│   │
│   ├── models/
│   │   ├── merchant.model.ts
│   │   ├── payment.model.ts
│   │   └── transaction.model.ts
│   │
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   └── error.middleware.ts
│   │
│   ├── utils/
│   │   ├── validators.ts
│   │   ├── helpers.ts
│   │   └── logger.ts
│   │
│   └── app.ts
│
├── scripts/
│   └── seed.ts
│
├── tests/
│   ├── payment.test.ts
│   └── stellar.test.ts
│
├── .env.example
├── README.md
├── CONTRIBUTING.md
├── package.json
├── tsconfig.json
└── LICENSE
```

### Folder Explanation

| Folder | Description |
| --- | --- |
| config | Configuration for Stellar network, database, and environment variables |
| controllers | Handles incoming API requests and responses |
| services | Core business logic such as payments, wallet interaction, and off-ramping |
| routes | API route definitions |
| models | Database models for merchants, payments, and transactions |
| middleware | Express middleware like authentication and error handling |
| utils | Helper functions and validation utilities |
| scripts | Development scripts such as database seeding |
| tests | Unit and integration tests |

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/ezpay
cd ezpay
```

### Install Dependencies

```bash
cd backend
cargo build
```

### Configure Environment Variables

Create a `.env` file using the example below.

```
PORT=3001
RUST_LOG=ezpay_backend=info,tower_http=info
STELLAR_NETWORK=testnet
STELLAR_RPC_URL=
STELLAR_SECRET_KEY=
OFFRAMP_API_KEY=
DATABASE_URL=
```

### Run Development Server

```bash
cargo run
```

## Project Status

EzPay is currently in MVP development.

The first version focuses on:

- Core payment infrastructure
- Stablecoin transactions
- Merchant wallet payments
- Fiat off-ramp payouts

## Future Improvements

- Merchant dashboard
- QR code payments
- Payment request links
- Mobile wallet integration
- Recurring payments
- Invoice generation
- Payment analytics
- Multi-currency support

## Use Cases

- Paying small businesses with stablecoins
- Paying freelancers across borders
- Paying merchants that only accept bank transfers
- Cross-border payments
- Crypto-to-fiat remittances

## Contributing

We welcome contributions from developers, designers, and blockchain enthusiasts.

Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License.
