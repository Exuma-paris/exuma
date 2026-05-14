"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { PhoneCountrySelect } from "@/components/ui/phone-country-select";

export function PhoneInputDemo() {
  const [country, setCountry] = useState("FR");
  const [phone, setPhone] = useState("");
  return (
    <div className="flex max-w-md flex-col gap-2">
      <Input
        label="Téléphone"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        leading={
          <PhoneCountrySelect value={country} onChange={setCountry} />
        }
      />
    </div>
  );
}
