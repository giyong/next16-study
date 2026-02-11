"use client";

export default function Navigation() {

  return (
    <nav className="sticky top-0 z-50 nav-blur border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-primary p-2 rounded-xl shadow-[0_0_20px_rgba(234,42,51,0.3)] transition-transform group-hover:scale-105">
              <span className="material-icons text-white">movie</span>
            </div>
            <span className="text-2xl font-bold tracking-tight uppercase text-white">Next<span className="text-primary"> 16.1</span></span>
          </div>
          <div className="flex-1 max-w-xl mx-12 hidden md:block">
            <div className="relative group">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-icons text-slate-500 text-lg group-focus-within:text-primary transition-colors">search</span>
              </span>
              {/* 검색어  */}
              <input className="block w-full pl-12 pr-4 py-3 border border-glass-border rounded-2xl bg-white/5 text-sm focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white/10 placeholder-slate-500 transition-all text-white outline-none" placeholder="Search movies, actors, directors..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-8">
            {/* <div className="hidden lg:flex items-center gap-8">
              <a className="text-sm font-semibold text-slate-300 hover:text-white transition-colors" href="#">Discover</a>
              <a className="text-sm font-semibold text-slate-300 hover:text-white transition-colors" href="#">Awards</a>
              <a className="text-sm font-semibold text-slate-300 hover:text-white transition-colors" href="#">Community</a>
            </div> */}
            {/* <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary/40 p-0.5 hover:border-primary transition-colors cursor-pointer">
              <img alt="Profile" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF69wceSS5zSpDzTomSwV-9P9p_DlVWbrtvyxXB8nKMO3XdO0aywE4juhGkZTsil79HVEm2cdhyGB2u2GKTp63JnC6hef4CkRmW5oVeL41FW0KyALkvLIrxu8l5cb_dKmd6W_6g6r7GSizsTJNackVlctpcPMP5JY_iCls4TI3zhzkMYBZC5vgbbp4H7X7jvwsV-0_JykhNsNd-xVvrh142Eem_6P9Hk2JDsI-zQBzKpZUU7qfCFACH_tJ4CYsagfKK0msuFKxA23u"/>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}