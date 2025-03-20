import PageBanner from "../../components/PageBanner";
import { Banner4 } from "../../assets";
import Link from "../../components/Link";
import Image1 from "../../assets/hotel-information-1.jpg";
import Image2 from "../../assets/hotel-information-2.jpg";

const HotelInformation = () => {
  return (
    <>
      <PageBanner title="Hotel Information" image={Banner4} />
      <article className="prose w-full">
        <p>
          Dasfaa2025 has room blocks at the conference hotel, offering
          discounted rate for our attendees. The hotel is expected to fill up
          quickly as May is a popular time of year to visit Singapore.
        </p>

        <h2>The Conference Venue:</h2>
        <img
          className="rounded-2xl w-full h-auto border shadow-lg"
          src={Image1}
        />
        <p>
          <b>Carlton Hotel Singapore</b>
          <br />
          76 Bras Basah Road
          <br />
          Singapore 189558
        </p>

        <p>
          Carlton Hotel Singapore is within walking distance of Singapore's
          busiest financial and convention centers, shopping areas, historical
          landmarks and museums. These include CHIJMES, Esplanade – Theatres on
          the Bay, Marina Bay Sands, Raffles City Shopping Centre, The National
          Museum of Singapore and Suntec Singapore Convention & Exhibition
          Centre.
        </p>

        <Link href="https://carltonhotel.co/CHSNP19">
          Carlton Hotel Singapore – accommodation booking link (with discounted
          rate for Dasfaa2025 attendees)
        </Link>
        <img
          className="rounded-2xl w-full h-auto border shadow-lg"
          src={Image2}
        />

        <h2>Excellent reasons for staying at the conference hotel:</h2>
        <ul>
          <li>
            Maximum convenience being at the center of the conference activity,
            it’s just an elevator ride to get to the program and functions, and
            just as quick to nip back to your room for a break. Staying at the
            conference hotel will provide the most convenience.
          </li>
          <li>
            Strategic location at the city center close to major landmarks and
            easy access to anywhere in Singapore
          </li>
          <li>
            Attractive, highly discounted rates for DASFAA 2025 attendees,
            providing great value compared to similar hotels in the city area.
            The offer is only available via the link, for a limited time and
            quantity per room type. Rates already include breakfast!
          </li>
        </ul>

        <h2>Booking information to note:</h2>
        <p>
          Single or double occupancy is possible. For double occupancy, please
          select 2 adults under room type before your search. If a twin-bedded
          room is required, indicate in the reservation details for Twin-bed
          room request under “Special Request”.
        </p>
      </article>
    </>
  );
};

export default HotelInformation;
