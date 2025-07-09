"use client";

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  // TODO: Replace with real admin session check
  const [isAdmin] = useState(false); // Set to true to preview admin navbar
  const [artistOpen, setArtistOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed left-0 right-0 top-0 w-full z-50 bg-[var(--color-offwhite)] border-b min-h-[56px] md:min-h-[64px]"
    >
      <div className="flex flex-wrap items-center justify-between px-6 md:px-16 py-3 md:py-4">
        <div className="flex items-center gap-1 md:gap-2 min-w-0">
          {isAdmin ? (
            <h1 className="truncate text-xl md:text-2xl font-extrabold tracking-tight text-gray-900">
              <Link href="/admin/dashboard">Musicopedia</Link>
            </h1>
          ) : (
            <h1 className="truncate text-xl md:text-2xl font-extrabold tracking-tight text-gray-900">
              <Link href="/">Musicopedia</Link>
            </h1>
          )}
        </div>
        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-2xl p-2 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
        {/* Desktop menu */}
        <div className="hidden md:flex flex-wrap items-center gap-2 md:gap-8 min-w-0">
          {/* Regular user menu */}
          {!isAdmin && (
            <>
              <div
                className="relative group"
                onMouseEnter={() => setArtistOpen(true)}
                onMouseLeave={() => setArtistOpen(false)}
              >
                <Link
                  href="/artists"
                  className={`font-medium transition-colors text-sm md:text-base flex items-center gap-1 text-gray-900 ${artistOpen ? 'text-[var(--color-raspberry)]' : 'hover:text-[var(--color-raspberry)]'}`}
                  tabIndex={0}
                  onClick={() => { setArtistOpen(false); }}
                >
                  All Artists
                </Link>
                {(artistOpen) && (
                  <div className="absolute left-0 mt-0 w-40 bg-[var(--color-offwhite-alt,#f5f3f0)] border border-[var(--color-raspberry)] rounded z-20 p-2 shadow"
                    onMouseEnter={() => setArtistOpen(true)}
                    onMouseLeave={() => setArtistOpen(false)}
                  >
                    <div className="px-2 py-1">
                      <Link href="/groups" className="block px-2 py-2 text-gray-900 font-medium text-sm md:text-base hover:text-[var(--color-raspberry)] hover:bg-[var(--color-raspberry)/10]">All Groups</Link>
                      <Link href="/members" className="block px-2 py-2 text-gray-900 font-medium text-sm md:text-base hover:text-[var(--color-raspberry)] hover:bg-[var(--color-raspberry)/10]">Members</Link>
                      <Link href="/subunits" className="block px-2 py-2 text-gray-900 font-medium text-sm md:text-base hover:text-[var(--color-raspberry)] hover:bg-[var(--color-raspberry)/10]">Subunits</Link>
                      <Link href="/solo" className="block px-2 py-2 text-gray-900 font-medium text-sm md:text-base hover:text-[var(--color-raspberry)] hover:bg-[var(--color-raspberry)/10]">Solo Artists</Link>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/about" className="text-gray-900 hover:text-[var(--color-raspberry)] font-medium transition-colors text-sm md:text-base">About Us</Link>
            </>
          )}
          {/* Admin menu unchanged for now */}
          {isAdmin && (
            <>
              <Link href="/admin/dashboard" className="text-gray-900 hover:text-[var(--color-raspberry)] font-medium transition-colors text-sm md:text-base">Dashboard</Link>
              <div className="relative group">
                <button className="text-gray-900 hover:text-[var(--color-raspberry)] font-medium transition-colors text-sm md:text-base">Add Artist</button>
                <div className="static md:absolute left-0 mt-2 w-full md:w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-20">
                  <Link href="/admin/add-artist/group" className="block px-4 py-2 font-medium text-sm md:text-base hover:bg-gray-100">Groups</Link>
                  <Link href="/admin/add-artist/group/members" className="block px-4 py-2 font-medium text-sm md:text-base hover:bg-gray-100">Members</Link>
                  <Link href="/admin/add-artist/group/subunits" className="block px-4 py-2 font-medium text-sm md:text-base hover:bg-gray-100">Subunits</Link>
                  <Link href="/admin/add-artist/solo" className="block px-4 py-2 font-medium text-sm md:text-base hover:bg-gray-100">Solo</Link>
                </div>
              </div>
              <button className="text-gray-900 hover:text-[var(--color-raspberry)] font-medium transition-colors text-sm md:text-base">Logout</button>
            </>
          )}
        </div>
      </div>
      {/* Mobile menu */}
      {mobileOpen && !isAdmin && (
        <div className="md:hidden bg-[var(--color-offwhite)] border-t px-6 pb-4">
          <div className="flex flex-col gap-2">
            <Link href="/artists" className="text-gray-900 hover:text-[var(--color-raspberry)] font-medium transition-colors text-base py-2" onClick={() => setMobileOpen(false)}>All Artists</Link>
            <Link href="/groups" className="text-gray-900 hover:text-[var(--color-raspberry)] font-medium transition-colors text-base py-2" onClick={() => setMobileOpen(false)}>All Groups</Link>
            <Link href="/members" className="text-gray-900 hover:text-[var(--color-raspberry)] font-medium transition-colors text-base py-2" onClick={() => setMobileOpen(false)}>Members</Link>
            <Link href="/subunits" className="text-gray-900 hover:text-[var(--color-raspberry)] font-medium transition-colors text-base py-2" onClick={() => setMobileOpen(false)}>Subunits</Link>
            <Link href="/solo" className="text-gray-900 hover:text-[var(--color-raspberry)] font-medium transition-colors text-base py-2" onClick={() => setMobileOpen(false)}>Solo Artists</Link>
            <Link href="/about" className="text-gray-900 hover:text-[var(--color-raspberry)] font-medium transition-colors textbase py-2" onClick={() => setMobileOpen(false)}>About Us</Link>
          </div>
        </div>
      )}
      {mobileOpen && isAdmin && (
        <div className="md:hidden bg-[var(--color-offwhite)] border-t px-6 pb-4">
          <div className="flex flex-col gap-2">
            <Link href="/admin/dashboard" className="text-gray-900 hover:text-[var(--color-raspberry)] font-medium transition-colors text-base py-2" onClick={() => setMobileOpen(false)}>Dashboard</Link>
            <Link href="/admin/add-artist/group" className="text-gray-900 hover:text-[var(--color-raspberry)] font-medium transition-colors text-base py-2" onClick={() => setMobileOpen(false)}>Add Group</Link>
            <Link href="/admin/add-artist/group/members" className="text-gray-900 hover:text-[var(--color-raspberry)] font-medium transition-colors textbase py-2" onClick={() => setMobileOpen(false)}>Add Members</Link>
            <Link href="/admin/add-artist/group/subunits" className="text-gray-900 hover:text-[var(--color-raspberry)] font-medium transition-colors textbase py-2" onClick={() => setMobileOpen(false)}>Add Subunits</Link>
            <Link href="/admin/add-artist/solo" className="text-gray-900 hover:text-[var(--color-raspberry)] font-medium transition-colors textbase py-2" onClick={() => setMobileOpen(false)}>Add Solo</Link>
            <button className="text-gray-900 hover:text-[var(--color-raspberry)] font-medium transition-colors textbase py-2 text-left" onClick={() => setMobileOpen(false)}>Logout</button>
          </div>
        </div>
      )}
    </nav>
  );
}
