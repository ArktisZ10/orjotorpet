import LinkButton from "../components/LinkButton.tsx";
import IconMapPinFilled from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/map-pin-filled.tsx";

export default function MapIFrame() {
  return (
    <>
      <iframe
        class="w-full"
        src="https://www.openstreetmap.org/export/embed.html?bbox=12.081871032714846%2C59.568940582050686%2C12.655220031738281%2C59.7275042622776&amp;layer=mapnik&amp;marker=59.64831609639064%2C12.368545532226562"
      />

      <div class="flex flex-wrap gap-3 mt-2 justify-center sm:justify-start">
        <LinkButton
          href="https://www.openstreetmap.org/?mlat=59.6483&amp;mlon=12.3685#map=12/59.6483/12.3685"
          target="_blank"
          rel="noreferrer"
          title="Open in OpenStreetMap"
        >
          <IconMapPinFilled class="w-5 h-5 mr-1 mb-1 inline-block text-green-500" />
          OpenStreetMap
        </LinkButton>

        <LinkButton
          href="https://www.google.com/maps/place/59%C2%B038'55.0%22N+12%C2%B022'05.4%22E/@59.6544499,12.4581172,12z/data=!4m4!3m3!8m2!3d59.6486111!4d12.3681667?entry=ttu"
          target="_blank"
          rel="noreferrer"
          title="Open in Google Maps"
        >
          <IconMapPinFilled class="w-5 h-5 mr-1 mb-1 inline-block text-red-500" />
          Google Maps
        </LinkButton>
      </div>
    </>
  );
}
