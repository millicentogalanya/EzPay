# EzPay - Stellar Payment Infrastructure

A modern, sleek landing page and merchant registration platform for EzPay, a lightweight payment infrastructure built on the Stellar blockchain. This project showcases a unique black and yellow design with smooth animations and Stellar wallet integration.

## 🎨 Design Features

- **Modern Dark Theme**: Black background with vibrant yellow (#ffd700) accents
- **Smooth Animations**: Fade-in effects, scale animations, and micro-interactions throughout
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Interactive Components**: Hover effects, animated progress indicators, and dynamic form validation
- **Stellar Integration**: Full support for Stellar wallet connection (Freighter, Lobstr, Albedo)

## 🚀 Tech Stack

- **Next.js 16** - App Router with React 19.2
- **TypeScript** - Strict mode for type safety
- **Tailwind CSS** - Custom black & yellow color scheme
- **Zustand** - Global state management for wallet and registration flows
- **React Query** - Server state and data fetching
- **Stellar SDK** - Blockchain wallet integration

## 📦 Project Structure

```
ezpay/
├── app/
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Landing page
│   ├── register/
│   │   └── page.tsx              # Registration page
│   ├── success/
│   │   └── page.tsx              # Success confirmation page
│   └── globals.css               # Global styles with design tokens
├── components/
│   ├── landing/
│   │   ├── Hero.tsx              # Hero section with CTA
│   │   ├── Features.tsx           # Feature showcase with 4 benefits
│   │   ├── HowItWorks.tsx        # 3-step process visualization
│   │   └── Footer.tsx             # Navigation footer
│   └── register/
│       ├── StepOne.tsx            # Business information form
│       ├── StepTwo.tsx            # Wallet connection & summary
│       └── WalletConnect.tsx      # Stellar wallet integration
├── lib/
│   ├── walletStore.ts            # Zustand wallet state
│   ├── registrationStore.ts       # Registration form state
│   └── stellar.ts                # Stellar SDK helpers
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## 🎯 Pages

### 1. **Landing Page** (`/`)
- Animated hero section with headline and CTAs
- "Why Choose EzPay?" feature showcase with 4 key benefits
- "How It Works" 3-step interactive guide
- Comprehensive footer with links

### 2. **Registration Page** (`/register`)
- Two-step registration flow with progress indicator
- **Step 1**: Business details (name, email, password)
  - Email validation
  - Password strength requirements (8+ characters)
  - Real-time error handling
- **Step 2**: Wallet connection
  - Stellar wallet integration (simulated)
  - Display connected wallet address
  - Optional bank account details
  - Complete registration with data logging

### 3. **Success Page** (`/success`)
- Celebration animation with checkmark
- Transaction hash display
- Statistics showcase
- Navigation to dashboard or home

## 🎨 Color Scheme

- **Primary**: Black (#0a0a0a dark mode, #ffffff light mode)
- **Accent**: Yellow (#ffd700) - Primary brand color
- **Background**: Subtle gradient transitions
- **Text**: High contrast white on black
- **Borders**: Accent yellow on hover effects

## ✨ Key Features

### 1. **Stellar Wallet Integration**
```typescript
// Connect to Stellar wallets (Freighter, Lobstr, Albedo)
const walletAddress = await connectWallet();
// Address displayed in masked format: GBRPYHIL2CI3...PEXPUN
```

### 2. **Form Validation**
- Business name validation
- Email format verification
- Password strength checking (8+ characters)
- Password confirmation matching
- Real-time error feedback with visual indicators

### 3. **State Management**
```typescript
// Wallet state via Zustand
useWalletStore.setState({ isConnected: true, address: walletAddress });

// Registration form state
useRegistrationStore.setState({ formData, currentStep: 2 });
```

### 4. **Animations**
- Page entry animations with stagger effects
- Hover scale and shadow effects on interactive elements
- Animated progress indicators
- Fade-in animations for step transitions
- Floating background orbs with pulse animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (pnpm recommended)
- Modern browser with ES2020+ support

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd ezpay-frontend

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will run at `http://localhost:3000`

### Building for Production

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

## 📝 Form Validation Rules

### Step 1 - Business Information
- **Business Name**: Required, minimum 1 character
- **Email**: Required, valid email format (xxx@xxx.xxx)
- **Password**: Required, minimum 8 characters
- **Confirm Password**: Must match password field

### Step 2 - Wallet Connection
- **Wallet**: Required - must connect a Stellar wallet
- **Bank Account**: Optional
- **Bank Routing Number**: Optional

## 🔗 API Integration Points

Currently, all integrations are mocked for demonstration:

```typescript
// Wallet connection - 1.5s simulated delay
const address = await connectWallet();

// Registration submission - 1.5s simulated delay
const response = await submitRegistration(formData);
```

In production, these would connect to actual API endpoints.

## 🎭 Animations

The application uses Tailwind CSS animations and custom keyframes:

- **Fade In**: Smooth entrance animations on page load
- **Scale**: Buttons scale on hover and click
- **Pulse**: Subtle pulsing effect on accent elements
- **Transitions**: All interactive elements have 300ms+ transitions for smooth motion
- **Stagger**: Multi-element animations are staggered for visual interest

## 🔐 Security Notes

- Form validation happens client-side for UX
- Passwords are validated but not hashed (demo only)
- All data is stored in Zustand state (not persisted)
- Stellar SDK integration uses test network

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## 🛠️ Development

### Available Scripts

```bash
# Development server with hot reload
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Type checking
pnpm tsc --noEmit

# View analytics
pnpm dev --analyze
```

## 📄 License

This project is part of the EzPay ecosystem.

## 🤝 Contributing

All form data and wallet connections are logged to the browser console for development purposes.

---

**Built with ❤️ for modern payment infrastructure**
