import officemen from "@/assets/images/officemen.jpg";
import SectionHeader from "@/components/SectionHeader";

export default function Mission() {
  return (
    <section className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <img
          src={officemen}
          alt="About WalletX"
          className="rounded-xl shadow-lg object-cover w-full"
        />
      </div>
      <div>
       <SectionHeader header="Who We Are" />
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
          WalletX is a next-generation digital wallet platform designed to make
          your financial transactions simple, secure, and smart. From sending
          money instantly to managing your expenses, we empower individuals and
          businesses to go completely cashless with confidence.
        </p>
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
          Our mission is to bring financial freedom to everyone, everywhere —
          without barriers. With WalletX, experience seamless payments, advanced
          security, and global connectivity.
        </p>
      </div>
    </section>
  );
}
