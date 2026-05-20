'use client';

import { useRegistrationStore } from '@/lib/registrationStore';
import { AlertCircle, Wallet } from 'lucide-react';

export function StepTwo() {
  const { formData, updateFormData, errors } = useRegistrationStore();

  const handleInputChange = (field: string, value: string) => {
    updateFormData({ [field]: value } as any);
  };

  return (
    <div className="space-y-6">
      {/* Wallet Summary */}
      <div className="p-4 bg-muted/50 border border-border rounded-lg">
        <div className="flex items-center gap-3 mb-2">
          <Wallet className="w-5 h-5 text-accent" />
          <span className="text-sm font-medium text-foreground">Wallet Connected</span>
        </div>
        <div className="text-xs font-mono text-muted-foreground break-all">
          {formData.walletAddress}
        </div>
        {formData.walletType && (
          <div className="mt-2 text-xs text-muted-foreground">
            Type: <span className="capitalize">{formData.walletType} Wallet</span>
          </div>
        )}
      </div>

      {/* Business Name */}
      <div>
        <label htmlFor="businessName" className="block text-sm font-medium text-foreground mb-2">
          Business Name *
        </label>
        <input
          id="businessName"
          type="text"
          value={formData.businessName}
          onChange={(e) => handleInputChange('businessName', e.target.value)}
          placeholder="Enter your business name"
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
        {errors.businessName && (
          <div className="flex items-center gap-2 mt-2 text-sm text-destructive">
            <AlertCircle className="w-4 h-4" />
            {errors.businessName}
          </div>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          placeholder="your@email.com"
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
        {errors.email && (
          <div className="flex items-center gap-2 mt-2 text-sm text-destructive">
            <AlertCircle className="w-4 h-4" />
            {errors.email}
          </div>
        )}
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
          Password *
        </label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
          placeholder="At least 8 characters"
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
        {errors.password && (
          <div className="flex items-center gap-2 mt-2 text-sm text-destructive">
            <AlertCircle className="w-4 h-4" />
            {errors.password}
          </div>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-2">
          Confirm Password *
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
          placeholder="Re-enter your password"
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
        {errors.confirmPassword && (
          <div className="flex items-center gap-2 mt-2 text-sm text-destructive">
            <AlertCircle className="w-4 h-4" />
            {errors.confirmPassword}
          </div>
        )}
      </div>
    </div>
  );
}
