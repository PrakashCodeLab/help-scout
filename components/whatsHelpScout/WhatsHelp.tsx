import React from "react";
import Styles from "./WhatHelp.module.scss";
import Image from "next/image";

import whatIcon1 from "@/public/images/whaticon1.png";
import whatIcon2 from "@/public/images/whaticon2.png";
import whatIcon3 from "@/public/images/whaticon3.png";
import whatIcon4 from "@/public/images/whaticon4.png";
import whatIcon5 from "@/public/images/whaticon5.png";
import whatIcon6 from "@/public/images/whaticon6.png";
import whatIcon7 from "@/public/images/whaticon7.png";
import whatIcon8 from "@/public/images/whaticon8.png";
import LogoCompany from "@/public/logos/logo.png";
import HelpCard from "@/components/WhatHelpCard/HelpCard";

const WhatsHelp = () => {
  return (
    <section
      className={`${Styles.container__help}w-full grid items-center justify-center  mt-[2rem] overflow-hidden`}
    >
      <div className="max-w-[1250px] w-full flex justify-center items-center flex-col mt-[5rem] relative">
        <div className={`${Styles.bg__gradient}  `} />
        <div className="flex flex-col justify-center items-center gap-3 mb-[25rem]  max-laptop:mb-[35rem]">
          <h3 className="text-[2rem] text-center font-medium capitalize">
            What you can do with Help Scout
          </h3>
          <p className="text-base text-center max-w-[600px] max-tablet:max-w-[400px] leading-8 ">
            Be available right where your customers need it, and give your team
            the collaboration, organization, and automation they need to move
            faster.
          </p>
        </div>

        <div className="clock__container__styling">
         <div className={Styles.clock__group__one}>
            <div className={Styles.clock__segment__six}>
              
              <HelpCard
                img={whatIcon6}
                title={"reporting"}
                desc={
                  "Install live chat on your site in minutes and start talking to customers, supported with all the same collaboration tools you use to manage email."
                }
              />
            </div>
            <div className={Styles.clock__segment__seven}>
              
              <HelpCard
                img={whatIcon7}
                title={"customer data"}
                desc={
                  "Proactively send messages in-app or on your website to offer support, share helpful links, or make timely"  }
              />
            </div>
            <div className={Styles.clock__segment__eight}>
            
              <HelpCard
                img={whatIcon8}
                title={"integration"}
                desc={
                  "Connect Help Scout with 50+ integrations to keep your business in sync, or take advantage of our API and SDKs to customize your own experience."      }
              />
            </div>
            <div className={Styles.clock__segment__nine}>
            
              <HelpCard
                img={whatIcon5}
                title={"collabaration tools"}
                desc={
                  "Work better together with a suite of collaboration tools to keep your team in sync and elevate the customer experience"    }
              />
            </div>
          </div>
  

          <div className={Styles.clock__group__two}>
            <div className={Styles.clock__segment__one }>
            
              <HelpCard
                img={whatIcon1}
                title={"customer data"}
                desc={
                  "Install live chat on your site in minutes and start talking to customers, supported with all the same collaboration tools you use to manage email."
                }
              />
            </div>
            <div className={Styles.clock__segment__two}>
            
              <HelpCard
                img={whatIcon2}
                title={"shared inbox"}
                desc={
                  "Install live chat on your site in minutes and start talking to customers, supported with all the same collaboration tools you use to manage email."
                }
              />
            </div>
            <div className={Styles.clock__segment__three}>
            
              <HelpCard
                img={whatIcon3}
                title={"knowledge "}
                desc={
                  "Install live chat on your site in minutes and start talking to customers, supported with all the same collaboration tools you use to manage email."
                }
              />
            </div>
            <div className={Styles.clock__segment__four}>
            
              <HelpCard
                img={whatIcon4}
                title={"live chat"}
                desc={
                  "Install live chat on your site in minutes and start talking to customers, supported with all the same collaboration tools you use to manage email."
                }
              />
            </div>
            <div className={Styles.clock__segment__five}>
            
            <HelpCard
              img={LogoCompany}
              title={""}
              desc={
                "Install live chat on your site in minutes and start talking to customers, supported with all the same collaboration tools you use to manage email."
              }
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsHelp;
