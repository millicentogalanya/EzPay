'use client';

import { useRegistrationStore } from '@/lib/registrationStore';
import { useState } from 'react';

export function StepOne() {
  const { formData, updateFormData, setErrors, errors } = useRegistrationStore();
  const [touched, setTouched] = useState<Set<string>>(new Set());

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  const validatePassword = (password: string) => password.length >= 8;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });

    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => new Set([...prev, name]));
    validateField(name);
  };

  const validateField = (fieldName: string) => {
    const newErrors = { ...errors };

    switch (fieldName) {
      case 'businessName':
        if (!formData.businessName.trim()) {
          newErrors.businessName = 'Business name is required';
        } else {
          delete newErrors.businessName;
        }
        break;
      case 'email':
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
          newErrors.email = 'Please enter a valid email';
        } else {
          delete newErrors.email;
        }
        break;
      case 'password':
        if (!formData.password) {
          newErrors.password = 'Password is required';
        } else if (!validatePassword(formData.password)) {
          newErrors.password = 'Password must be at least 8 characters';
        } else {
          delete newErrors.password;
        }
        break;
      case 'confirmPassword':
        if (!formData.confirmPassword) {
          newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = 'Passwords do not match';
        } else {
          delete newErrors.confirmPassword;
        }
        break;
    }

    setErrors(newErrors);
  };

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Business Name</label>
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Your Business Name"
          className={`w-full px-4 py-3 border rounded-lg bg-card text-foreground placeholder-muted-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
            touched.has('businessName') && errors.businessName
              ? 'border-red-500'
              : 'border-border'
          }`}
        />
        {touched.has('businessName') && errors.businessName && (
          <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="your@email.com"
          className={`w-full px-4 py-3 border rounded-lg bg-card text-foreground placeholder-muted-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
            touched.has('email') && errors.email ? 'border-red-500' : 'border-border'
          }`}
        />
        {touched.has('email') && errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="At least 8 characters"
          className={`w-full px-4 py-3 border rounded-lg bg-card text-foreground placeholder-muted-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
            touched.has('password') && errors.password
              ? 'border-red-500'
              : 'border-border'
          }`}
        />
        {touched.has('password') && errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Confirm your password"
          className={`w-full px-4 py-3 border rounded-lg bg-card text-foreground placeholder-muted-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
            touched.has('confirmPassword') && errors.confirmPassword
              ? 'border-red-500'
              : 'border-border'
          }`}
        />
        {touched.has('confirmPassword') && errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
        )}
      </div>
    </div>
  );
}
