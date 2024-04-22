import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/d5e0430a-0660-4202-8105-cec5b2ac3627-1rmcqt.jpeg",
  "https://utfs.io/f/aaf50269-8309-4113-8809-c6a8fb3cc43a-1lhur8.jpeg",
  "https://utfs.io/f/7d36ac6a-a4ab-4c27-98ee-a673f592b7eb-cz7h7c.png",
  "https://utfs.io/f/a53f7def-6726-4d2c-9a77-a555d647b5dd-pq8daa.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id}>
            <img className="h-24 w-48" src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
