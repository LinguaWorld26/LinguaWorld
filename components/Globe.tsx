"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
});

type CountryMarker = {
  id: string;
  name: string;
  lat: number;
  lng: number;
};

type CountryFeature = {
  properties?: {
    name?: string;
    ADMIN?: string;
    NAME?: string;
  };
};

const countryMarkers: CountryMarker[] = [
  {
    id: "france",
    name: "France",
    lat: 46.2276,
    lng: 2.2137,
  },
  {
    id: "japan",
    name: "Japan",
    lat: 36.2048,
    lng: 138.2529,
  },
  {
    id: "egypt",
    name: "Egypt",
    lat: 26.8206,
    lng: 30.8025,
  },
  {
    id: "spain",
    name: "Spain",
    lat: 40.4637,
    lng: -3.7492,
  },
  {
    id: "italy",
    name: "Italy",
    lat: 41.8719,
    lng: 12.5674,
  },
  {
    id: "germany",
    name: "Germany",
    lat: 51.1657,
    lng: 10.4515,
  },
  {
    id: "russia",
    name: "Russia",
    lat: 61.524,
    lng: 105.3188,
  },
];

const countryRoutes: Record<string, string> = {
  France: "france",
  Japan: "japan",
  Egypt: "egypt",
  Spain: "spain",
  Italy: "italy",
  Germany: "germany",
  Russia: "russia",
  "Russian Federation": "russia",
};

function getCountryName(country: CountryFeature) {
  return (
    country.properties?.name ||
    country.properties?.ADMIN ||
    country.properties?.NAME ||
    ""
  );
}

export default function GlobeComponent() {
  const globeRef = useRef<any>(null);
  const router = useRouter();

  const [countriesData, setCountriesData] = useState<CountryFeature[]>([]);
  const [hoveredCountry, setHoveredCountry] =
    useState<CountryFeature | null>(null);

  useEffect(() => {
    fetch("/data/countries.geojson")
      .then((response) => response.json())
      .then((data) => {
        const cleanedCountries = data.features.filter(
          (feature: CountryFeature) =>
            getCountryName(feature) !== "Bermuda"
        );

        setCountriesData(cleanedCountries);
      })
      .catch((error) => {
        console.error("Could not load country outlines:", error);
      });
  }, []);

  function handleGlobeReady() {
    if (!globeRef.current) return;

    globeRef.current.pointOfView(
      {
        lat: 20,
        lng: 15,
        altitude: 2.2,
      },
      1000
    );

    const controls = globeRef.current.controls();

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.45;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;

    controls.addEventListener("start", () => {
      controls.autoRotate = false;
    });

    controls.addEventListener("end", () => {
      controls.autoRotate = true;
    });
  }

  function handleCountryClick(marker: object) {
    const country = marker as CountryMarker;
    router.push(`/countries/${country.id}`);
  }

  return (
    <div
      className="flex justify-center"
      onMouseEnter={() => {
        if (globeRef.current) {
          globeRef.current.controls().autoRotate = false;
        }
      }}
      onMouseLeave={() => {
        if (globeRef.current) {
          globeRef.current.controls().autoRotate = true;
        }
      }}
    >
      <Globe
        ref={globeRef}
        onGlobeReady={handleGlobeReady}
        animateIn={true}
        showAtmosphere={true}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="rgba(0,0,0,0)"
        width={900}
        height={650}
        labelsData={countryMarkers}
        labelLat="lat"
        labelLng="lng"
        labelText="name"
        labelColor={() => "#ffffff"}
        labelSize={0.55}
        labelAltitude={0.02}
        labelDotRadius={0.25}
        labelIncludeDot={true}
        onLabelClick={handleCountryClick}
        polygonsData={countriesData}
        polygonAltitude={(country) =>
          country === hoveredCountry ? 0.05 : 0.003
        }
        polygonCapColor={(country) =>
          country === hoveredCountry
            ? "#C66A4A"
            : "rgba(255,255,255,0.03)"
        }
        polygonSideColor={() => "rgba(0, 0, 0, 0.08)"}
        polygonStrokeColor={() => "rgba(255, 255, 255, 0.45)"}
        onPolygonHover={(country) => {
          setHoveredCountry((country as CountryFeature) || null);
        }}
        onPolygonClick={(country) => {
          const feature = country as CountryFeature;
          const countryName = getCountryName(feature);
          const route = countryRoutes[countryName];

          if (route) {
            router.push(`/countries/${route}`);
          }
        }}
        polygonLabel={(country) => {
          const feature = country as CountryFeature;
          return getCountryName(feature) || "Country";
        }}
      />
    </div>
  );
}