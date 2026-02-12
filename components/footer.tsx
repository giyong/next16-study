export default function Footer() {

  return (
    <footer className="bg-charcoal border-t border-glass-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary p-2 rounded-xl">
                <span className="material-icons text-white">movie</span>
              </div>
              <span className="text-2xl font-bold tracking-tight uppercase text-white">NEXT<span className="text-primary"> 16.1</span></span>
            </div>
            <p className="text-slate-400 text-base max-w-sm leading-relaxed">The premier cinematic exploration platform. Join a community of cinephiles discovering high-rated stories from around the globe.</p>
            <div className="mt-8 flex gap-5">
              <a className="w-10 h-10 rounded-xl bg-white/5 border border-glass-border flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 transition-all" href="#"><span className="material-icons">facebook</span></a>
              <a className="w-10 h-10 rounded-xl bg-white/5 border border-glass-border flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 transition-all" href="#"><span className="material-icons">camera_alt</span></a>
              <a className="w-10 h-10 rounded-xl bg-white/5 border border-glass-border flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 transition-all" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
            </div>
          </div>
          <div>
            <h4 className="font-black mb-6 text-xs uppercase tracking-[0.2em] text-white">Platform</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">Browse Movies</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Latest Awards</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Box Office</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">TV Specials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-6 text-xs uppercase tracking-[0.2em] text-white">Account</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">My Profile</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Watchlist</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Collections</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Settings</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-6 text-xs uppercase tracking-[0.2em] text-white">Newsletter</h4>
            <p className="text-slate-500 text-xs mb-4 leading-relaxed">Get the best movie picks delivered to your inbox weekly.</p>
            <div className="flex gap-2">
              <input className="bg-obsidian border border-glass-border rounded-lg text-xs w-full focus:ring-1 focus:ring-primary focus:border-primary text-white py-2 px-3" placeholder="Email" type="text" />
              <button className="bg-primary px-3 rounded-lg text-white hover:bg-red-700 transition-colors">
                <span className="material-icons text-sm">send</span>
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-glass-border flex flex-col md:row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-600 uppercase tracking-widest">© 2024 CineScope Discovery Lab. Engineered for Cinematic Perfection.</p>
          <div className="flex gap-8 text-[10px] text-slate-600 uppercase tracking-widest">
            <a className="hover:text-slate-300 transition-colors" href="#">Privacy Architecture</a>
            <a className="hover:text-slate-300 transition-colors" href="#">Terms of Engagement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}