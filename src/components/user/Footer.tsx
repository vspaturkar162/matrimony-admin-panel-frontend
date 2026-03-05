export default function Footer() {
  return (
    <footer className="bg-stone-950 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        <div>
          <h4 className="font-bold mb-4 text-white">Need Help?</h4>
          <ul className="space-y-2 text-sm">
            <li>Member Login</li>
            <li>Sign Up</li>
            <li>Customer Support</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Privacy</h4>
          <ul className="space-y-2 text-sm">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">More</h4>
          <ul className="space-y-2 text-sm">
            <li>Success Stories</li>
            <li>VIP Matrimony</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        © 2026 ShubVivah. All rights reserved.
      </div>
    </footer>
  );
}