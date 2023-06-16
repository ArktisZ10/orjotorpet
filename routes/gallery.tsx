import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import { asset } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Örsjötorpet | Värmland | Gallery</title>
      </Head>
      <body class="min-h-screen bg-gradient-to-b from-blue-100 to-gray-600">
        <div class="p-4 mx-autop-4 mx-auto max-w-screen-lg">
          <Header active="/gallery" />
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3">
            {[
              asset("/images/cottage.jpg"),
              asset("/images/northern_orsjon.jpg"),
              asset("/images/main_room_1.jpg"),
              asset("/images/main_room_2.jpg"),
              asset("/images/kitchen_main_room.jpg"),
              asset("/images/kitchen.jpg"),
              asset("/images/bedroom.jpg"),
              asset("/images/sleeping_loft.jpg"),
              asset("/images/small_cabin.jpg"),
              asset("/images/terrace.jpg")
            ].map((url) => (
              <img
                src={url}
                class="rounded-lg filter drop-shadow-md hover:scale-105 hover:drop-shadow-2xl"
              />
            ))}
          </div>
        </div>
      </body>
    </>
  );
}
