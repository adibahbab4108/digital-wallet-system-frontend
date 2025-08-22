import { ArrowRightLeft, Badge, Shield } from 'lucide-react'

export default function Vision() {
  return (
      <section className="py-16">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Why Choose <span className="text-indigo-600">WalletX?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We stand for security, speed, and simplicity in financial
            transactions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            <div className="p-6  rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
              <Shield className="my-5" />
              <h3 className="text-lg font-semibold text-foreground">
                Bank-Grade Security
              </h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Multi-layer encryption and biometric authentication keep your
                funds safe.
              </p>
            </div>
            <div className="p-6  rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
              <ArrowRightLeft className="my-5" />
              <h3 className="text-lg font-semibold text-foreground">
                Instant Transactions
              </h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Send and receive money in seconds with zero delays.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
              <Badge className="my-5" />
              <h3 className="text-lg font-semibold text-foreground">
                Global Access
              </h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Use WalletX for international transfers and global payments
                effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}
