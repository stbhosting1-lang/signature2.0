import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-background px-4 text-center">
      
      <h1 className="text-[120px] sm:text-[150px] font-heading italic text-aboutCardHeading mb-4">
        404
      </h1>

      <h2 className="text-[28px] sm:text-[36px] font-heading italic text-secondary mb-4">
        Page Not Found
      </h2>

      <p className="text-[16px] sm:text-[18px] text-secondary/70 max-w-[600px] mb-8">
        Oops! Looks like the page you’re looking for doesn’t exist. 
        Maybe you mistyped the URL or the page has been moved.
      </p>

      <Link href="/" className="inline-block">
        <button className="bg-bookTableBg hover:bg-bookTableBg/20 text-bookTableText hover:text-white px-6 py-3 rounded-2xl text-[16px] font-body transition">
          Go Back Home
        </button>
      </Link>
      
    </div>
  );
}
