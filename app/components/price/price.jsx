"use client";

import Image from "next/image";
import "./price.scss";

const Price = () => {
  return (
    <div className="plan_main">
      <div className="plan-sec">
        <div className="plan-heading">
          <div className="plan-content-holder">
            <h1 className="heading">Choose Your Plan</h1>
            <p className="plan-sub-heading">
              Get free measurement and installation services. Contact us today
              for a personalized quotation.
            </p>
          </div>
        </div>

        <div className="plan-card-holder">
          {/* Basic Plan */}
          <div className="card-plan bg-white border-b-amber-100">
            <p className="text-black font-bold">Basic Curtains</p>
            <h1 className="plan-price">₹80 - ₹120 per sq. ft.</h1>

            <div className="plan-card-content">
              <Image
                src="/images/plan-icon.svg"
                alt="icon"
                width={14}
                height={14}
              />
              <p>Plain polyester curtains</p>
            </div>

            <div className="plan-card-content">
              <Image
                src="/images/plan-icon.svg"
                alt="icon"
                width={14}
                height={14}
              />
              <p>Standard stitching</p>
            </div>

            <div className="plan-card-content">
              <Image
                src="/images/plan-icon.svg"
                alt="icon"
                width={14}
                height={14}
              />
              <p>Multiple color options</p>
            </div>

            <div className="plan-card-content">
              <Image
                src="/images/plan-icon.svg"
                alt="icon"
                width={14}
                height={14}
              />
              <p>Free measurement</p>
            </div>

            <div className="plan-button-holder m-10">
              <button className="plan-button bg-gray-500">
                Explore Collection
                <Image
                  src="/images/right-arrow.svg"
                  alt="arrow"
                  width={14}
                  height={14}
                />
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="card-plan card-blue bg-gray-800 border-b-amber-100 text-white">
            <p className="text-white font-bold">Premium Curtains</p>
            <h1 className="text-amber-200 plan-price">
              ₹150 - ₹250 per sq. ft.
            </h1>

            <div className="plan-card-content">
              <Image
                src="/images/plan-yellow-Icon.svg"
                alt="icon"
                width={14}
                height={14}
              />
              <p>Blackout curtains</p>
            </div>

            <div className="plan-card-content">
              <Image
                src="/images/plan-yellow-Icon.svg"
                alt="icon"
                width={14}
                height={14}
              />
              <p>Better fabric quality</p>
            </div>

            <div className="plan-card-content">
              <Image
                src="/images/plan-yellow-Icon.svg"
                alt="icon"
                width={14}
                height={14}
              />
              <p>Custom stitching</p>
            </div>

            <div className="plan-card-content">
              <Image
                src="/images/plan-yellow-Icon.svg"
                alt="icon"
                width={14}
                height={14}
              />
              <p>Installation support</p>
            </div>

            <div className="plan-button-holder m-10">
              <button className="plan-button bg-gray-500 text-white">
                Explore Collection
                <Image
                  src="/images/right-arrow.svg"
                  alt="arrow"
                  width={14}
                  height={14}
                />
              </button>
            </div>
          </div>

          {/* Luxury Plan */}
          <div className="card-plan bg-white border-b-amber-100 pt-20">
            <p className="text-black font-bold">Luxury Curtains</p>
            <h1 className="plan-price">₹300 - ₹800 per sq. ft.</h1>

            <div className="plan-card-content">
              <Image
                src="/images/plan-icon.svg"
                alt="icon"
                width={14}
                height={14}
              />
              <p>Imported fabrics</p>
            </div>

            <div className="plan-card-content">
              <Image
                src="/images/plan-icon.svg"
                alt="icon"
                width={14}
                height={14}
              />
              <p>Designer patterns</p>
            </div>

            <div className="plan-card-content">
              <Image
                src="/images/plan-icon.svg"
                alt="icon"
                width={14}
                height={14}
              />
              <p>Motorized curtain options</p>
            </div>

            <div className="plan-card-content">
              <Image
                src="/images/plan-icon.svg"
                alt="icon"
                width={14}
                height={14}
              />
              <p>Complete customization</p>
            </div>

            <div className="plan-button-holder m-10">
              <button className="plan-button bg-gray-500">
                Explore Collection
                <Image
                  src="/images/right-arrow.svg"
                  alt="arrow"
                  width={14}
                  height={14}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;