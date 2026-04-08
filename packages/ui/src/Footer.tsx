export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-black text-white">ChallengesON</span>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ChallengesON. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
