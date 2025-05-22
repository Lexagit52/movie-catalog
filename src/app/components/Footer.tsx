export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} LЁXA КиноКаталог. Все права защищены.
        </p>
      
      </div>
    </footer>
  );
}
