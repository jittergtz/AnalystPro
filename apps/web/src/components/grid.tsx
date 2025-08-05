"use client"
import React, { useState } from 'react';
import { Check, ArrowRight, FileText, Mail, Vault, Download, Users, CreditCard, BarChart3, Shield, Clock, Zap } from 'lucide-react';

function Grid() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: FileText,
      title: "Smart Invoicing",
      description: "Create and send professional invoices to your customers, monitor your sent balance, track overdue payments and send automated reminders.",
      highlights: [
        "Create Customers",
        "Add VAT & Sales tax", 
        "Add discount",
        "Add Logo",
        "Send web invoices",
        "Export as PDF",
        "See if invoice is viewed"
      ],
      cta: "Send your first invoice in seconds",
      image: "invoice-preview"
    },
    {
      icon: Mail,
      title: "Intelligent Inbox",
      description: "Use your personalized email address for invoices and receipts. AI automatically categorizes and matches transactions.",
      highlights: [
        "Personalized email",
        "Smart search receipts and invoices content",
        "Automatically saves invoices and receipts in your vault"
      ],
      steps: [
        "Use your personalized email address for your invoices and receipts.",
        "The invoice arrives in the inbox. Midday gives you a transaction suggestion to match it with.",
        "Your transaction now have the right basis/attachments for you to export."
      ],
      badge: "Suggested match"
    },
    {
      icon: Vault,
      title: "Secure Vault",
      description: "Store your files securely with enterprise-grade encryption. Keep all your contracts and agreements safe in one place.",
      folders: [
        { name: "Company", size: "89.17 kb" },
        { name: "Contracts", size: "89.17 kb" },
        { name: "Office", size: "89.17 kb" }
      ],
      storage: "89.17 kb"
    },
    {
      icon: Download,
      title: "Seamless Export",
      description: "Take the hassle out of preparing exports for your accountant. Just select any time period or transaction and export to CSV.",
      benefits: [
        "Select any time period or transaction",
        "Export to CSV format",
        "Accountant-friendly formatting",
        "Clear attachment references"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-neutral-500/10 text-neutral-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap size={16} className='text-white' />
            All-in-one Business Solution
          </div>
          <h1 className="text-5xl font-semibold mb-6  text-white">
            Streamline Your Business
            <br />
        
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Professional invoicing, intelligent document management, and seamless accounting exports - all in one powerful platform.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          
          {/* Invoicing Feature */}
          <div 
            className="bg-neutral-800 rounded-lg p-8 border border-neutral-700  transition-all duration-300"
            onMouseEnter={() => setHoveredCard('invoicing')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <FileText className="text-blue-400" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Invoicing</h2>
            </div>
            
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Create and send invoices to your customers, monitor your sent balance, track overdue payments and send reminders.
            </p>
            
            {/* Mock Invoice */}
            <div className="bg-neutral-900 rounded-lg p-4 mb-6 border border-neutral-600">
              <div className="text-xs text-neutral-400 mb-2">Invoice</div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-sm font-medium">Invoice no: INV-01</div>
                  <div className="text-xs text-neutral-400">Issue date: 06/12/2024</div>
                  <div className="text-xs text-neutral-400">Due date: 06/12/2024</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-neutral-400">To</div>
                  <div className="text-sm">ACME Company</div>
                </div>
              </div>
              
              <div className="border-t border-neutral-700 pt-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>Product design</span>
                  <span>€15,000</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-400 mb-2">
                  <span>Subtotal</span>
                  <span>€15,000</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-400 mb-2">
                  <span>VAT (20%)</span>
                  <span>€3,750</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t border-neutral-700 pt-2">
                  <span>TOTAL</span>
                  <span>€23,750.00</span>
                </div>
              </div>
            </div>
            
           
            
            <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Send your first invoice in seconds
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Inbox Feature */}
          <div 
            className="bg-neutral-800 rounded-lg p-8 border border-neutral-700  transition-all duration-300"
            onMouseEnter={() => setHoveredCard('inbox')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <Mail className="text-purple-400" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Inbox</h2>
            </div>
            
            {/* Steps */}
            <div className="space-y-4 mb-6">
              {features[1].steps.map((step, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            
            {/* Mock Email */}
            <div className="bg-neutral-900 rounded-lg p-4 mb-6 border border-neutral-600">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium">Supabase • $5.10 • Mar 6, 2024</div>
                <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
                  Suggested match
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-xs">
                  ✓ Confirm
                </button>
                <button className="px-3 py-1 bg-neutral-700 text-neutral-300 rounded text-xs">
                  ✕ Decline
                </button>
              </div>
            </div>
            
            {/* Feature Highlights */}
            <div className="space-y-2">
              {features[1].highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check size={16} className="text-white flex-shrink-0" />
                  <span className="text-sm text-neutral-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Vault Feature */}
          <div className="bg-neutral-900 rounded-lg p-8 border border-neutral-800  transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-500/10 rounded-xl">
                <Vault className="text-green-400" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Vault</h2>
            </div>
            
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Store your files securely in Midday. There's no need to scramble for things across different drives. Keep all of your files, such as contracts and agreements safe in one place.
            </p>
            
            {/* Mock Folders */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              {features[2].folders.map((folder, index) => (
                <div key={index} className="bg-neutral-700 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-neutral-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    📁
                  </div>
                  <div className="text-sm font-medium">{folder.name}</div>
                  <div className="text-xs text-neutral-400">{folder.size}</div>
                </div>
              ))}
            </div>
            
            <div className="text-sm text-neutral-400 flex items-center gap-1">
              📤 Exports • {features[2].storage}
            </div>
          </div>

          {/* Export Feature */}
          <div className="bg-neutral-900 rounded-lg p-8 border border-neutral-800  transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-orange-500/10 rounded-xl">
                <Download className="text-orange-400" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Seamless Export</h2>
            </div>
            
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Take the hassle out of preparing exports for your accountant. Just select any time period or transaction you want and hit export. We package everything neatly in a CSV file.
            </p>
            
            <div className="space-y-2">
              {features[3].benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check size={16} className="text-white flex-shrink-0" />
                  <span className="text-sm text-neutral-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">10k+</div>
            <div className="text-neutral-300">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">1M+</div>
            <div className="text-neutral-300">Invoices Sent</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-neutral-300">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-neutral-300">Support</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-neutral-950 rounded-lg p-12">
          <h2 className="text-3xl font-semibold mb-4 ">Ready to streamline your business?</h2>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust our platform for their invoicing, document management, and accounting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-100 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid