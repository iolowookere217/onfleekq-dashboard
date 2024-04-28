import React from "react";
import { Link } from "react-router-dom";
import Logo from "/onfleekq_logo1.png";
import AppButton from "../../components/buttons/button";

export default function head() {
  return (
    <section className="bg-white w-full flex justify-center p-2">
      <div className="flex justify-between items-center w-4/5 ">
        <div>
          <img src={Logo} alt="Profile Logo" className="w-[8rem]" />
        </div>

        <AppButton
          variant="tetiary"
          type="submit"
          w={{ base: "full", sm: "8rem" }}
        >
          <Link to="/dashboard/finance"> Dashboard</Link>
        </AppButton>
      </div>
    </section>
  );
}
