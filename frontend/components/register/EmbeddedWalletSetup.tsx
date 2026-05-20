'use client';

import { useState } from 'react';
import { generateEmbeddedWallet, shortenAddress } from '@/lib/stellar';
import { useRegistrationStore } from '@/lib/registrationStore';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Copy, Download, AlertCircle, Check } from 'lucide-react';

type WalletMode = 'selection' | 'external' | 'embedded';

export function EmbeddedWalletSetup({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const { formData, updateFormData } = useRegistrationStore();
  const [mode, setMode] = useState<WalletMode>('selection');
  const [showSecret, setShowSecret] = useState(false);
  const [copied, setCopied] = useState(false);
  const [generatedWallet, setGeneratedWallet] = useState<{
    publicKey: string;
    secretKey: string;
  } | null>(null);

  const handleGenerateEmbedded = () => {
    const wallet = generateEmbeddedWallet();
    setGeneratedWallet(wallet);
    updateFormData({
      walletType: 'embedded',
      walletAddress: wallet.publicKey,
      embeddedWalletSecret: wallet.secretKey,
    });
    setMode('embedded');
  };

  const handleConfirmBackup = () => {
    updateFormData({ embeddedWalletBackupConfirmed: true });
    onComplete();
  };

  const handleCopySecret = () => {
    if (generatedWallet?.secretKey) {
      navigator.clipboard.writeText(generatedWallet.secretKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadWallet = () => {
    if (!generatedWallet) return;
    const walletData = {
      type: 'Stellar Embedded Wallet',
      publicKey: generatedWallet.publicKey,
      secretKey: generatedWallet.secretKey,
      created: new Date().toISOString(),
      warning: 'KEEP THIS SECRET KEY SAFE. Anyone with access to it can control your wallet.',
    };
    const dataStr = JSON.stringify(walletData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `stellar-wallet-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (mode === 'selection') {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Choose Your Wallet Setup
          </h3>
          <p className="text-sm text-muted-foreground">
            Connect an existing Stellar wallet or create a new embedded wallet
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* External Wallet Option */}
          <button
            onClick={() => {
              setMode('external');
              updateFormData({ walletType: 'external' });
            }}
            className="p-6 border-2 border-accent rounded-lg hover:bg-accent/5 transition-all duration-300 text-left group"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">
                  Connect External Wallet
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Use Freighter, Lobstr, or Albedo
                </p>
              </div>
            </div>
          </button>

          {/* Embedded Wallet Option */}
          <button
            onClick={handleGenerateEmbedded}
            className="p-6 border-2 border-accent rounded-lg hover:bg-accent/5 transition-all duration-300 text-left group"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">
                  Create Embedded Wallet
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  New wallet created instantly
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  }

  if (mode === 'external') {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Connect Your Stellar Wallet
          </h3>
          <p className="text-sm text-muted-foreground">
            Click the button below to open your wallet extension
          </p>
        </div>

        <div className="bg-muted/50 border border-border rounded-lg p-6">
          <Button
            onClick={() => {
              // Simulate wallet connection
              const mockAddress = 'GBRPYHIL2CI3WHZDTOOQFC6EB4KJJGUJMXQJSTUYCZLW5B63MPEXPUN';
              updateFormData({ walletAddress: mockAddress });
              onComplete();
            }}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
            size="lg"
          >
            Connect Wallet
          </Button>
        </div>

        <Button
          onClick={() => {
            setMode('selection');
            updateFormData({ walletType: null, walletAddress: '' });
          }}
          variant="ghost"
          className="w-full"
        >
          Back to Selection
        </Button>
      </div>
    );
  }

  if (mode === 'embedded' && generatedWallet) {
    const isBackupConfirmed = formData.embeddedWalletBackupConfirmed;

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Your New Stellar Wallet
          </h3>
          <p className="text-sm text-muted-foreground">
            Save your wallet details in a secure location
          </p>
        </div>

        {/* Security Warning */}
        <div className="flex gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
          <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold text-destructive mb-1">
              Important: Save Your Secret Key
            </p>
            <p className="text-destructive/80">
              Never share this secret key with anyone. Anyone with access can control your funds.
            </p>
          </div>
        </div>

        {/* Public Key */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Public Address (Safe to share)
          </label>
          <div className="flex gap-2">
            <input
              readOnly
              value={generatedWallet.publicKey}
              className="flex-1 px-3 py-2 bg-muted border border-border rounded-lg text-xs font-mono text-foreground"
            />
            <Button
              onClick={() => {
                navigator.clipboard.writeText(generatedWallet.publicKey);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              size="sm"
              variant="outline"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Secret Key */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Secret Key (Keep Private!)
          </label>
          <div className="flex gap-2">
            <input
              readOnly
              type={showSecret ? 'text' : 'password'}
              value={generatedWallet.secretKey}
              className="flex-1 px-3 py-2 bg-muted border border-border rounded-lg text-xs font-mono text-foreground"
            />
            <Button
              onClick={() => setShowSecret(!showSecret)}
              size="sm"
              variant="outline"
            >
              {showSecret ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            onClick={handleCopySecret}
            variant="outline"
            className="flex-1"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy Secret
          </Button>
          <Button
            onClick={handleDownloadWallet}
            variant="outline"
            className="flex-1"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>

        {/* Backup Confirmation */}
        <div className="flex gap-3 p-4 bg-muted/50 border border-border rounded-lg">
          <input
            type="checkbox"
            id="backup-confirm"
            checked={isBackupConfirmed}
            onChange={(e) => {
              updateFormData({ embeddedWalletBackupConfirmed: e.target.checked });
            }}
            className="w-4 h-4 rounded border-border accent-accent"
          />
          <label htmlFor="backup-confirm" className="text-sm text-foreground">
            I have saved my secret key in a safe place and understand that I cannot recover it if lost
          </label>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={() => {
              setMode('selection');
              setGeneratedWallet(null);
              updateFormData({
                walletType: null,
                walletAddress: '',
                embeddedWalletSecret: '',
                embeddedWalletBackupConfirmed: false,
              });
            }}
            variant="outline"
            className="flex-1"
          >
            Back
          </Button>
          <Button
            onClick={handleConfirmBackup}
            disabled={!isBackupConfirmed}
            className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue to Details
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
