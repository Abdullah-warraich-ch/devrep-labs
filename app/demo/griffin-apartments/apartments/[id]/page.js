import { notFound } from "next/navigation";
import { apartmentsData } from "../../_data/apartments";
import ApartmentDetailClient from "./ApartmentDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return apartmentsData.map(({ id }) => ({ id }));
}

function getApartment(id) {
  const apartment = apartmentsData.find((item) => item.id === id);
  if (!apartment) notFound();
  return apartment;
}

export async function generateMetadata({ params }) {
  const apartment = getApartment((await params).id);

  const title = `${apartment.name} in ${apartment.city} | Griffin Heights Apartments`;
  const description = `Book ${apartment.name} in ${apartment.area}, ${apartment.city}. Premium luxury stay featuring ${apartment.features.slice(0, 3).join(", ")}. Starting at ${apartment.price} ${apartment.priceUnit}.`;

  return { title, description };
}

export default async function ApartmentDetailPage({ params }) {
  const apartment = getApartment((await params).id);
  return <ApartmentDetailClient apartment={apartment} />;
}
