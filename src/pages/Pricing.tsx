export default function Pricing() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
        {/* Starter Plan */}
        <div className="divide-y divide-gray-200 rounded-2xl border border-muted-foreground shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-foreground">
              Starter
              <span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 text-muted-foreground">
              Perfect for individuals managing small transactions.
            </p>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-foreground sm:text-4xl">
                $0
              </strong>
              <span className="text-sm font-medium text-muted-foreground">
                {" "}
                /month
              </span>
            </p>
            <a
              className="mt-4 block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
              href="#"
            >
              Get Started
            </a>
          </div>
          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-foreground sm:text-xl">
              What's included:
            </p>
            <ul className="mt-2 space-y-2 sm:mt-4">
              <li className="flex items-center gap-2 text-muted-foreground">
                ✅ Wallet balance up to $1,000
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                ✅ 50 transactions per month
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                ✅ Basic security & encryption
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                ❌ No API access
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                ❌ No priority support
              </li>
            </ul>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="divide-y divide-gray-200 rounded-2xl border border-indigo-500 shadow-lg">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-foreground">
              Pro
              <span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 text-muted-foreground">
              Ideal for freelancers and small businesses handling larger
              volumes.
            </p>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-foreground sm:text-4xl">
                $29
              </strong>
              <span className="text-sm font-medium text-muted-foreground">
                {" "}
                /month
              </span>
            </p>
            <a
              className="mt-4 block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
              href="#"
            >
              Upgrade Now
            </a>
          </div>
          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-foreground sm:text-xl">
              What's included:
            </p>
            <ul className="mt-2 space-y-2 sm:mt-4">
              <li className="flex items-center gap-2 text-muted-foreground">
                ✅ Wallet balance up to $10,000
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                ✅ Unlimited transactions
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                ✅ Advanced security & fraud protection
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                ✅ API access for integrations
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                ❌ No dedicated account manager
              </li>
            </ul>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="divide-y divide-gray-200 rounded-2xl border border-muted-foreground shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-foreground">
              Enterprise
              <span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 text-muted-foreground">
              Best for large-scale businesses and financial institutions.
            </p>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-foreground sm:text-4xl">
                $99
              </strong>
              <span className="text-sm font-medium text-muted-foreground">
                {" "}
                /month
              </span>
            </p>
            <a
              className="mt-4 block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
              href="#"
            >
              Contact Sales
            </a>
          </div>
          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-foreground sm:text-xl">
              What's included:
            </p>
            <ul className="mt-2 space-y-2 sm:mt-4">
              <li className="flex items-center gap-2 text-muted-foreground">
                ✅ Wallet balance unlimited
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                ✅ Unlimited transactions
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                ✅ Enterprise-level security & compliance (PCI DSS)
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                ✅ API + Webhooks + SDK support
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                ✅ Dedicated account manager & 24/7 support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
