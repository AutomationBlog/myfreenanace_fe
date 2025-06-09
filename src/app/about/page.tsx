export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 font-[var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">About MyFreeFinance</h1>
      <p className="text-lg">
        MyFreeFinance is a personal finance management tool that helps you track
        your expenses, set budgets, and achieve your financial goals.
      </p>
      <p className="text-sm text-gray-500">
        Version: 1.0.0
      </p>
    </div>
  );
}