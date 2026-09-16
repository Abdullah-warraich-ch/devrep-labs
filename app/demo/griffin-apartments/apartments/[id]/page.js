import { apartmentsData } from "../../_data/apartments";
import ApartmentDetailClient from "./ApartmentDetailClient";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const apartmentId = resolvedParams?.id;
  const apartment =
    apartmentsData.find((a) => a.id === apartmentId) || apartmentsData[0];

  const title = `${apartment.name} in ${apartment.city} | Griffin Heights Apartments`;
  const description = `Book ${apartment.name} in ${apartment.area}, ${apartment.city}. Premium luxury stay featuring ${apartment.features.slice(0, 3).join(", ")}. Starting at ${apartment.price} ${apartment.priceUnit}.`;

  return { title, description };
}

export default async function ApartmentDetailPage({ params }) {
  const resolvedParams = await params;
  return <ApartmentDetailClient params={resolvedParams} />;
}
