import InteractiveImageBentoGallery from "@/components/ui/bento-gallery"

// Map gallery images with proper paths
const imageItems = [
  {
    id: 1,
    title: "Restaurant Ambiance",
    desc: "Charming interior atmosphere",
    url: "/images/gallery/hf_20260325_102518_3caa1cdb-f262-436f-9fb3-99579fe13014_cell_2_min (1).webp",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Cozy Corner",
    desc: "Perfect for intimate gatherings",
    url: "/images/gallery/hf_20260325_102518_3caa1cdb-f262-436f-9fb3-99579fe13014_cell_5_min (1).webp",
    span: "md:row-span-1",
  },
  {
    id: 3,
    title: "Elegant Dining",
    desc: "Sophisticated dining experience",
    url: "/images/gallery/hf_20260325_102518_3caa1cdb-f262-436f-9fb3-99579fe13014_cell_7_min (1).webp",
    span: "md:row-span-1",
  },
  {
    id: 4,
    title: "Bar Section",
    desc: "Premium cocktail and beverage area",
    url: "/images/gallery/hf_20260325_102518_3caa1cdb-f262-436f-9fb3-99579fe13014_cell_8_min (1).webp",
    span: "md:row-span-2",
  },
  {
    id: 5,
    title: "Main Hall",
    desc: "Spacious and welcoming atmosphere",
    url: "/images/gallery/hf_20260331_151928_a557120b-be7a-474c-b6c2-a2c74da56867_cell_0_min.webp",
    span: "md:row-span-1",
  },
  {
    id: 6,
    title: "Lounge Area",
    desc: "Relaxing place to unwind",
    url: "/images/gallery/hf_20260331_151928_a557120b-be7a-474c-b6c2-a2c74da56867_cell_1_min.webp",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 7,
    title: "Entrance",
    desc: "Beautiful entrance welcome",
    url: "/images/gallery/hf_20260331_151928_a557120b-be7a-474c-b6c2-a2c74da56867_cell_2_min.webp",
    span: "md:row-span-1",
  },
  {
    id: 8,
    title: "VIP Section",
    desc: "Exclusive private dining",
    url: "/images/gallery/hf_20260331_151928_a557120b-be7a-474c-b6c2-a2c74da56867_cell_3_min.webp",
    span: "md:row-span-1",
  },
  {
    id: 9,
    title: "Terrace View",
    desc: "Outdoor terrace seating",
    url: "/images/gallery/hf_20260331_151928_a557120b-be7a-474c-b6c2-a2c74da56867_cell_4_min.webp",
    span: "md:row-span-1",
  },
  {
    id: 10,
    title: "Kitchen",
    desc: "Modern culinary excellence",
    url: "/images/gallery/hf_20260331_151928_a557120b-be7a-474c-b6c2-a2c74da56867_cell_6_min.webp",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 11,
    title: "Special Events",
    desc: "Perfect venue for celebrations",
    url: "/images/gallery/hf_20260331_151928_a557120b-be7a-474c-b6c2-a2c74da56867_cell_7_min.webp",
    span: "md:row-span-1",
  },
]

export default function GalleryPage() {
  return (
    <main className="w-full antialiased">
      <InteractiveImageBentoGallery
        imageItems={imageItems}
        title="Blue Moon Gallery"
        description="Explore our stunning restaurant venue. Drag to browse, click to view full images."
      />
    </main>
  )
}
