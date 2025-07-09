"use client";
import Image from "next/image";
import { useState } from "react";

const PLACEHOLDER =
  "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg";

type ArtistCardProps = {
  name: string;
  imageUrl?: string;
  description?: string;
};

export default function ArtistCard({ name, imageUrl }: ArtistCardProps) {
  const [error, setError] = useState(false);

  return (
    <div className="flex flex-col items-center w-full h-full">
      {error ? (
        <Image
          src={PLACEHOLDER}
          alt={name}
          width={160}
          height={160}
          className="w-full h-48 rounded-xl object-cover mb-2"
        />
      ) : (
        <Image
          src={imageUrl || PLACEHOLDER}
          alt={name}
          width={160}
          height={160}
          className="w-full h-48 rounded-xl object-cover mb-2"
          onError={() => setError(true)}
        />
      )}
      <h3 className="text-base md:text-lg font-semibold mb-1 text-center">
        {name}
      </h3>
    </div>
  );
}
