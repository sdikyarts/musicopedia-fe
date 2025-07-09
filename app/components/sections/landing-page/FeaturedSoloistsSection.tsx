import ArtistCard from "@/app/components/ArtistCard";

export default function FeaturedSoloistsSection() {
    return (
        <section>
            <div>
                <h1 className="text-xl md:text-2xl font-extrabold mb-4">Featured Soloists</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6">
                <ArtistCard name="Sabrina Carpenter" imageUrl="/sabrinacarpenter.jpg" />
                <ArtistCard name="Kendrick Lamar" imageUrl="/kendricklamar.jpg" />
                <ArtistCard name="Benson Boone" imageUrl="/bensonboone.jpg" />
                </div>
            </div>
        </section>
    );
}
