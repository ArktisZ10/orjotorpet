import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import StyledContainer from "../components/StyledContainer.tsx";
import Carousel from "../islands/Carousel.tsx";
import MapIFrame from "../islands/MapIFrame.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Örsjötorpet | Värmland | Uthyrning</title>
      </Head>
      <body class="min-h-screen bg-gradient-to-b from-blue-100 to-gray-600">
        <div class="p-4 mx-auto max-w-screen-lg">
          <Header active="/" />
          <div class="grid gap-3 my-3">
            <StyledContainer class="col-span-2">
              Välkomna till vår sommaridyll i västra Värmland, strax utanför
              Arvika. Här har du chansen att koppla av och få lugn och ro.
            </StyledContainer>

            <StyledContainer class="col-span-2 md:col-span-1 md:row-span-3">
              <Carousel />
              <p class="text-sm">
                Fler bilder kan hittas i{" "}
                <a class="underline cursor-pointer" href="/gallery">
                  bildgalleriet
                </a>
              </p>
            </StyledContainer>

            <StyledContainer class="flex flex-col gap-2 col-auto">
              <div class="flex-initial">
                <p class="text-sm">Högsäsong</p>
                <p class="text-lg font-bold">7 500kr / vecka</p>
              </div>

              <div class="flex-initial">
                <p class="text-sm">Lågsäsong</p>
                <p class="text font-bold">5 900kr / vecka</p>
              </div>

              <p class="text-sm">(Syftar sön - sön)</p>
            </StyledContainer>

            <StyledContainer class="flex md:flex-col flex-wrap gap-y-2 gap-x-4">
              <div class="flex-none">
                <p class="text-sm">Storlek</p>
                <p class="text font-bold">3 rum, 64m²</p>
              </div>

              <div class="flex-none">
                <p class="text-sm">Sovrum</p>
                <p class="text font-bold">2 (5 sängar)</p>
              </div>

              <div class="flex-none">
                <p class="text-sm">Sovstuga</p>
                <p class="text font-bold">1 (2 Sängar)</p>
              </div>

              <div class="flex-none">
                <p class="text-sm">Badrum</p>
                <p class="text font-bold">1</p>
              </div>

              <div class="flex-none">
                <p class="text-sm">Gäster</p>
                <p class="text font-bold">7</p>
              </div>
            </StyledContainer>

            <StyledContainer class="col-span-2">
              <p>
                Huset är en timrad stuga som består av vardagsrum, sovrum, kök
                samt sovloft.
              </p>
              <br />

              <p>
                I separat byggnad finns badrum med WC, tvättställ och dusch.
              </p>
              <br />

              <p>
                Köket består av induktionshäll, spisfläkt, mikro och kyl med
                frysfack.
              </p>
              <br />

              <p>
                Sängarna är fördelade på följande vis:
                <ul class="list-inside list-disc">
                  <li>I sovrummet finns 1 våningssäng</li>
                  <li>På sovloftet finns 1 enkelsäng + 1 dubbelsäng</li>
                  <li>I Sovstugan finns 2 enkelsängar</li>
                </ul>
              </p>
              <br />

              <p>
                Vänligen notera:
                <ul class="list-inside list-disc">
                  <li>Husdjur är ej tillåtet</li>
                  <li>Rökfritt</li>
                  <li>El finns</li>
                  <li>Uthyres helst veckovis (sön-sön)</li>
                </ul>
              </p>
              <br />

              <p>
                Övrigt:
                <ul class="list-inside list-disc">
                  <li>Trädäck i soligt söderläge</li>
                  <li>Utemöbler + kolgrill</li>
                  <li>Egen brygga och badplats</li>
                  <li>Roddbåt</li>
                  <li>TV</li>
                  <li>Luft/luft värmepump med kyl- & värmefunktion</li>
                  <li>
                    Möjlighet för fiske i bl a Örsjön där det finns ädelfisk
                  </li>
                  <li>Nära Glaskogens naturreservat</li>
                </ul>
              </p>
              <br />

              Ta kontakt för mer information: <strong>[EMAIL TBD]</strong>
            </StyledContainer>

            <StyledContainer class="col-span-2">
              <MapIFrame />
            </StyledContainer>
          </div>
        </div>
      </body>
    </>
  );
}
